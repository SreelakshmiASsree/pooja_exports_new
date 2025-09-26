"use client";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";
import Link from "next/link";
export default function About() {
  return (
    <>
      <Navbar /> 
      {/* Image section with stats */}
      <div className="relative">
        <Image src="/Images/about.png" alt="about" width={1920} height={1080} className="w-full object-cover" />
        <div className="absolute lg:top-[296px] top-16 lg:left-[320px] left-6 md:left-[8rem] md:top-[13rem]">
          <div className="bg-[#fff] lg:rounded-3xl rounded-xl shadow-2xl lg:py-7 py-4 lg:w-[950px] md:w-[550px] w-[340px]">
            <div className="flex justify-around items-center lg:gap-0 gap-4">
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-[#7F7F7F] md:text-2xl text-[20px] lg:text-5xl">100+</h1>
                <p className="font-bold lg:text-xl text-[10px] md:text-sm text-[#7F7F7F]">Products Delivered</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-[#7F7F7F] text-[20px] md:text-2xl lg:text-5xl">20+</h1>
                <p className="font-bold lg:text-xl text-[10px] md:text-sm text-[#7F7F7F]">Year Of Experience</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-[#7F7F7F] text-[20px] md:text-2xl lg:text-5xl">100%</h1>
                <p className="font-bold lg:text-xl text-[10px] md:text-sm text-[#7F7F7F]">Satisfied Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="custom_container">
        {/* Back Button */}
        <div className="text-[#fff] lg:text-start mt-24 mb-5 lg:mb-10 lg:mt-28">
          <Link href="/">
            <button className="lg:py-3 py-2 px-4 lg:px-6 text-sm lg:text-[15px] bg-[#D73543] hover:bg-[#a52631] rounded-xl flex items-center gap-2">
              <FaArrowLeft /> Back
            </button>
          </Link>
        </div>

        {/* About Us Heading */}
        <div className="lg:mb-5 mb-4 text-center lg:my-10 my-5">
          <p className="font-rubik-doodle  font-normal lg:text-xl text-lg leading-none italic">About Us</p>
          <p className="lg:text-3xl text-2xl font-semibold -mt-[6px] leading-snug">About Us</p>
        </div>

        {/* About Us Description */}
        <div className="text-center flex flex-col gap-5 lg:mb-36 mb-12">
          <p className="lg:text-lg text-xs text-justify">
            Pooja Exports is a premier exports company operating in 32 countries across the
            globe over the last 25 years. Headquartered in Hong Kong, our team consists of high
            end professionals, well qualified in the field of sourcing, packaging and shipping.
            Strongly driven by the will to deliver the best quality products to our customers, we
            continuously remodel our priorities, keeping our customers’ interest as the base for every decision we take.
          </p>
          <p className="lg:text-lg text-xs text-justify">
            We offer the full spectrum of services like product procurement, product delivery and
            customer service. We have in-depth expertise in the production of several of the products
            we produce. We deliver the prime quality comparable to the best in the world. The marketing
            management system we follow is the backbone of our company ensuring our customers a satisfying experience with Pooja Exports.
          </p>
          <p className="lg:text-lg text-xs text-justify">
            Our network spans countries in Asia, Europe, Africa, Australia. <span className="underline font-semibold text-[#D73543]">Mr. Shiju Sudevan</span>, our
            managing director personally takes the effort to find the best distributors, sub-agents
            and importers, developing and implementing unique marketing strategies to ensure a safe and high quality production.
          </p>
          <p className="lg:text-lg text-xs text-justify">
            Our Australian operations have been kickstarted recently, with an array of products
            targeting the retail sector, construction and Agro Industries, sourced from Indonesia, India and China
          </p>
        </div>

        {/* Managing Director Section */}
        <div className="flex lg:flex-row flex-col justify-around lg:gap-0 gap-5 lg:items-start items-center">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-lg lg:mb-12 lg:text-2xl">THE MANAGING DIRECTOR</h1>
            <Image src="/images/MD.png" alt="MANAGING DIRECTOR" width={245} height={300} className="object-cover lg:w-[245px] w-[50%]" />
          </div>

          <div className="text-[#000] text-[16px] font-normal flex flex-col gap-5 lg:mb-20 mb-5">
            <p className="max-w-[710px] lg:text-lg text-xs text-justify">
              Mr. Shiju Sudevan is a result-focused professional having more than 25 years of experience
              across sales/marketing, personnel management/development and international business. As an
              analytical leader and dynamic team player, Mr. Shiju is adept at devising effective strategies
              for resolving complex issues, promoting product visibility and enhancing corporate growth. His
              advanced communication skills, highly detail-oriented outlook and solid
              interpersonal and decision-making skills makes him a great leader.
            </p>
            <p className="max-w-[710px] lg:text-lg text-xs text-justify">
              Mr. Shiju’s 25+ years of expertise includes International Business Relations, Contract Negotiations, F
              oreign Trade, Product Marketing, Project Management Advertising/Promotions, Market Analysis, Proposal Preparation, International
              Sourcing, New Market Development, Export/Import and all Banking related works.
            </p>
            <p className="max-w-[710px] lg:text-lg text-xs text-justify">
              Mr. Shiju, also owns the sister companies <span className="underline font-semibold text-[#D73543] italic"> Poorna Apps, Muco Cafe, and Pooja Consultancy </span>, extending his commitment
              to quality and service across diverse industries. No matter where you are,
              our team is always ready to assist you with reliability and excellence.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
