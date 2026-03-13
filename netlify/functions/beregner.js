const { Resend } = require("resend");

// Netlify Function handler for /api/beregner
exports.handler = async function (event) {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    const body = event.body ? JSON.parse(event.body) : {};
    const {
      name,
      email,
      phone,
      meters,
      roadWidth,
      service,
      roadPrice,
      dustSelected,
      dustPrice,
      totalPrice,
    } = body;

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
      <h2>Ny beregning forespørgsel</h2>
      <p><strong>Navn:</strong> ${name || "Ikke angivet"}</p>
      <p><strong>Email:</strong> ${email || "Ikke angivet"}</p>
      <p><strong>Telefon:</strong> ${phone || "Ikke angivet"}</p>
      <hr />
      <p><strong>Meter:</strong> ${meters ?? "Ikke angivet"}</p>
      <p><strong>Bredde (m):</strong> ${roadWidth ?? "Ikke angivet"}</p>
      <p><strong>m² (estimat):</strong> ${meters && roadWidth ? meters * roadWidth : "Ikke angivet"}</p>
      <p><strong>Service:</strong> ${service ?? "Ikke angivet"}</p>
      <p><strong>Vejpris:</strong> ${roadPrice ?? "Ikke angivet"}</p>
      <p><strong>Støvprodukt:</strong> ${dustSelected || ""}</p>
      <p><strong>Støvpris:</strong> ${dustPrice ?? ""}</p>
      <p><strong>Samlet pris:</strong> ${totalPrice ?? "Ikke angivet"}</p>
    `;

    try {
      const data = await resend.emails.send({
        from: "Grusvej <onboarding@resend.dev>",
        to: ["kontakt@grusvej.dk"],
        subject: `Ny beregning fra ${name || email || "ukendt"}`,
        html,
      });

      console.log("beregner sent", data);
      return { statusCode: 200, body: JSON.stringify({ success: true, data }) };
    } catch (err) {
      console.error("Error sending beregner email:", err);
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          error: String(err?.message || err),
        }),
      };
    }
  } catch (err) {
    console.error("Unhandled error in beregner function:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: String(err?.message || err),
      }),
    };
  }
};
