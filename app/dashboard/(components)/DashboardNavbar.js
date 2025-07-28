"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  FaHome,
  FaUser,
  FaBars,
  FaTimes,
  FaSignOutAlt,
  FaBell,
  FaSearch,
  FaCog,
  FaProjectDiagram,
  FaChartBar,
  FaUsers,
  FaFileAlt,
  FaVoicemail,
} from "react-icons/fa";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import Logo from "@/components/Logo";

export default function DashboardNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications] = useState(3); // Example notification count

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Add your theme toggle logic here
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "light" : "dark"
    );
  };

  const handleLogout = () => {
    // Add logout logic here
    console.log("Logging out...");
  };

  const navigationItems = [
    { name: "Dashboard", href: "/dashboard", icon: FaHome },
    // { name: "Projects", href: "/dashboard/projects", icon: FaProjectDiagram },
    { name: "Add Project", href: "/dashboard/add-project", icon: FaFileAlt },
    { name: "Email", href: "/dashboard/email", icon: FaVoicemail },
  ];

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-base-100 shadow-lg border-b border-base-300 sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left Side - Logo & Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMobileMenu}
                className="lg:hidden btn btn-ghost btn-circle"
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="text-xl" />
                ) : (
                  <FaBars className="text-xl" />
                )}
              </motion.button>

              {/* Logo */}
              {/* <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-base-content">
                    Admin Dashboard
                  </h1>
                  <p className="text-xs text-base-content/60">
                    Portfolio Management
                  </p>
                </div>
              </motion.div> */}
              <Logo />
            </div>

            {/* Center - Navigation (Desktop) */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item, index) => (
                <Link key={item.name} href={item.href}>
                  <motion.li
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-base-content/80 hover:text-base-content hover:bg-base-200 transition-all duration-200"
                  >
                    <item.icon className="text-lg" />
                    <span className="font-medium">{item.name}</span>
                  </motion.li>
                </Link>
              ))}
            </div>

            {/* Right Side - Search, Notifications, Theme, Profile */}
            <div className="flex items-center gap-2">
              {/* Search */}
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="hidden md:flex items-center"
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="input input-bordered input-sm w-48 pl-10 focus:input-primary"
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50" />
                </div>
              </motion.div> */}

              {/* Theme Toggle */}
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="btn btn-ghost btn-circle"
              >
                {isDarkMode ? (
                  <HiOutlineSun className="text-xl" />
                ) : (
                  <HiOutlineMoon className="text-xl" />
                )}
              </motion.button> */}
              <ThemeToggle />

              {/* Notifications */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-ghost btn-circle relative"
              >
                <FaBell className="text-xl" />
                {notifications > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-error text-error-content rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold"
                  >
                    {notifications}
                  </motion.div>
                )}
              </motion.button>

              {/* Settings */}
              <motion.button
                whileHover={{ scale: 1.05, rotate: 45 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-ghost btn-circle"
              >
                <FaCog className="text-xl" />
              </motion.button>

              {/* Profile Dropdown */}
              <div className="dropdown dropdown-end">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <Image
                      src="/me.jpg"
                      alt="Admin Profile"
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  </div>
                </motion.div>
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow-lg bg-base-100 rounded-box w-52 border border-base-300"
                >
                  <li className="menu-title">
                    <span>Admin Panel</span>
                  </li>
                  <li>
                    <a className="flex items-center gap-2">
                      <FaUser className="text-sm" />
                      Profile Settings
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center gap-2">
                      <FaCog className="text-sm" />
                      Dashboard Settings
                    </a>
                  </li>
                  <div className="divider my-1"></div>
                  <li>
                    <a
                      onClick={handleLogout}
                      className="flex items-center gap-2 text-error hover:bg-error/10"
                    >
                      <FaSignOutAlt className="text-sm" />
                      Logout
                    </a>
                  </li>
                </motion.ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-base-300 bg-base-100"
          >
            <div className="px-4 py-4 space-y-2">
              {/* Mobile Search */}
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="input input-bordered w-full pl-10 focus:input-primary"
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50" />
                </div>
              </div>

              {/* Mobile Navigation Items */}
              {navigationItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-base-content/80 hover:text-base-content hover:bg-base-200 transition-all duration-200"
                >
                  <item.icon className="text-lg" />
                  <span className="font-medium">{item.name}</span>
                </motion.a>
              ))}

              <div className="divider"></div>

              {/* Mobile Profile Actions */}
              <div className="space-y-2">
                <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-base-content/80 hover:text-base-content hover:bg-base-200 transition-all duration-200">
                  <FaUser className="text-lg" />
                  <span className="font-medium">Profile Settings</span>
                </a>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-error hover:bg-error/10 transition-all duration-200 w-full text-left"
                >
                  <FaSignOutAlt className="text-lg" />
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}
