"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaCode,
  FaEye,
  FaTimes,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import Image from "next/image";

export default function MyProjects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch projects from an API or database
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjects(data.data || []);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // if (loading) {
  //   return (
  //     <section className="py-20 bg-base-100">
  //       <div className="mx-auto px-2 sm:px-8 lg:px-16">
  //         <div className="text-center">
  //           <span className="loading loading-spinner loading-lg text-primary"></span>
  //           <p className="mt-4 text-base-content/70">Loading projects...</p>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // }

  return (
    <section className="py-20 bg-base-100">
      <div className="mx-auto px-2 sm:px-8 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-base-content mb-4">
            My Projects
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            A showcase of my work and projects
          </p>
        </motion.div>

        {loading ? (
          <div className="mx-auto px-2 sm:px-8 lg:px-16">
            <div className="text-center">
              <span className="loading loading-spinner loading-lg text-primary"></span>
              <p className="mt-4 text-base-content/70">Loading projects...</p>
            </div>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20">
            <FaCode className="text-6xl text-base-content/30 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-base-content mb-2">
              No Projects Yet
            </h3>
            <p className="text-base-content/70">
              Projects will appear here once they are added.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 w-full"
              >
                <div className="card-body p-0 md:p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Left Side - Thumbnail Image */}
                    <div className="w-full md:w-80 shadow-xl rounded-2xl lg:w-96 flex-shrink-0">
                      <figure className="relative h-48 md:h-64 lg:h-72 rounded-xl  overflow-hidden">
                        {project.thumbnail ? (
                          <Image
                            src={project.thumbnail}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-110"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                            <FaCode className="text-6xl text-base-content/50" />
                          </div>
                        )}

                        {/* Status Badge */}
                        <div className="absolute top-4 right-4">
                          {project.isCompleted ? (
                            <div className="badge badge-success gap-1">
                              <FaCheckCircle className="text-xs" />
                              Completed
                            </div>
                          ) : (
                            <div className="badge badge-warning gap-1">
                              <FaClock className="text-xs" />
                              In Progress
                            </div>
                          )}
                        </div>
                      </figure>
                    </div>

                    {/* Right Side - Project Details */}
                    <div className="flex-1 p-6 md:p-0 space-y-4">
                      {/* Title */}
                      <motion.h3
                        className="text-2xl lg:text-3xl font-bold text-base-content"
                        whileHover={{ scale: 1.02 }}
                      >
                        {project.title}
                      </motion.h3>

                      {/* Description */}
                      <p className="text-base-content/80 text-lg leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-base-content">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, techIndex) => (
                            <motion.div
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: techIndex * 0.05,
                              }}
                              whileHover={{ scale: 1.1 }}
                              className="badge badge-primary"
                            >
                              {tech}
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Project Links */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-base-content">
                          Project Links:
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {project.links?.live && (
                            <motion.a
                              href={project.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FaExternalLinkAlt />
                              Live Demo
                            </motion.a>
                          )}

                          {project.links?.source && (
                            <motion.a
                              href={project.links.source}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-secondary"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FaGithub />
                              Source Code
                            </motion.a>
                          )}

                          {project.links?.githubClient && (
                            <motion.a
                              href={project.links.githubClient}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-accent"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FaGithub />
                              Client Repo
                            </motion.a>
                          )}

                          {project.links?.githubServer && (
                            <motion.a
                              href={project.links.githubServer}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-info"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FaGithub />
                              Server Repo
                            </motion.a>
                          )}

                          {/* View Details Button */}
                          <motion.button
                            onClick={() => openModal(project)}
                            className="btn btn-outline"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaEye />
                            View Details
                          </motion.button>
                        </div>
                      </div>

                      {/* Project Metadata */}
                      <div className="flex items-center gap-4 pt-2 text-sm text-base-content/70">
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt />
                          {formatDate(project.createdAt)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Project Details Modal */}
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-base-100 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-base-100 border-b border-base-300 p-6 flex justify-between items-center z-50">
                <div>
                  <h3 className="text-2xl font-bold text-base-content">
                    {selectedProject.title}
                  </h3>
                  <div className="flex items-center gap-4 mt-2 text-sm text-base-content/70">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt />
                      {formatDate(selectedProject.createdAt)}
                    </div>
                    {selectedProject.isCompleted ? (
                      <div className="badge badge-success gap-1">
                        <FaCheckCircle className="text-xs" />
                        Completed
                      </div>
                    ) : (
                      <div className="badge badge-warning gap-1">
                        <FaClock className="text-xs" />
                        In Progress
                      </div>
                    )}
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="btn btn-ghost btn-circle"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Project Images */}
                {selectedProject.images &&
                  selectedProject.images.length > 0 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Project Images</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedProject.images.map((image, index) => (
                          <div
                            key={index}
                            className="relative border border-base-300 h-48 rounded-lg overflow-hidden"
                          >
                            <Image
                              src={image}
                              alt={`${selectedProject.title} - Image ${
                                index + 1
                              }`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                {/* Long Description */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">
                    Detailed Description
                  </h4>
                  <p className="text-base-content/80 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Key Features */}
                {selectedProject.keyFeatures &&
                  selectedProject.keyFeatures.length > 0 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.keyFeatures.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <FaCheckCircle className="text-success mt-1 flex-shrink-0" />
                            <span className="text-base-content/80">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* Complete Tech Stack */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Complete Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, index) => (
                      <div key={index} className="badge badge-primary">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
