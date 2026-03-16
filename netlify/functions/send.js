const { Resend } = require("resend");

// Netlify Function handler for /api/send - mirrors server/api/send.ts
exports.handler = async function (event) {
  try {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ success: false, error: "Method Not Allowed" }),
      };
    }

    const body = event.body ? JSON.parse(event.body) : {};
    const { email, phone, name } = body;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          error: "Email service not configured",
        }),
      };
    }

    const resend = new Resend(apiKey);

    const html = `
      <p><strong>New Contact Request:</strong></p>
      <p><strong>Name:</strong> ${name || "Ikke angivet"}</p>
      <p><strong>Phone:</strong> ${phone || "Ikke angivet"}</p>
      <p><strong>Email:</strong> ${email || "Ikke angivet"}</p>
    `;

    try {
      const data = await resend.emails.send({
        from: "Grusvej <onboarding@resend.dev>",
        to: ["kontakt@grusvej.dk"],
        subject: `New Contact Request from ${name || email || "ukendt"}`,
        html,
      });

      console.log("send function sent", data);
      return { statusCode: 200, body: JSON.stringify({ success: true, data }) };
    } catch (err) {
      console.error("Error sending email:", err);
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          error: String(err?.message || err),
        }),
      };
    }
  } catch (err) {
    console.error("Unhandled error in send function:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: String(err?.message || err),
      }),
    };
  }
};
