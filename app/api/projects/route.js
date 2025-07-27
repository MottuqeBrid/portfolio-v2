import { connectDB } from "@/lib/connectDB";
import ProjectModel from "@/models/Project.Model";

export async function POST(req) {
  try {
    const body = await req.json();
    const { title, description, thumbnail } = body;

    if (!title || !description || !thumbnail) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields." }),
        {
          status: 400,
        }
      );
    }

    await connectDB();

    const newProject = await ProjectModel.create({
      ...body,
    });

    return new Response(JSON.stringify({ success: true, data: newProject }), {
      status: 201,
    });
  } catch (err) {
    console.error("Error creating project:", err);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to create project." }),
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  await connectDB();
  const projects = await ProjectModel.find({}).sort({ createdAt: -1 });
  return Response.json({ success: true, data: projects });
}
