import EmailModel from "@/models/Email.Model";

export async function POST(req) {
  const body = await req.json();
  try {
    const email = await EmailModel.create(body);
    return Response.json(
      { success: true, message: "Email sent successfully", email },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const emails = await EmailModel.find();
    return Response.json({ success: true, emails }, { status: 200 });
  } catch (error) {
    console.error("Error fetching emails:", error);
    return Response.json(
      { success: false, message: "Failed to fetch emails" },
      { status: 500 }
    );
  }
}
