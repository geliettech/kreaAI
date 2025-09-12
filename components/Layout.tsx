"use client";
import { ReactNode, useState, useEffect } from "react";
import { FaShapes } from "react-icons/fa"; // Logo
import { AiOutlineHome, AiOutlinePicture, AiOutlineVideoCamera, AiOutlineFile, AiOutlineAppstore, AiOutlineBell, AiOutlineUser } from "react-icons/ai";
import { RiScissorsLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export default function Layout({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      {/* Top Navbar */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">
        {/* Logo + Text */}
        <div className="flex items-center gap-2">
          <FaShapes className="text-xl" />
          <span className="font-bold text-lg">Krea Clone</span>
        </div>

        {/* Main Navigation */}
        <nav className="flex gap-6 items-center text-neutral-600 dark:text-neutral-300">
          <AiOutlineHome className="text-xl cursor-pointer" />
          <AiOutlinePicture className="text-xl cursor-pointer" />
          <AiOutlineVideoCamera className="text-xl cursor-pointer" />
          <RiScissorsLine className="text-xl cursor-pointer" />
          <AiOutlineFile className="text-xl cursor-pointer" />
          <AiOutlineAppstore className="text-xl cursor-pointer" />
          <BiSupport className="text-xl cursor-pointer" />
        </nav>

        {/* Right Side Controls */}
        <div className="flex items-center gap-5">
          <AiOutlineBell className="text-xl cursor-pointer" />
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <MdOutlineLightMode className="text-xl" /> : <MdOutlineDarkMode className="text-xl" />}
          </button>
          <AiOutlineUser className="text-xl cursor-pointer" />
        </div>
      </header>

      {/* Page Content */}
      <main>{children}</main>
    </div>
  );
}
