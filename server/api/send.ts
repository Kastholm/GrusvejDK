import { Resend } from "resend";

export default defineEventHandler(async (event) => {
  try {
    const { email, phone, name } = await readBody(event);

    console.log("frist data", email, phone, name);

    // Check if API key exists
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set in environment variables");
      // Set 500 status to make it explicit; handler still returns JSON
      setResponseStatus(event, 500);
      return { success: false, error: "Email service is not configured" };
    }

    // Initialize Resend inside the handler
    const resend = new Resend(apiKey);

    try {
      // Send the email via Resend
      const data = await resend.emails.send({
        from: "Grusvej <onboarding@resend.dev>",
        to: ["kontakt@grusvej.dk"],
        subject: `New Contact Request from ${name}`,
        html: `
          <p><strong>New Contact Request:</strong></p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
        `,
      });

      console.log("received data send.ts", data);

      return { success: true, data };
    } catch (error) {
      console.error("Error sending email:", error);
      setResponseStatus(event, 500);
      return {
        success: false,
        error: String((error as any)?.message || error || "Unknown error"),
      };
    }
  } catch (err) {
    // Catch unexpected errors (parsing, environment, etc.) and return JSON instead of HTML
    console.error("Unhandled error in /api/send:", err);
    try {
      setResponseStatus(event, 500);
    } catch (e) {}
    return { success: false, error: String((err as any)?.message || err) };
  }
});
