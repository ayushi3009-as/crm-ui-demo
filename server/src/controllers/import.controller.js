import prisma from '../config/db.js';
import { parseFile } from '../utils/csvParser.js';
import fs from 'fs';

export const uploadLeads = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'Please upload a file.',
      });
    }

    const filePath = req.file.path;
    const mimeType = req.file.mimetype;
    const fileName = req.file.originalname;

    let rows;
    try {
      rows = await parseFile(filePath, mimeType);
    } catch (parseError) {
      // Clean up uploaded file
      fs.unlinkSync(filePath);
      return res.status(400).json({
        success: false,
        message: `Failed to parse file: ${parseError.message}`,
      });
    }

    // Create import log
    const importLog = await prisma.importLog.create({
      data: {
        fileName,
        totalRows: rows.length,
        status: 'PROCESSING',
        importedById: req.user.id,
      },
    });

    let successCount = 0;
    let duplicateCount = 0;
    let failedCount = 0;
    const errors = [];

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      try {
        const fullName = row['Full Name'] || row['full_name'] || row['fullName'] || row['Name'] || row['name'] || '';
        const email = row['Email'] || row['email'] || row['Email Address'] || '';
        const phone = row['Phone'] || row['phone'] || row['Phone Number'] || row['Mobile'] || '';
        const companyName = row['Company'] || row['company'] || row['Company Name'] || row['company_name'] || '';
        const city = row['City'] || row['city'] || '';
        const interest = row['Interest'] || row['interest'] || '';

        if (!fullName.trim()) {
          failedCount++;
          errors.push({ row: i + 1, message: 'Full name is required.' });
          continue;
        }

        // Check for duplicates by email or phone
        let isDuplicate = false;
        if (email && email.trim()) {
          const existingByEmail = await prisma.lead.findFirst({
            where: { email: email.trim() },
          });
          if (existingByEmail) isDuplicate = true;
        }

        if (!isDuplicate && phone && phone.trim()) {
          const existingByPhone = await prisma.lead.findFirst({
            where: { phone: phone.trim() },
          });
          if (existingByPhone) isDuplicate = true;
        }

        if (isDuplicate) {
          duplicateCount++;
          continue;
        }

        const lead = await prisma.lead.create({
          data: {
            fullName: fullName.trim(),
            email: email.trim() || null,
            phone: phone.trim() || null,
            companyName: companyName.trim() || null,
            city: city.trim() || null,
            interest: interest.trim() || null,
            status: 'NEW',
            createdById: req.user.id,
          },
        });

        await prisma.activity.create({
          data: {
            leadId: lead.id,
            userId: req.user.id,
            type: 'IMPORT',
            title: 'Lead imported',
            description: `Lead "${fullName.trim()}" imported from ${fileName}.`,
          },
        });

        successCount++;
      } catch (rowError) {
        failedCount++;
        errors.push({ row: i + 1, message: rowError.message });
      }
    }

    // Update import log
    await prisma.importLog.update({
      where: { id: importLog.id },
      data: {
        successCount,
        duplicateCount,
        failedCount,
        status: failedCount === rows.length ? 'FAILED' : 'COMPLETED',
      },
    });

    // Clean up uploaded file
    try {
      fs.unlinkSync(filePath);
    } catch (cleanupError) {
      console.warn('Failed to clean up uploaded file:', cleanupError.message);
    }

    res.json({
      success: true,
      data: {
        importId: importLog.id,
        fileName,
        totalRows: rows.length,
        successCount,
        duplicateCount,
        failedCount,
        errors: errors.slice(0, 20),
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getImportHistory = async (req, res, next) => {
  try {
    const imports = await prisma.importLog.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        importedBy: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    res.json({
      success: true,
      data: imports,
    });
  } catch (error) {
    next(error);
  }
};

export const getTemplate = async (req, res, next) => {
  try {
    const headers = 'Full Name,Email,Phone,Company,City,Interest\n';
    const sampleRow = 'John Doe,john@example.com,9876543210,Acme Corp,Mumbai,Product Demo\n';

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=lead_import_template.csv');
    res.send(headers + sampleRow);
  } catch (error) {
    next(error);
  }
};
