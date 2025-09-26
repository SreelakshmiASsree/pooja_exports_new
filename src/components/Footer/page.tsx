"use client";

import { useState } from "react";
import Image from "next/image";
import Initialloader from "@/components/Initialloader/page";

export default function Footer() {
  const [loading, setLoading] = useState(false);

  const handleFooterLinkClick = (href: string) => {
    setLoading(true);
    // simulate navigation delay
    setTimeout(() => {
      window.location.href = href;
    }, 1200);
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
          <Initialloader color="#D73543" message="Loading..." />
        </div>
      )}

      <footer className="bg-[#848883] lg:pt-10 pt-5">
        <div className="custom_container">
          <div className="flex lg:flex-row flex-col lg:gap-0 gap-7 justify-between items-start">

            {/* Logo & Description */}
            <div className="flex flex-col gap-5">
              <div>
                <Image
                  src="/images/footerlogo.png"
                  alt="logo"
                  width={240}
                  height={60}
                  className="lg:w-60 w-52"
                />
              </div>
              <div>
                <p className="text-[#fff] text-xs lg:text-sm max-w-[430px]">
                  Delivering Premium Export Solutions Designed to Meet Your
                  Business Needs with Reliability and Global Reach.
                </p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="text-white flex flex-col">
              <ol className="list-disc list-inside flex flex-col gap-0.5">
                <li>
                  <button
                    onClick={() => handleFooterLinkClick("/")}
                    className="hover:text-[#a52631] text-left"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFooterLinkClick("/About")}
                    className="hover:text-[#a52631] text-left"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFooterLinkClick("/Product")}
                    className="hover:text-[#a52631] text-left"
                  >
                    Products
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFooterLinkClick("/Indonesia")}
                    className="hover:text-[#a52631] text-left"
                  >
                    Indonesia Factory
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFooterLinkClick("/#locations")}
                    className="hover:text-[#a52631] text-left"
                  >
                    Locations
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFooterLinkClick("/#contact")}
                    className="hover:text-[#a52631] text-left"
                  >
                    Contact Us
                  </button>
                </li>
              </ol>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-4 text-[#fff]">
              <p className="lg:text-lg text-sm font-semibold">Pooja Exports</p>
              <div className="flex gap-4 lg:mb-0 mb-5">
                <i className="fa-regular fa-envelope lg:text-2xl"></i>
                <div>
                  <p className="leading-none font-semibold lg:text-lg">
                    Email Us
                  </p>
                  <div>
                    <p>
                      <a href="mailto:shiju1973@gmail.com">
                        Email: shiju1973@gmail.com
                      </a>
                    </p>
                    <p>
                      <a href="mailto:ssudev@yahoo.com">ssudev@yahoo.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-[#fff] my-5"></div>

          {/* Copyright */}
          <div className="text-[#fff] text-center text-sm pb-3">
            &copy; {new Date().getFullYear()} Pooja Exports. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
