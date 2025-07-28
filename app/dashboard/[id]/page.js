import EditForm from "./EditForm";
import { getSingleProject } from "@/lib/getProjects";

export default async function EditProject({ params }) {
  const { id } = await params;
  const { success, data: project } = await getSingleProject(id);
  return (
    <div>
      <EditForm project={project} />
    </div>
  );
}
