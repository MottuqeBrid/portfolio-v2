"use client";
// import { getProjects } from "@/lib/getProjects";
import Link from "next/link";
import { format } from "date-fns";
import { FaGithub, FaRegEdit } from "react-icons/fa";
import DeleteBtn from "./(components)/DeleteBtn";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    setLoading(true);
    const res = await fetch("/api/projects", {
      cache: "no-store",
    });
    const projects = await res.json();
    // const projects = await getProjects();
    setData(projects.data);
    setLoading(false);
  }

  const formatDate = (dateString) => {
    return format(new Date(dateString), "PPP p");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto p-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-base-content">Dashboard</h1>
            <p className="text-base-content/70 mt-2">
              Manage your portfolio projects
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="stats shadow bg-base-100">
              <div className="stat">
                <div className="stat-title">Total Projects</div>
                <div className="stat-value text-primary">
                  {data?.length || 0}
                </div>
                <div className="stat-desc">
                  {data?.filter((p) => p.isCompleted).length || 0} completed
                </div>
              </div>
            </div>
            <Link href="/dashboard/add-project" className="btn btn-primary">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add New Project
            </Link>
          </div>
        </div>

        {/* Projects List */}
        {data?.length > 0 ? (
          <div className="space-y-4">
            {data.map((project) => (
              <div
                key={project._id}
                className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 border border-base-300"
              >
                <div className="card-body p-0">
                  <div className="flex flex-col lg:flex-row">
                    {/* Project Thumbnail */}
                    <div className="w-full lg:w-80 flex-shrink-0">
                      <figure className="relative h-48 lg:h-full rounded-t-lg lg:rounded-l-lg lg:rounded-t-none overflow-hidden">
                        {project.thumbnail ? (
                          <img
                            src={project.thumbnail}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                            <svg
                              className="w-16 h-16 text-base-content/30"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                        )}

                        {/* Status Badge */}
                        <div className="absolute top-4 left-4">
                          {project.isCompleted ? (
                            <div className="badge badge-success gap-1">
                              <svg
                                className="w-3 h-3"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              Completed
                            </div>
                          ) : (
                            <div className="badge badge-warning gap-1">
                              <svg
                                className="w-3 h-3"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              In Progress
                            </div>
                          )}
                        </div>
                      </figure>
                    </div>

                    {/* Project Details */}
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          {/* Title */}
                          <h2 className="text-2xl font-bold text-base-content mb-2">
                            {project.title}
                          </h2>

                          {/* Description */}
                          <p className="text-base-content/80 mb-3 line-clamp-2">
                            {project.description}
                          </p>

                          {/* Date & Time */}
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-base-content/60 mb-4">
                            <div className="flex items-center gap-1">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <span>
                                Created: {formatDate(project.createdAt)}
                              </span>
                            </div>
                            {project.updatedAt !== project.createdAt && (
                              <div className="flex items-center gap-1">
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                  />
                                </svg>
                                <span>
                                  Updated: {formatDate(project.updatedAt)}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Tech Stack Preview */}
                          <div className="flex flex-wrap gap-1 mb-4">
                            {project.techStack
                              .slice(0, 4)
                              .map((tech, techIndex) => (
                                <div
                                  key={techIndex}
                                  className="badge badge-outline badge-sm"
                                >
                                  {tech}
                                </div>
                              ))}
                            {project.techStack.length > 4 && (
                              <div className="badge badge-outline badge-sm">
                                +{project.techStack.length - 4} more
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 justify-between">
                        <div className="flex flex-wrap gap-2">
                          {/* Quick Links */}
                          {project?.links?.live && (
                            <Link
                              href={project?.links?.live}
                              target="_blank"
                              className="btn btn-sm btn-primary rounded"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                              Live
                            </Link>
                          )}
                          {project?.links?.githubServer && (
                            <Link
                              href={project.links.githubServer}
                              target="_blank"
                              className="btn btn-sm btn-accent rounded"
                            >
                              <FaGithub className="w-4 h-4 mr-1" />
                              Github Server
                            </Link>
                          )}
                          {project?.links?.githubClient && (
                            <Link
                              href={project.links.githubClient}
                              target="_blank"
                              className="btn btn-sm btn-secondary rounded"
                            >
                              <FaGithub className="w-4 h-4 mr-1" />
                              Github Client
                            </Link>
                          )}
                          {project?.links?.source && (
                            <Link
                              href={project.links.source}
                              target="_blank"
                              className="btn btn-sm btn-accent rounded"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              Code
                            </Link>
                          )}
                        </div>

                        {/* Admin Actions */}
                        <div className="flex flex-wrap gap-2">
                          <Link
                            href={`/dashboard/${project._id}`}
                            className="btn btn-sm btn-warning rounded"
                            title="Edit Project"
                          >
                            <FaRegEdit className="w-4 h-4 mr-1" />
                            Edit
                          </Link>
                          <DeleteBtn fetchData={fetchData} id={project?._id} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 bg-base-200 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-base-content/30"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-base-content mb-2">
              No Projects Yet
            </h3>
            <p className="text-base-content/70 mb-6">
              Create your first project to get started with your portfolio.
            </p>
            <Link href="/dashboard/add-project" className="btn btn-primary">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add New Project
            </Link>
          </div>
        )}
      </div>
    </div>
  );

  // try {
  //   // Use the imported function instead of fetch
  //   const data = await getProjects();

  //   return (

  //   );
  // } catch (error) {
  //   return (

  //   );
  // }
}
