import { Resend } from "resend";

// process.env.RESEND_API_KEY

let resend: Resend;
if (process.env.RESEND_API_KEY) {
  resend = new Resend(process.env.RESEND_API_KEY);
} else {
  resend = new Resend("re_1234567890abcdefsda");
}

export default defineEventHandler(async (event) => {
  const { email, phone, name } = await readBody(event);

  console.log("frist data", email, phone, name);

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
    return { success: false, error: error.message || "Unknown error" };
  }
});

/* import { Resend } from "resend";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { email, name, phone } = body;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const response = await resend.emails.send({
      from: "Kontakt@grusvej.dk",
      to: "kontakt@grusvej.dk",
      subject: `Kontaktforespørgsel fra ${name}`,
      html: `
        <p><strong>Ny kontaktforespørgsel:</strong></p>
        <p><strong>Navn:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>E-mail:</strong> ${email}</p>
      `,
    });

    // Log the response to understand what it contains
    console.log("Resend API response:", response);

    return { success: true, data: response };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
}); */
