"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { IoReorderThree } from "react-icons/io5";
import { MdClose } from "react-icons/md";

import logo from "../../../public/images/logo.png";
import Initialloader from "@/components/Initialloader/page";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false); 
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path: string) => pathname === path;

  const handleNavigation = (path: string) => {
    setLoading(true);
    setIsOpen(false);
    router.push(path);
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
          <Initialloader color="#D73543" message="Loading..." />
        </div>
      )}

      {/* ✅ Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="custom_container">
          <div className="flex justify-between items-center pt-4 pb-4">
            {/* Logo */}
            <div>
              <Link href="/" onClick={() => handleNavigation("/")}>
                <Image
                  src={logo}
                  alt="Company Logo"
                  width={220}
                  height={80}
                  className="w-40 md:w-56"
                />
              </Link>
            </div>

            {/* Desktop Links */}
            <ul className="hidden lg:flex items-center rounded-full">
              {[
                { title: "Home", path: "/" },
                { title: "About", path: "/About" },
                { title: "Products", path: "/Product" },
                { title: "Indonesia Factory", path: "/Indonesia" },
                { title: "Location", path: "/#locations" },
                { title: "Contact Us", path: "/#contact" },
              ].map((link) => (
                <li key={link.title}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className={`lg:text-lg font-normal py-1 px-5 rounded-xl hover:bg-[#ffe2e2] ${
                      isActive(link.path)
                        ? "text-[#D73543] border-b-2 border-[#D73543] underline-offset-1"
                        : ""
                    }`}
                  >
                    {link.title}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-3xl text-gray-800"
            >
              <IoReorderThree />
            </button>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="fixed top-0 right-0 w-3/4 h-full bg-white z-50 text-lg font-medium pt-28 transition-all duration-300">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 text-3xl text-gray-700 hover:text-black"
                >
                  <MdClose />
                </button>

                <div className="flex flex-col gap-4 justify-center items-center">
                  {[
                    { title: "Home", path: "/" },
                    { title: "About", path: "/About" },
                    { title: "Products", path: "/Product" },
                    { title: "Indonesia Factory", path: "/Indonesia" },
                    { title: "Location", path: "/#locations" },
                    { title: "Contact Us", path: "/#contact" },
                  ].map((link) => (
                    <button
                      key={link.title}
                      onClick={() => handleNavigation(link.path)}
                      className={`transition px-4 py-2 rounded hover:text-white hover:bg-[#D73543] ${
                        isActive(link.path)
                          ? "text-[#D73543] border-b-2 border-[#D73543]"
                          : ""
                      }`}
                    >
                      {link.title}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* ✅ Spacer so content doesn't hide behind fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}
