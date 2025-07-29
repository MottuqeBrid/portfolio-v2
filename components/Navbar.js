"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-base-100 shadow-lg sticky top-0 z-50 backdrop-blur-md">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="navbar max-w-7xl mx-auto px-4 lg:px-8"
      >
        <div className="navbar-start">
          <Logo />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <motion.a
                  href={item.href}
                  className="font-medium"
                  whileHover={{
                    scale: 1.05,
                    color: "var(--primary)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="navbar-end">
          <motion.div
            whileHover={{ rotate: 15 }}
            transition={{ duration: 0.2 }}
          >
            <ThemeToggle />
          </motion.div>

          {/* resume download button */}
          <motion.a
            // onClick={handleDownloadResume}
            href="https://drive.google.com/uc?export=download&id=17-G8vYiAPVq3DGHvAxJlDi3nHr0s5YSg"
            download
            className="btn btn-primary btn-sm ml-2 group rounded shadow-lg"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaDownload className="group-hover:animate-bounce" />
            Resume
          </motion.a>

          {/* Mobile menu button */}
          <div className="dropdown dropdown-end lg:hidden ml-2">
            <button onClick={toggleMenu}>
              <motion.div
                tabIndex={0}
                className="btn btn-ghost btn-circle"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? (
                    <HiX className="h-6 w-6" />
                  ) : (
                    <HiMenu className="h-6 w-6" />
                  )}
                </motion.div>
              </motion.div>
            </button>

            {isOpen && (
              <motion.ul
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.2 }}
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg border border-base-300"
              >
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.05,
                    }}
                  >
                    <motion.a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.name}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </div>
        </div>
      </motion.nav>
    </div>
  );
}
