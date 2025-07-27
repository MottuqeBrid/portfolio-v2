"use client";

import { motion } from "motion/react";
import { FaGraduationCap, FaUniversity, FaCalendarAlt } from "react-icons/fa";

export default function Education() {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
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
              Education
            </h2>
            <p className="text-lg text-base-content/70">My academic journey</p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>

            {/* Education Item */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative pl-20 pb-12"
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-base-100 shadow-lg"
              ></motion.div>

              {/* Education Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-base-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* University Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <FaUniversity className="text-2xl text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-base-content mb-1">
                      Khulna University
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <FaGraduationCap className="text-secondary" />
                      <span className="font-semibold text-base-content">
                        B.Sc. in Statistics Discipline
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-base-content/70">
                      <FaCalendarAlt className="text-accent" />
                      <span>August 2023 — Present</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-base-100 rounded p-4">
                  <p className="text-base-content/80 leading-relaxed">
                    I am an undergraduate student at Khulna University,
                    currently pursuing a degree in Statistics. Alongside my
                    academic studies, I am actively learning and building skills
                    in modern web development.
                  </p>
                </div>

                {/* Status Badge */}
                <div className="mt-4 flex justify-end">
                  <div className="inline-flex items-center gap-2 bg-success/10 text-success px-3 py-1 rounded-full text-sm">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span>Currently Studying</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
