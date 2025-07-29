"use client";

import { motion } from "motion/react";
import Typewriter from "typewriter-effect";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaDownload,
  FaCode,
  FaPalette,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { HiOutlineArrowDown, HiOutlineMail } from "react-icons/hi";
import Image from "next/image";

const Hero = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/md-mottuqe-brid",
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-50",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/MottuqeBrid",
      color: "hover:text-gray-800",
      bgColor: "hover:bg-gray-50",
    },
    // {
    //   name: "Twitter",
    //   icon: FaTwitter,
    //   url: "https://twitter.com/your-handle",
    //   color: "hover:text-blue-400",
    //   bgColor: "hover:bg-blue-50",
    // },
    // {
    //   name: "Instagram",
    //   icon: FaInstagram,
    //   url: "https://instagram.com/your-handle",
    //   color: "hover:text-pink-600",
    //   bgColor: "hover:bg-pink-50",
    // },
    // {
    //   name: "Email",
    //   icon: HiOutlineMail,
    //   url: "mottuqebrid@gmail.com",
    //   color: "hover:text-green-600",
    //   bgColor: "hover:bg-green-50",
    // },
  ];

  const handleDownloadResume = () => {
    // Replace with your actual resume file path
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=17-G8vYiAPVq3DGHvAxJlDi3nHr0s5YSg";
    link.download = "Mottuqe_Resume.pdf";
    link.click();
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className=" bg-gradient-to-br from-base-100 via-base-200 to-base-300 relative overflow-hidden"
    >
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center px-2 md:px-4">
          {/* Left Side - Content */}
          <div className="space-y-8 w-full lg:w-1/2">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-2"
            >
              <motion.p
                className="text-2xl text-base-content/70 font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                👋 Hello, I&apos;m
              </motion.p>
              <motion.h1
                className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                Md. Mottuqe Brid
              </motion.h1>
            </motion.div>

            {/* Typewriter Effect */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                className="text-2xl lg:text-4xl font-semibold text-base-content min-h-[3rem] lg:min-h-[4rem]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                I&apos;m a{" "}
                <span className="text-primary">
                  <Typewriter
                    options={{
                      strings: [
                        "Full Stack Developer",
                        "Frontend Engineer (React)",
                        "Next.js & MERN Stack Expert",
                        "Modern UI/UX Implementer",
                        "Clean Code Practitioner",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      deleteSpeed: 50,
                      pauseFor: 2000,
                    }}
                  />
                </span>
              </motion.div>
              <motion.p
                className="text-lg text-base-content/80 max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.01 }}
              >
                Based in Khulna, Bangladesh — I craft high-quality, scalable web
                apps with modern JavaScript frameworks. I specialize in building
                fast, accessible, and visually engaging user experiences using
                the MERN/Next.js stack.
              </motion.p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.button
                onClick={handleDownloadResume}
                className="btn btn-primary btn-lg group shadow-lg"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <FaDownload className="group-hover:animate-bounce" />
                Download Resume
              </motion.button>

              <motion.button
                onClick={scrollToProjects}
                className="btn btn-outline btn-lg group shadow-lg"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                View My Work
                <HiOutlineArrowDown className="group-hover:animate-bounce" />
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <motion.h3
                className="text-lg font-semibold text-base-content/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                whileHover={{ scale: 1.02 }}
              >
                Connect me:
              </motion.h3>
              <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-base-100 shadow-lg border border-base-300 
               text-base-content transition-all duration-300 ${social.color} ${social.bgColor}
               hover:shadow-xl hover:border-primary/20`}
                    whileHover={{
                      scale: 1.1,
                      y: -3,
                      rotate: 5,
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.5 + index * 0.1 }}
                  >
                    <social.icon className="text-2xl" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center items-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              {/* Animated Background Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 bg-gradient-to-r from-primary via-secondary to-accent rounded-full opacity-20 blur-lg"
              />

              {/* Secondary Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 bg-gradient-to-l from-accent via-primary to-secondary rounded-full opacity-10 blur-md"
              />

              {/* Profile Image Container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden 
                           shadow-2xl border-4 border-base-100 bg-gradient-to-br from-primary/20 to-secondary/20"
              >
                {/* Profile Image */}
                <Image
                  width={400}
                  height={400}
                  src={`/me.jpg`}
                  alt="Profile"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-secondary/10" />
              </motion.div>

              {/* Floating Skill Icons */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-primary rounded-full 
                           flex items-center justify-center shadow-xl border-2 border-base-100"
              >
                <FaCode className="text-white text-xl" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-secondary rounded-full 
                           flex items-center justify-center shadow-xl border-2 border-base-100"
              >
                <FaNodeJs className="text-white text-xl" />
              </motion.div>

              <motion.div
                animate={{ x: [-5, 5, -5], rotate: [0, 10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 -right-8 w-12 h-12 bg-accent rounded-full 
                           flex items-center justify-center shadow-xl border-2 border-base-100"
              >
                <FaReact className="text-white text-lg" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
