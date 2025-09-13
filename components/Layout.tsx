"use client";

import { ReactNode, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";import { IoMdHome } from "react-icons/io";
import { IoChevronDownOutline } from "react-icons/io5";
import { FaVideo, FaPaintBrush, FaFolder } from "react-icons/fa";
import { AiOutlinePicture, AiOutlineAppstore, AiOutlineBell, AiOutlineUser } from "react-icons/ai";
import { GiPencilBrush } from "react-icons/gi";
import { ImTextColor } from "react-icons/im";
import { BiSupport } from "react-icons/bi";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export default function Layout({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const navItems = [
    { id: "home", icon: <IoMdHome />, href: "/" },
    { id: "image", icon: <AiOutlinePicture />, href: "#" },
    { id: "video", icon: <FaVideo />, href: "#" },
    { id: "pro", icon: <GiPencilBrush />, href: "#" },
    { id: "paint", icon: <FaPaintBrush />, href: "#" },
    { id: "text", icon: <ImTextColor />, href: "#" },
    { id: "support", icon: <FaFolder />, href: "#" },
  ];

  return (
    <div className="min-h-screen">
      {/* Top Navbar */}
      <header className="flex items-center justify-between pb-8 pt-4">
        {/* Logo + Text */}
        <div className="flex items-center gap-2">
          <img src="logo.svg" alt="Logo" className="w-6" />
          <span className="font-semibold text-sm max-w-[240px] truncate">
            benevolentinmibeibat
          </span>
          <IoChevronDownOutline className="text-lg" />
        </div>

        {/* Main Navigation */}
        <nav className="flex gap-6 items-center p-2 rounded-lg bg-slate-100 dark:bg-slate-700">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`text-xl relative p-2 rounded-md transition-colors ${
                pathname === item.href
                  ? "bg-white dark:bg-slate-500"
                  : "hover:bg-slate-200 dark:hover:bg-slate-500"
              }`}
            >
              {item.icon}
            </Link>
          ))}
        </nav>

        {/* Right Side Controls */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <AiOutlinePicture className="text-lg" />
            <span className="font-semibold text-sm">Gallery</span>
          </div>
          <div className="flex items-center gap-1">
            <BiSupport />
            <span className="font-semibold text-sm">Support</span>
          </div>

          <AiOutlineBell className="text-xl cursor-pointer" />
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <MdOutlineDarkMode className="text-xl" />
            ) : (
              <MdOutlineLightMode className="text-xl" />
            )}
          </button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex justify-center items-center">
            <AiOutlineUser className="text-xl cursor-pointer text-white" />
          </div>
        </div>
      </header>

      {/* Page Content */}
      <div>{children}</div>
    </div>
  );
}
