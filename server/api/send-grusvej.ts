import { Resend } from "resend";

export default defineEventHandler(async (event) => {
  try {
    const { email, phone, name, text } = await readBody(event);

    console.log("Grusvej form data received:", {
      email,
      phone,
      name,
      text,
    });

    // Check if API key exists
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set in environment variables");
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
        subject: `Ny grusvejs forespørgsel fra ${name}`,
        html: `
          <p><strong>Ny grusvejs forespørgsel:</strong></p>
          <p><strong>Navn:</strong> ${name}</p>
          <p><strong>Telefon:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Besked:</strong></p>
          <p>${text || "Ingen besked givet"}</p>
        `,
      });

      console.log("Grusvej email sent:", data);

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
    console.error("Unhandled error in /api/send-grusvej:", err);
    try {
      setResponseStatus(event, 500);
    } catch (e) {}
    return { success: false, error: String((err as any)?.message || err) };
  }
});
