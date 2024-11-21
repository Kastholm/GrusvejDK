import { defineEventHandler, readBody } from 'h3';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const send = defineEventHandler(async (event) => {
  const { email, phone, name } = await readBody(event);
  console.log("frist data", email, phone, name);
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["webbermanden@gmail.com"],
      // Update with your actual recipient
      subject: `New Contact Request from ${name}`,
      html: `
        <p><strong>New Contact Request:</strong></p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
      `
    });
    console.log("received data send.ts", data);
    return { success: true, data };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message || "Unknown error" };
  }
});

export { send as default };
//# sourceMappingURL=send.mjs.map
