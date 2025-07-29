"use client";

import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";

export default function Footer() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    body: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Contact information - Update these with your actual details
  const contactInfo = {
    phone: "+8801308133343",
    email: "mottuqebrid@gmail.com",
    github: "https://github.com/MottuqeBrid",
    linkedin: "https://linkedin.com/in/md-mottuqe-brid",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email sent successfully!");
        setFormData({
          email: "",
          subject: "",
          body: "",
        });
      } else {
        alert("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatPhoneForWhatsApp = (phone) => {
    // Remove all non-digit characters and add country code if needed
    return phone.replace(/\D/g, "");
  };

  return (
    <footer id="contact" className="bg-base-300 text-base-content">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-base-content mb-6">
                Let's Connect
              </h3>
              <p className="text-base-content/70 mb-8">
                Ready to start your next project? Get in touch and let's create
                something amazing together.
              </p>
            </div>

            {/* Contact Links */}
            <div className="space-y-4">
              {/* Phone/WhatsApp */}
              <div className="flex items-center group">
                <div className="flex items-center space-x-4">
                  {/* Phone Link */}
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center space-x-3 text-base-content/80 hover:text-primary transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <FaPhone className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{contactInfo.phone}</span>
                  </a>

                  {/* WhatsApp Link */}
                  <a
                    href={`https://wa.me/${formatPhoneForWhatsApp(
                      contactInfo.phone
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-success"
                    title="Chat on WhatsApp"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Email */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-3 text-base-content/80 hover:text-primary transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <span className="font-medium">{contactInfo.email}</span>
              </a>

              {/* GitHub */}
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-base-content/80 hover:text-primary transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <FaGithub className="w-4 h-4" />
                </div>
                <span className="font-medium">GitHub Profile</span>
              </a>

              {/* LinkedIn */}
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-base-content/80 hover:text-primary transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <FaLinkedin className="w-4 h-4" />
                </div>
                <span className="font-medium">LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Right Side - Email Form */}
          <div className="bg-base-100 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-base-content mb-6">
              Email Me
            </h3>
            <p className="text-base-content/70 mb-6">
              Send me a message directly. I'll get back to you as soon as
              possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Your Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="input input-bordered w-full focus:input-primary"
                  required
                />
              </div>

              {/* Subject Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Subject</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  className="input input-bordered w-full focus:input-primary"
                  required
                />
              </div>

              {/* Message Body */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Message</span>
                </label>
                <textarea
                  name="body"
                  value={formData.body}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, ideas, or just say hello..."
                  className="textarea textarea-bordered h-32 w-full focus:textarea-primary resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn btn-primary w-full ${
                  isSubmitting ? "loading" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="divider my-12"></div>
        <div className="text-center">
          <p className="text-base-content/60">
            © {new Date().getFullYear()} Md. Mottuqe Brid. Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
