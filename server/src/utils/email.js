import nodemailer from 'nodemailer';

let transporter = null;

try {
  if (process.env.SMTP_HOST && process.env.SMTP_USER) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
} catch (error) {
  console.warn('SMTP configuration error:', error.message);
}

export const sendEmail = async (to, subject, html) => {
  if (!transporter) {
    console.warn('SMTP not configured. Email not sent to:', to);
    return null;
  }

  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || 'TIVRA CRM <noreply@tivra.com>',
      to,
      subject,
      html,
    });
    return info;
  } catch (error) {
    console.error('Failed to send email:', error.message);
    throw error;
  }
};
