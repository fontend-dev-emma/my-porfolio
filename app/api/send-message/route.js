import { sendEmail } from "@/app/_libs/sendEmail";
import { NextResponse } from "next/server";

function capitalizeName(name) {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export async function POST(req) {
  try {
    const { fullName, email, message } = await req.json();
    const to = "contact@waziri.dev";
    const subject = "New Inquiry from Portfolio Contact Form";

    const htmlContent = `<div style="font-family: Arial, sans-serif; max-width:600px; margin:auto; padding:0; background:#ffffff; border:1px solid #eee; border-radius:8px; overflow:hidden;">

  <div style="text-align:center; padding:20px; background:#6B21A8; color:#fff;">
    <img src="https://waziri.dev/my-favico.png"
         alt="Waziri.dev Logo"
         style="max-height:60px; margin-bottom:10px;" />
    <h2 style="margin:0; font-size:22px;">Waziri.dev Portfolio</h2>
    <p style="margin:5px 0 0; font-size:13px; color:#e0d4eb;">Portfolio Contact Form Submission</p>
  </div>

  <div style="padding:20px; color:#333;">
    <p style="font-size:15px; line-height:1.6; margin-bottom:10px;">
      You have received a new message from your portfolio contact form:
    </p>
    <p style="font-size:14px; line-height:1.6; margin-bottom:15px;">
      <strong>Full Name:</strong> ${capitalizeName(fullName)} <br/>
      <strong>Email:</strong> ${email} <br/>
      <strong>Message:</strong> <br/>
      ${message}
    </p>
    <p style="font-size:14px; line-height:1.6;">
      Best regards, <br/>
      <strong>Waziri.dev</strong>
    </p>
  </div>

  <div style="text-align:center; padding:15px; font-size:12px; color:#666; border-top:1px solid #eee;">
    <p style="margin:0;">&copy; 2025 Waziri Emmanuel. All rights reserved.</p>
    <p style="margin-top:5px;">This email was sent via your portfolio contact form.</p>
  </div>

</div>`;

    await sendEmail({
      to,
      subject,
      htmlContent,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
