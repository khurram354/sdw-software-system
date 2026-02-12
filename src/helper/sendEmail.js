import { createTransport } from "nodemailer";
const sendEmail = async (...args) => {
  let formData;
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null) {
    formData = args[0];
  } else {
    const [
      firstName, lastName, email, phone, company, companySize,
      industry, jobTitle, country, preferredDate, preferredTime,
      message, agreeToTerms
    ] = args;
    formData = {
      firstName, lastName, email, phone, company, companySize,
      industry, jobTitle, country, preferredDate, preferredTime,
      message, agreeToTerms
    };
  }
  const {
    firstName = '',
    lastName = '',
    email = '',
    phone = '',
    company = '',
    companySize = '',
    industry = '',
    jobTitle = '',
    country = '',
    preferredDate = '',
    preferredTime = '',
    message = '',
    agreeToTerms = false
  } = formData;

  const safe = (value) => (value != null ? String(value).trim() : '') || '—';

  const transporter = createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const htmlTemplate = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
          .header { background: #2c3e50; padding: 20px; text-align: center; }
          .header h1 { color: white; margin: 0; font-size: 24px; }
          .content { padding: 30px; }
          .field { margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px; }
          .label { font-weight: bold; color: #2c3e50; display: inline-block; min-width: 140px; }
          .value { color: #555; }
          .message-box { background: #f9f9f9; padding: 15px; border-left: 4px solid #3498db; margin-top: 10px; }
          .footer { background: #ecf0f1; padding: 15px; text-align: center; font-size: 12px; color: #7f8c8d; }
          .terms-yes { color: #27ae60; } .terms-no { color: #e74c3c; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header"><h1> SDW System Inquiry</h1></div>
          <div class="content">
            <div class="field"><span class="label">Full name:</span> <span class="value">${safe(firstName)} ${safe(lastName)}</span></div>
            <div class="field"><span class="label">Email:</span> <span class="value"><a href="mailto:${safe(email)}">${safe(email)}</a></span></div>
            <div class="field"><span class="label">Phone:</span> <span class="value">${safe(phone)}</span></div>
            <div class="field"><span class="label">Company:</span> <span class="value">${safe(company)}</span></div>
            <div class="field"><span class="label">Company size:</span> <span class="value">${safe(companySize)}</span></div>
            <div class="field"><span class="label">Industry:</span> <span class="value">${safe(industry)}</span></div>
            <div class="field"><span class="label">Job title:</span> <span class="value">${safe(jobTitle)}</span></div>
            <div class="field"><span class="label">Country:</span> <span class="value">${safe(country)}</span></div>
            <div class="field"><span class="label">Preferred date:</span> <span class="value">${safe(preferredDate)}</span></div>
            <div class="field"><span class="label">Preferred time:</span> <span class="value">${safe(preferredTime)}</span></div>

            <div style="margin-top: 25px;">
              <span class="label">Message:</span>
              <div class="message-box">
                ${typeof message === 'string' ? message.replace(/\n/g, '<br>') : safe(message)}
              </div>
            </div>

            <div style="margin-top: 25px;">
              <span class="label">Terms and Privicy Policy Accepted:</span>
              <span class="value ${agreeToTerms ? 'terms-yes' : 'terms-no'}">
                ${agreeToTerms ? '✅ Yes' : '❌ No'}
              </span>
            </div>
          </div>
          <div class="footer">Sent via Spice Direct wholesale contact form</div>
        </div>
      </body>
    </html>
  `;

  try {
    const info = await transporter.sendMail({
      from: `"SDW System" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email || process.env.EMAIL_USER,
      subject: `SDW System inquiry from ${safe(firstName)} ${safe(lastName)} - ${safe(company)}`,
      html: htmlTemplate,
      text: `Name: ${safe(firstName)} ${safe(lastName)}\nEmail: ${safe(email)}\n...`,
    });
    return info;
  } catch (error) {
    console.error('Email send error:', error);
    throw new Error('Failed to send email');
  }
};

export default sendEmail;