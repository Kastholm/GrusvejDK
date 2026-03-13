import { Resend } from "resend";

export default defineEventHandler(async (event) => {
  try {
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
    } = await readBody(event);

    console.log("beregner data", {
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
    });

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set in environment variables");
      setResponseStatus(event, 500);
      return { success: false, error: "Email service is not configured" };
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
      <p><strong>m² (estimat):</strong> ${
        meters && roadWidth ? meters * roadWidth : "Ikke angivet"
      }</p>
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
      return { success: true, data };
    } catch (error) {
      console.error("Error sending beregner email:", error);
      setResponseStatus(event, 500);
      return {
        success: false,
        error: String((error as any)?.message || error || "Unknown error"),
      };
    }
  } catch (err) {
    console.error("Unhandled error in /api/beregner:", err);
    try {
      setResponseStatus(event, 500);
    } catch (e) {}
    return { success: false, error: String((err as any)?.message || err) };
  }
});
