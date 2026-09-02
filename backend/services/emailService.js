import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendContactEmail = async (contact) => {
    const {
        name,
        email,
        phone,
        company,
        subject,
        message,
    } = contact;

    const mailOptions = {
        from: `"247 Leads Express" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        replyTo: email,
        subject: `New Contact Form Lead - ${subject || "No Subject"}`,

        html: `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto;">

        <h2 style="background: #111; color: #fff; padding: 18px;">
          New Contact Form Lead
        </h2>

        <div style="padding: 20px; border: 1px solid #ddd;">

          <p><strong>Name:</strong> ${name}</p>

          <p>
            <strong>Email:</strong>
            <a href="mailto:${email}">${email}</a>
          </p>

          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>

          <p><strong>Company:</strong> ${company || "Not provided"}</p>

          <p><strong>Subject:</strong> ${subject || "Not provided"}</p>

          <p><strong>Message:</strong></p>

          <div style="
            background: #f5f5f5;
            padding: 15px;
            border-left: 4px solid #d00000;
          ">
            ${message}
          </div>

        </div>

        <p style="color: #777; font-size: 12px;">
          This email was generated from the 247 Leads Express website.
        </p>

      </div>
    `,
    };

    await transporter.sendMail(mailOptions);

    console.log("✅ Contact email sent successfully");
};