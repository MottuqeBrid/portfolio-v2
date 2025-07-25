"use client";

import { motion } from "motion/react";
import { FaJs, FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiMongoose,
} from "react-icons/si";

export default function MySkills() {
  const skills = [
    { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
    { name: "React", icon: FaReact, color: "text-blue-500" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-600" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-600" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-700" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "Mongoose", icon: SiMongoose, color: "text-red-600" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
    { name: "Firebase", icon: SiFirebase, color: "text-orange-500" },
  ];

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
            My Skills
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Technologies I work with to create amazing web applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-base-200 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`${skill.color} mb-3 flex justify-center`}
              >
                <skill.icon className="text-4xl" />
              </motion.div>
              <h3 className="font-semibold text-base-content text-sm">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
