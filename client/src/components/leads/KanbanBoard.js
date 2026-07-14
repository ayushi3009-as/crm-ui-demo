'use client';
import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { formatDistanceToNow } from 'date-fns';
import toast from 'react-hot-toast';
import { HiOutlinePhone, HiOutlineEnvelope } from 'react-icons/hi2';

const COLUMNS = [
  { id: 'NEW', title: 'New', color: 'border-blue-500 bg-blue-50/50', textColor: 'text-blue-700' },
  { id: 'CONTACTED', title: 'Contacted', color: 'border-orange-500 bg-orange-50/50', textColor: 'text-orange-700' },
  { id: 'QUALIFIED', title: 'Qualified', color: 'border-emerald-500 bg-emerald-50/50', textColor: 'text-emerald-700' },
  { id: 'PROPOSAL', title: 'Proposal', color: 'border-purple-500 bg-purple-50/50', textColor: 'text-purple-700' },
  { id: 'NEGOTIATION', title: 'Negotiation', color: 'border-yellow-500 bg-yellow-50/50', textColor: 'text-yellow-700' },
  { id: 'WON', title: 'Won', color: 'border-green-500 bg-green-50/50', textColor: 'text-green-700' }
];

export default function KanbanBoard({ leads, onStatusChange }) {
  const [boardData, setBoardData] = useState({});
  const [isBrowser, setIsBrowser] = useState(false);

  // Fix hydration issues with drag and drop in Next.js
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    // Group leads by status
    const initialData = {};
    COLUMNS.forEach(col => {
      initialData[col.id] = leads.filter(lead => lead.status === col.id);
    });
    // Add LOST leads to a hidden column or just exclude them from the board for now
    setBoardData(initialData);
  }, [leads]);

  const onDragEnd = async (result) => {
    const { source, destination, draggableId } = result;

    // Dropped outside a column
    if (!destination) return;

    // Dropped in the same column and same position
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    const sourceStatus = source.droppableId;
    const destStatus = destination.droppableId;

    // Optimistically update the UI
    const sourceColumn = Array.from(boardData[sourceStatus]);
    const destColumn = Array.from(boardData[destStatus]);
    const [movedLead] = sourceColumn.splice(source.index, 1);
    
    movedLead.status = destStatus;
    
    if (sourceStatus === destStatus) {
      sourceColumn.splice(destination.index, 0, movedLead);
      setBoardData({
        ...boardData,
        [sourceStatus]: sourceColumn
      });
    } else {
      destColumn.splice(destination.index, 0, movedLead);
      setBoardData({
        ...boardData,
        [sourceStatus]: sourceColumn,
        [destStatus]: destColumn
      });
    }

    // Hit the API to update the database
    if (sourceStatus !== destStatus) {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch(`http://localhost:5000/api/leads/${draggableId}/status`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ status: destStatus })
        });
        
        const data = await res.json();
        if (data.success) {
          toast.success(`Moved to ${COLUMNS.find(c => c.id === destStatus).title}`);
          if (onStatusChange) onStatusChange(); // Trigger a refetch in parent
        } else {
          toast.error('Failed to update status');
          // Should revert state here ideally, but for now we'll just trigger a refetch
          if (onStatusChange) onStatusChange();
        }
      } catch (err) {
        toast.error('Network error while updating status');
        if (onStatusChange) onStatusChange();
      }
    }
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-emerald-500 bg-emerald-50 border-emerald-200';
    if (score >= 50) return 'text-orange-500 bg-orange-50 border-orange-200';
    return 'text-red-500 bg-red-50 border-red-200';
  };

  if (!isBrowser) return null;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-4 overflow-x-auto pb-6 pt-2 hide-scrollbar min-h-[600px] h-[calc(100vh-280px)]">
        {COLUMNS.map(column => (
          <div key={column.id} className="flex-shrink-0 w-80 flex flex-col">
            {/* Column Header */}
            <div className={`mb-3 px-4 py-3 rounded-xl border-t-4 shadow-sm flex items-center justify-between bg-white ${column.color}`}>
              <h3 className={`font-bold text-sm ${column.textColor}`}>{column.title}</h3>
              <span className="bg-white/80 text-slate-500 text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                {boardData[column.id]?.length || 0}
              </span>
            </div>

            {/* Column Droppable Area */}
            <Droppable droppableId={column.id}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`flex-1 rounded-xl transition-colors p-2 ${snapshot.isDraggingOver ? 'bg-slate-100' : 'bg-slate-50/50'}`}
                >
                  {boardData[column.id]?.map((lead, index) => (
                    <Draggable key={lead.id} draggableId={lead.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`bg-white p-4 rounded-xl border mb-3 flex flex-col gap-3 shadow-sm transition-shadow ${snapshot.isDragging ? 'border-blue-500 shadow-xl scale-[1.02] rotate-1' : 'border-slate-200 hover:border-blue-300 hover:shadow-md'}`}
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="font-bold text-slate-900 text-sm">{lead.fullName}</p>
                              <p className="text-xs text-slate-500 font-medium truncate max-w-[180px]">{lead.companyName || 'No Company'}</p>
                            </div>
                            <span className={`text-xs font-bold px-2 py-1 rounded-md border ${getScoreColor(lead.leadScore)}`}>
                              {lead.leadScore}
                            </span>
                          </div>
                          
                          <div className="flex flex-col gap-1.5 mt-1">
                            {lead.phone && (
                              <p className="text-[11px] text-slate-500 flex items-center gap-1.5 font-medium">
                                <HiOutlinePhone className="w-3.5 h-3.5 text-slate-400" /> {lead.phone}
                              </p>
                            )}
                            {lead.email && (
                              <p className="text-[11px] text-slate-500 flex items-center gap-1.5 font-medium truncate">
                                <HiOutlineEnvelope className="w-3.5 h-3.5 text-slate-400" /> {lead.email}
                              </p>
                            )}
                          </div>

                          <div className="mt-2 pt-3 border-t border-slate-100 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              {lead.assignedTo ? (
                                <>
                                  <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-[9px] font-bold uppercase">
                                    {lead.assignedTo.name.substring(0, 2)}
                                  </div>
                                  <span className="text-[10px] font-semibold text-slate-600">{lead.assignedTo.name}</span>
                                </>
                              ) : (
                                <span className="text-[10px] font-semibold text-slate-400 italic">Unassigned</span>
                              )}
                            </div>
                            <span className="text-[10px] text-slate-400 font-medium">
                              {formatDistanceToNow(new Date(lead.createdAt), { addSuffix: true })}
                            </span>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
}
