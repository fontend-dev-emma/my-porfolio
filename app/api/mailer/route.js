// import { sendEmail } from "@/app/_lib/sendEmail";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     const { to, subject, message } = await req.json();

//     const htmlContent = `
//       <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto; padding:20px; background:#ffffff; border:1px solid #eee; border-radius:8px;">

//         <div style="text-align:center; padding-bottom:20px; border-bottom:2px solid #06102b;">

//           <img src="https://swiftport.uk/my-favico.png"
//      alt="Swift Port Truck Logo"
//      style="max-height:60px;" />

//           <h2 style="margin:10px 0; color:#06102b; font-size:22px;">Swift Port Logistics</h2>
//           <p style="margin:0; font-size:13px; color:#777;">Official Communication</p>
//         </div>

//         <div style="padding:20px; color:#333;">
//           <p style="font-size:15px; line-height:1.6;">
//             Dear Client,
//           </p>
//           <p style="font-size:14px; line-height:1.6;">
//             ${message}
//           </p>
//           <p style="font-size:14px; line-height:1.6; margin-top:20px;">
//             Best regards, <br/>
//             <strong>Swift Port Logistics Team</strong>
//           </p>
//         </div>

//         <div style="text-align:center; padding:15px; border-top:1px solid #eee; font-size:12px; color:#666;">
//           <p style="margin:0;">Swift Port Logistics &copy; 2025</p>
//           <p style="margin-top:5px;">You are receiving this email as a valued client of Swift Port Logistics.</p>
//         </div>
//       </div>
//     `;

//     await sendEmail({
//       to,
//       subject,
//       htmlContent,
//     });

//     return NextResponse.json({ success: true, message: "Email sent successfully" });
//   } catch (err) {
//     return NextResponse.json({ success: false, error: err.message }, { status: 500 });
//   }
// }
