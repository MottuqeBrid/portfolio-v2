"use client";
import { motion } from "motion/react";
export default function MyProjects() {
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

        {/* Projects Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {/* Map through your projects here */}
        </div>
      </div>
    </section>
  );
}
