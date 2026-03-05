import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, _gotcha } = body;

    // Honeypot check
    if (_gotcha) {
      return NextResponse.json({ message: "Bot detected" }, { status: 200 });
    }

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Here you would integrate with an email service like Resend, SendGrid, or Nodemailer
    // console.log("Form submission:", { name, email, phone, message });

    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}