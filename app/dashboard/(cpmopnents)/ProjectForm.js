"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  FaPlus,
  FaTimes,
  FaCode,
  FaExternalLinkAlt,
  FaGithub,
  FaImage,
  FaSave,
  FaSpinner,
} from "react-icons/fa";

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    longDescription: "",
    thumbnail: "",
    techStack: [],
    keyFeatures: [],
    images: [],
    links: {
      live: "",
      source: "",
      githubClient: "",
      githubServer: "",
    },
    isCompleted: false,
  });

  const [tempInputs, setTempInputs] = useState({
    techStack: "",
    keyFeatures: "",
    images: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // Handle regular input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.includes(".")) {
      // Handle nested object (links)
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  // Handle temporary input changes for arrays
  const handleTempInputChange = (e) => {
    const { name, value } = e.target;
    setTempInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add item to array fields
  const addToArray = (field) => {
    const value = tempInputs[field].trim();
    if (value && !formData[field].includes(value)) {
      setFormData((prev) => ({
        ...prev,
        [field]: [...prev[field], value],
      }));
      setTempInputs((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  // Remove item from array fields
  const removeFromArray = (field, index) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  // Handle key press for array inputs
  const handleKeyPress = (e, field) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addToArray(field);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Simulate API call
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to create project");
      }

      console.log("Form Data:", data);
      setSubmitMessage("Project created successfully!");

      //   // Reset form
      //   setFormData({
      //     title: "",
      //     description: "",
      //     longDescription: "",
      //     thumbnail: "",
      //     techStack: [],
      //     keyFeatures: [],
      //     images: [],
      //     links: {
      //       live: "",
      //       source: "",
      //       githubClient: "",
      //       githubServer: "",
      //     },
      //     isCompleted: false,
      //   });
      //   setTempInputs({
      //     techStack: "",
      //     keyFeatures: "",
      //     images: "",
      //   });
    } catch (error) {
      setSubmitMessage("Error creating project. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-base-content mb-2">
              Add New Project
            </h2>
            <p className="text-base-content/70">
              Fill in the details to create a new project entry
            </p>
          </motion.div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {/* Title */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Project Title <span className="text-error">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter project title"
                  className="input input-bordered w-full focus:input-primary"
                  required
                />
              </div>

              {/* Thumbnail */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Thumbnail URL
                  </span>
                </label>
                <input
                  type="url"
                  name="thumbnail"
                  value={formData.thumbnail}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
                  className="input input-bordered w-full focus:input-primary"
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="form-control"
            >
              <label className="label">
                <span className="label-text font-semibold">
                  Description <span className="text-error">*</span>
                </span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Brief project description"
                className="textarea w-full textarea-bordered h-24 focus:textarea-primary"
                required
              />
            </motion.div>

            {/* Long Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="form-control"
            >
              <label className="label">
                <span className="label-text font-semibold">
                  Detailed Description <span className="text-error">*</span>
                </span>
              </label>
              <textarea
                name="longDescription"
                value={formData.longDescription}
                onChange={handleInputChange}
                placeholder="Detailed project description with technical details"
                className="textarea w-full textarea-bordered h-32 focus:textarea-primary"
                required
              />
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="form-control"
            >
              <label className="label">
                <span className="label-text font-semibold">
                  Tech Stack <span className="text-error">*</span>
                </span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="techStack"
                  value={tempInputs.techStack}
                  onChange={handleTempInputChange}
                  onKeyPress={(e) => handleKeyPress(e, "techStack")}
                  placeholder="Add technology (press Enter or comma)"
                  className="input input-bordered flex-1 focus:input-primary"
                />
                <button
                  type="button"
                  onClick={() => addToArray("techStack")}
                  className="btn btn-primary"
                >
                  <FaPlus />
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.techStack.map((tech, index) => (
                  <div key={index} className="badge badge-primary gap-2">
                    <FaCode className="text-xs" />
                    {tech}
                    <button
                      type="button"
                      onClick={() => removeFromArray("techStack", index)}
                      className="btn btn-ghost btn-xs"
                    >
                      <FaTimes />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="form-control"
            >
              <label className="label">
                <span className="label-text font-semibold">Key Features</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="keyFeatures"
                  value={tempInputs.keyFeatures}
                  onChange={handleTempInputChange}
                  onKeyPress={(e) => handleKeyPress(e, "keyFeatures")}
                  placeholder="Add key feature (press Enter or comma)"
                  className="input input-bordered flex-1 focus:input-primary"
                />
                <button
                  type="button"
                  onClick={() => addToArray("keyFeatures")}
                  className="btn btn-secondary"
                >
                  <FaPlus />
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.keyFeatures.map((feature, index) => (
                  <div key={index} className="badge badge-secondary gap-2">
                    {feature}
                    <button
                      type="button"
                      onClick={() => removeFromArray("keyFeatures", index)}
                      className="btn btn-ghost btn-xs"
                    >
                      <FaTimes />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="form-control"
            >
              <label className="label">
                <span className="label-text font-semibold">Project Images</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  name="images"
                  value={tempInputs.images}
                  onChange={handleTempInputChange}
                  onKeyPress={(e) => handleKeyPress(e, "images")}
                  placeholder="Add image URL (press Enter or comma)"
                  className="input input-bordered flex-1 focus:input-primary"
                />
                <button
                  type="button"
                  onClick={() => addToArray("images")}
                  className="btn btn-accent"
                >
                  <FaPlus />
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.images.map((image, index) => (
                  <div key={index} className="badge badge-accent gap-2">
                    <FaImage className="text-xs" />
                    Image {index + 1}
                    <button
                      type="button"
                      onClick={() => removeFromArray("images", index)}
                      className="btn btn-ghost btn-xs"
                    >
                      <FaTimes />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="form-control"
            >
              <label className="label">
                <span className="label-text font-semibold">Project Links</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Live Demo</span>
                  </label>
                  <div className="input-group">
                    <span className="bg-primary text-primary-content">
                      <FaExternalLinkAlt />
                    </span>
                    <input
                      type="url"
                      name="links.live"
                      value={formData.links.live}
                      onChange={handleInputChange}
                      placeholder="https://demo.com"
                      className="input input-bordered w-full flex-1 focus:input-primary"
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Source Code</span>
                  </label>
                  <div className="input-group">
                    <span className="bg-secondary text-secondary-content">
                      <FaCode />
                    </span>
                    <input
                      type="url"
                      name="links.source"
                      value={formData.links.source}
                      onChange={handleInputChange}
                      placeholder="https://github.com/..."
                      className="input w-full input-bordered flex-1 focus:input-secondary"
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">GitHub Client</span>
                  </label>
                  <div className="input-group">
                    <span className="bg-accent text-accent-content">
                      <FaGithub />
                    </span>
                    <input
                      type="url"
                      name="links.githubClient"
                      value={formData.links.githubClient}
                      onChange={handleInputChange}
                      placeholder="https://github.com/.../client"
                      className="input w-full input-bordered flex-1 focus:input-accent"
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">GitHub Server</span>
                  </label>
                  <div className="input-group">
                    <span className="bg-info text-info-content">
                      <FaGithub />
                    </span>
                    <input
                      type="url"
                      name="links.githubServer"
                      value={formData.links.githubServer}
                      onChange={handleInputChange}
                      placeholder="https://github.com/.../server"
                      className="input w-full input-bordered flex-1 focus:input-info"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project Status */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="form-control"
            >
              <label className="label cursor-pointer justify-start gap-4">
                <input
                  type="checkbox"
                  name="isCompleted"
                  checked={formData.isCompleted}
                  onChange={handleInputChange}
                  className="toggle toggle-success"
                />
                <span className="label-text font-semibold">
                  Mark as Completed Project
                </span>
              </label>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.0 }}
              className="card-actions justify-end pt-6"
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-lg"
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Creating Project...
                  </>
                ) : (
                  <>
                    <FaSave />
                    Create Project
                  </>
                )}
              </button>
            </motion.div>

            {/* Submit Message */}
            {submitMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`alert ${
                  submitMessage.includes("Error")
                    ? "alert-error"
                    : "alert-success"
                }`}
              >
                <span>{submitMessage}</span>
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  );
}
