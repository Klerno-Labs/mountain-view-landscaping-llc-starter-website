import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, _gotcha } = body;

    // Honeypot check
    if (_gotcha) {
      return NextResponse.json({ success: true }); // Return success to bot but don't process
    }

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real app, you would send an email here using Nodemailer, SendGrid, or Resend
    console.log("Form Submission:", { name, email, phone, service, message });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }
}