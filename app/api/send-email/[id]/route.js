import EmailModel from "@/models/Email.Model";

export async function DELETE(req, { params }) {
  const { id } = params;
  try {
    const email = await EmailModel.findByIdAndDelete(id);
    if (!email) {
      return Response.json({ success: false, message: "Email not found" });
    }
    return Response.json({
      success: true,
      message: "Email deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting email:", error);
    return Response.json({ success: false, message: "Failed to delete email" });
  }
}
export async function POST(req, { params }) {
  const { id } = await params;
  console.log("Marking email as read for ID:", id);
  const body = await req.json();
  try {
    const email = await EmailModel.findByIdAndUpdate(id, body, { new: true });
    if (!email) {
      return Response.json({ success: false, message: "Email not found" });
    }
    return Response.json({ success: true, message: "Email marked as read" });
  } catch (error) {
    console.error("Error marking email as read:", error);
    return Response.json({
      success: false,
      message: "Failed to mark email as read",
    });
  }
}
