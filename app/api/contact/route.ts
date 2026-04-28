import { connectDB } from "../../../lib/db";
import Contact from "../../../models/Contact";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("BODY:", body); // 👈 DEBUG

    await connectDB();

    const newContact = await Contact.create(body);

    console.log("SAVED:", newContact); // 👈 DEBUG

    return NextResponse.json({ success: true, data: newContact });
  } catch (error: any) {
    console.log("ERROR:", error.message); // 👈 VERY IMPORTANT
    return NextResponse.json({ success: false, error: error.message });
  }
}