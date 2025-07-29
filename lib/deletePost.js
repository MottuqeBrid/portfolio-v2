import ProjectModel from "@/models/Project.Model";
import { connectDB } from "./connectDB";


export async function deletePost(id) {
  try {
    await connectDB();
    const project = await ProjectModel.findByIdAndDelete(id);
    return JSON.parse(JSON.stringify({ success: true, data: project }));
  } catch (error) {
    console.error("Error fetching projects:", error);
    return JSON.parse(
      JSON.stringify({ success: false, error: "Failed to delete project." })
    );
  }
}
