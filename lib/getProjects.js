import ProjectModel from "@/models/Project.Model";
import { connectDB } from "./connectDB";

export async function getProjects() {
  try {
    await connectDB();
    const projects = await ProjectModel.find({}).sort({ createdAt: -1 });
    return JSON.parse(JSON.stringify(projects));
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export const getSingleProject = async (id) => {
  try {
    await connectDB();
    const project = await ProjectModel.findById(id);
    if (!project) {
      throw new Error("Project not found");
    }
    return JSON.parse(JSON.stringify({success: true, data: project}));
  } catch (error) {
    console.error("Error fetching projects:", error);
    return {
      success: false,
      error: error.message || "An error occurred while fetching the project."};
  }
};
