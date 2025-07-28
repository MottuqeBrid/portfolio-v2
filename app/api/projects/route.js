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

export async function PATCH(req) {
  const body = await req.json();
  const { _id } = body;
  await connectDB();
  const project = await ProjectModel.findOneAndUpdate({ _id: _id }, body, {
    new: true,
  });
  if (!project) {
    return Response.json(
      { success: false, error: "Project not found." },
      { status: 404 }
    );
  }
  return Response.json({ success: true, data: project });
}

export async function DELETE(req) {
  const body = await req.json();
  const { _id } = body;
  if (!_id) {
    return Response.json(
      { success: false, error: "Project ID is required." },
      { status: 400 }
    );
  }

  await connectDB();
  const project = await ProjectModel.findByIdAndDelete(id);
  if (!project) {
    return Response.json(
      { success: false, error: "Project not found." },
      { status: 404 }
    );
  }

  return Response.json({ success: true, data: project });
}
