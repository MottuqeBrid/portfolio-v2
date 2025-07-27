"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const Logo = () => {
  return (
    <Link href="/">
      <motion.div
        className="flex items-center space-x-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Animated Icon Container */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Background Circle */}
          <motion.div
            className="absolute w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Main Icon */}
          <motion.div
            className="relative z-10 text-primary"
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaLaptopCode className="h-6 w-6" />
          </motion.div>

          {/* Floating Code Icon */}
          <motion.div
            className="absolute -top-1 -right-1 text-secondary"
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaCode className="h-3 w-3" />
          </motion.div>

          {/* Globe Icon */}
          <motion.div
            className="absolute -bottom-1 -left-1 text-accent"
            animate={{
              rotate: [0, -360],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <HiOutlineGlobeAlt className="h-3 w-3" />
          </motion.div>
        </motion.div>

        {/* Text Logo */}
        <motion.div
          className="flex flex-col leading-tight"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.span
            className="text-lg font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            WebDev
          </motion.span>
          <motion.span
            className="text-xs text-base-content/70 font-medium tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            PORTFOLIO
          </motion.span>
        </motion.div>

        {/* Animated Dots */}
        <motion.div className="flex space-x-1 ml-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-1 h-1 bg-primary rounded-full"
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default Logo;
