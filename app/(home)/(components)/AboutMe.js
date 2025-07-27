"use client";

import { motion } from "motion/react";
import { FaMapMarkerAlt, FaLightbulb } from "react-icons/fa";

export default function AboutMe() {
  return (
    <section className="py-20 bg-gradient-to-br from-base-100 to-base-200 relative overflow-hidden">
      <div className=" mx-auto px-2 sm:px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-xl text-base-content/80 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Passionate web developer, dedicated to creating exceptional digital
            experiences through clean code and innovative solutions.
          </motion.p>
        </motion.div>

        {/* Main Content - About Me */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-6 px-4"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-base-content mb-4 flex items-center gap-3">
              <FaLightbulb className="text-accent" />
              My Story
            </h3>
            <div className="space-y-4 text-base-content/80 leading-relaxed text-justify">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Hello! I&apos;m{" "}
                <span className="font-semibold text-primary">
                  Md. Mottuqe Brid
                </span>
                , a passionate web developer based in the beautiful city of{" "}
                <span className="font-semibold text-secondary inline-flex items-center gap-1">
                  <FaMapMarkerAlt className="text-sm" />
                  Khulna, Bangladesh
                </span>
                . My journey into the world of programming began with curiosity
                and has evolved into a deep passion for creating digital
                solutions that make a difference.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                I specialize in building modern, responsive web applications
                using cutting-edge technologies. My approach combines technical
                expertise with creative problem-solving to deliver exceptional
                user experiences that not only look great but perform
                flawlessly.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                You&apos;ll find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer
                community. I believe in continuous learning and staying updated
                with the latest industry trends.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
