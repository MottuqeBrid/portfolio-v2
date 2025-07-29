import { connectDB } from "@/lib/connectDB";
import ProjectModel from "@/models/Project.Model";

export async function DELETE(req, { params }) {
  console.log("Delete request received", params);
  const { id } = params;
  console.log("Delete request ID:", id);
  if (!id) {
    return Response.json(
      { success: false, error: "Project ID is required." },
      { status: 400 }
    );
  }

  await connectDB();
  const project = await ProjectModel.findById(id);
  if (!project) {
    return Response.json(
      { success: false, error: "Project not found." },
      { status: 404 }
    );
  }
  const deletedProject = await ProjectModel.findByIdAndDelete(id);

  return Response.json({ success: true, data: deletedProject });
}
