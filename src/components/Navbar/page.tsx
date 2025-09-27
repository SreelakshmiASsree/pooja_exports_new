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

  // Navigation with loader
  const handleNavigation = (path: string) => {
    setLoading(true);
    setIsOpen(false);
    router.push(path);
  };

  // Scroll to section
  const handleScrollToAbout = () => {
    setIsOpen(false);
    if (pathname === "/") {
      const section = document.getElementById("aboutus");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollTo", "aboutus");
      router.push("/");
    }
  };

  const handleScrollToProducts = () => {
    setIsOpen(false);
    if (pathname === "/") {
      const section = document.getElementById("products");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollTo", "products");
      router.push("/");
    }
  };

  const handleScrollToLocation = () => {
    setIsOpen(false);
    if (pathname === "/") {
      const section = document.getElementById("locations");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollTo", "locations");
      router.push("/");
    }
  };

const handleScrollToContact = () => {
  setIsOpen(false);
  if (pathname === "/") {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  } else {
    sessionStorage.setItem("scrollTo", "contact");
    router.push("/");
  }
};



  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
          <Initialloader color="#D73543" message="Loading..." />
        </div>
      )}

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
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => handleNavigation("/")}
                className={`lg:text-lg font-normal py-1 px-5 rounded-xl hover:bg-[#ffe2e2] ${
                  isActive("/") ? "text-[#D73543] border-b-2 border-[#D73543]" : ""
                }`}
              >
                 Home
              </button>

                <button
                onClick={() => handleNavigation("/About")}
                className={`lg:text-lg font-normal py-1 px-5 rounded-xl hover:bg-[#ffe2e2] ${
                  isActive("/About") ? "text-[#D73543] border-b-2 border-[#D73543]" : ""
                }`}
              >
               About
              </button>

              <button
                onClick={() => handleNavigation("/Product")}
                className={`lg:text-lg font-normal py-1 px-5 rounded-xl hover:bg-[#ffe2e2] ${
                  isActive("/Product") ? "text-[#D73543] border-b-2 border-[#D73543]" : ""
                }`}
              >
              Products
              </button>

              <button
                onClick={() => handleNavigation("/Indonesia")}
                className={`lg:text-lg font-normal py-1 px-5 rounded-xl hover:bg-[#ffe2e2] ${
                  isActive("/Indonesia") ? "text-[#D73543] border-b-2 border-[#D73543]" : ""
                }`}
              >
                Indonesia Factory
              </button>

              <button
                onClick={handleScrollToLocation}
                className="lg:text-lg font-normal py-1 px-5 rounded-xl hover:bg-[#ffe2e2]"
              >
               Location
              </button>

              <button
                onClick={handleScrollToContact}
                className="lg:text-lg font-normal py-1 px-5 rounded-xl hover:bg-[#ffe2e2]"
              >
             Contact 
              </button>
            </div>

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

              <div className="flex flex-col items-center justify-center gap-4">
              <button
                onClick={() => handleNavigation("/")}
                className={`lg:text-lg font-normal py-1 px-5 rounded-xl hover:bg-[#ffe2e2] ${
                  isActive("/") ? "text-[#D73543] border-b-2 border-[#D73543]" : ""
                }`}
              >
                 Home
              </button>

                <button
                onClick={() => handleNavigation("/About")}
                className={`lg:text-lg font-normal py-1 px-5 rounded-xl hover:bg-[#ffe2e2] ${
                  isActive("/About") ? "text-[#D73543] border-b-2 border-[#D73543]" : ""
                }`}
              >
               About
              </button>

              <button
                onClick={() => handleNavigation("/Product")}
                className={`lg:text-lg font-normal py-1 px-5 rounded-xl hover:bg-[#ffe2e2] ${
                  isActive("/Product") ? "text-[#D73543] border-b-2 border-[#D73543]" : ""
                }`}
              >
              Products
              </button>

              <button
                onClick={() => handleNavigation("/Indonesia")}
                className={`lg:text-lg font-normal py-1 px-5 rounded-xl hover:bg-[#ffe2e2] ${
                  isActive("/Indonesia") ? "text-[#D73543] border-b-2 border-[#D73543]" : ""
                }`}
              >
                Indonesia Factory
              </button>

              <button
                onClick={handleScrollToLocation}
                className="lg:text-lg font-normal py-1 px-5 rounded-xl hover:bg-[#ffe2e2]"
              >
               Location
              </button>

              <button
                onClick={handleScrollToContact}
                className="lg:text-lg font-normal py-1 px-5 rounded-xl hover:bg-[#ffe2e2]"
              >
             Contact 
              </button>
            </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
}
