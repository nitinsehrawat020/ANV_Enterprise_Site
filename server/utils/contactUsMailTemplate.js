// Contact Us Email Template Generator
// Usage: getContactUsMailTemplate({ name, email, phone, message })

export function getContactUsMailTemplate({ name, email, phone, message }) {
  const submittedAt = new Date().toLocaleString();
  return `
    <div style="font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;max-width:600px;margin:0 auto;background:#f8f9fa;padding:32px 24px 24px 24px;border-radius:12px;box-shadow:0 4px 16px rgba(0,0,0,0.07);">
      <h2 style="color:#007bff;margin-top:0;">📩 New Contact Us Submission</h2>
      <p style="color:#333;font-size:16px;">A new contact form has been submitted on your website. Here are the details:</p>
      <table style="width:100%;margin:24px 0 18px 0;font-size:15px;border-collapse:collapse;">
        <tr><td style="font-weight:600;padding:8px 0;width:120px;">Name:</td><td>${name || "-"}</td></tr>
        <tr><td style="font-weight:600;padding:8px 0;">Email:</td><td>${email || "-"}</td></tr>
        <tr><td style="font-weight:600;padding:8px 0;">Phone:</td><td>${phone || "-"}</td></tr>
        <tr><td style="font-weight:600;padding:8px 0;vertical-align:top;">Message:</td><td style="white-space:pre-line;">${message || "-"}</td></tr>
      </table>
      <div style="color:#888;font-size:13px;margin-top:18px;">Submitted: ${submittedAt}</div>
      <div style="margin-top:24px;font-size:13px;color:#6c757d;">This is an automated notification from your website's Contact Us form.</div>
    </div>
  `;
}
