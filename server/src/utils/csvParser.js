import fs from 'fs';
import csv from 'csv-parser';
import xlsx from 'xlsx';

export const parseCSV = (filePath) => {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });
};

export const parseExcel = (filePath) => {
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  return xlsx.utils.sheet_to_json(worksheet);
};

export const parseFile = async (filePath, mimeType) => {
  if (
    mimeType === 'text/csv' ||
    mimeType === 'application/csv' ||
    filePath.endsWith('.csv')
  ) {
    return parseCSV(filePath);
  }

  if (
    mimeType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
    mimeType === 'application/vnd.ms-excel' ||
    filePath.endsWith('.xlsx') ||
    filePath.endsWith('.xls')
  ) {
    return parseExcel(filePath);
  }

  throw new Error('Unsupported file type. Please upload a CSV or Excel file.');
};
