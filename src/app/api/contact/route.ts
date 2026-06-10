import { NextRequest, NextResponse } from "next/server";
interface ContactPayload { name:string; organization:string; email:string; projectType:string; message:string; }
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactPayload;
    const { name, email, message } = body;
    if (!name || !email || !message) return NextResponse.json({ error:"Missing required fields" }, { status:400 });
    // Uncomment to use Resend:
    // const { Resend } = await import("resend");
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ from:"noreply@yelloweb.co", to:["hello@yelloweb.co"], subject:`Inquiry from ${name}`, html:`<p>${message}</p>` });
    console.log("Contact submission:", body);
    return NextResponse.json({ success:true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error:"Internal server error" }, { status:500 });
  }
}
