"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";
import Image from "next/image";
import { FaArrowRight, } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsChat } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import Initialloader from "@/components/Initialloader/page";
import AOS from "aos";  
import "aos/dist/aos.css";
export default function Home() {
  const [redirecting, setRedirecting] = useState(false);
useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,
    easing: "ease-in-out",
  });
}, []);
  
  const router = useRouter();
  const handleRedirect = (path: string) => {
    setRedirecting(true);
    setTimeout(() => {
      router.push(path);
    }, 1500); // delay so loader is visible
  };


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake delay so loader is visible (2s)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

   if (loading || redirecting) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-white">
        <Initialloader size={80} color="#D73543" message="Loading..." />
      </div>
    );
  }


  
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section>
        <div className="relative w-full h-screen">
          <video
            src="/images/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 flex flex-col items-start lg:gap-5 justify-center text-[#fff] text-4xl lg:ml-20 custom_container">
            <h1 className="lg:text-7xl md:text-5xl text-4xl max-w-[650px] font-bold ">
              Delivering Quality <br />
              Beyond Borders
            </h1>
            <p className="lg:text-sm text-xs max-w-[510px] text-justify font-medium">
              At Pooja Export, we specialize in providing premium products sourced with care and delivered with
              trust. With a strong commitment to quality, timely service, and global standards, we ensure every
              shipment exceeds expectations. Partner with us for reliable exports that build lasting relationships
              across the world.
            </p>
            <div>
              <a href="#contact">
                <button className="bg-[#D73543] hover:bg-[#a52631] text-[#fff] lg:px-10 lg:py-3 px-5 py-2 text-sm lg:text-lg rounded-xl font-semibold">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="lg:pt-20 pt-12" id="aboutus">
        <div className="custom_container">
          <div className="lg:mb-5 mb-4 lg:ml-20">
            <p className="font-rubik-doodle  font-normal lg:text-[24px] text-xl leading-none">About Us</p>
            <p className="lg:text-[36px] text-2xl font-bold ml-5 -mt-[6px] leading-none">About Us</p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col bg-[#D6D5D5] lg:gap-10 gap-5 items-center">
          <div>
            <Image src="/images/about.webp" alt="aboutus" width={800} height={530} className="object-cover" />
          </div>

          <div    className="flex flex-col lg:gap-6 gap-3 overflow-hidden" data-aos="zoom-in">
            <p className="lg:text-[15px] text-xs md:text-sm max-w-[630px] text-[#000] text-justify lg:leading-6 lg:px-0 px-3">
              Pooja Exports is a premier global export company with over 25 years of trusted service, connecting
              markets across 32 countries. Based in Hong Kong, we specialize in sourcing, packaging, and shipping
              a wide range of products with strict quality standards. Our professional team works with precision
              and dedication, ensuring that customer satisfaction remains at the heart of everything we do.

              Our strong global presence extends across Asia, Europe, and Africa, with a recently established
              branch in Australia to serve the retail, construction, and agro industries. Products are carefully
              sourced from leading markets such as India, China, and Indonesia to meet the diverse needs of our
              clients worldwide.

              At Pooja Exports, we believe in more than just delivering products—we deliver value, trust, and
              reliability. Our success is powered by continuous innovation and a commitment to providing the
              highest quality to every customer we serve.
            </p>

            <div className="text-[#fff] text-center my-8 lg:mb-0">
              <a href="/About">
                <button    onClick={() => handleRedirect("/About")} className="lg:py-3 py-2 px-4 lg:px-6 text-sm lg:text-[15px] bg-[#D73543] hover:bg-[#a52631] rounded-xl inline-flex items-center gap-2">
                  Read More <FaArrowRight />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="" id="products">
        <div className="bg-[#d2d2d280]">
          <div className="custom_container">
            <div className="lg:flex lg:flex-row flex-col lg:gap-20 justify-center items-center pt-10 pb-28">
              <div className="text-center lg:text-start lg:mb-0 mb-5">
                <h3 className="font-rubik-doodle  font-normal lg:text-[20px] text-sm leading-none">Our</h3>
                <h1 className="text-2xl lg:text-4xl font-bold leading-none">Products</h1>
              </div>
              <div className="h-36 w-1 bg-[#34CF09] lg:block hidden"></div>
              <div>
                <p className="lg:text-[16px] leading-6 text-sm lg:text-start text-center text-[#000] max-w-[660px]">
                  Discover our wide range of high-quality products, carefully selected to meet the needs of our global customers.
                  Each item reflects our commitment to excellence, durability, and value. We ensure that every product undergoes
                  strict quality checks before it reaches you. Browse our collection and experience premium standards
                  combined with reliable service, making every purchase seamless and satisfying.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="custom_container">
          <div className="pb-10 grid grid-cols-1 md:grid-cols-2 gap-10 mt-[-60px]">
            {/* Product Card Example */}
            {[
              {
                title: "Steel",
                desc: "Steel is the backbone of modern industry, used in everything from construction to machinery. We provide materials that are strong, durable, and crafted to perform well in demanding environments. With careful selection and reliable supply, our steel products help businesses build with confidence and achieve long-lasting results.",
                img: "/images/steel_sect.jpg",
              },
              {
                title: "Artificial Grass",
                desc: "Synthetic turf is a low-maintenance alternative to natural grass, staying green year-round without watering or mowing. Ideal for gardens, playgrounds, and sports areas, it is laid over a prepared base and filled with sand or rubber for support. Durable and weather-resistant, it requires only occasional brushing or rinsing, saving water and reducing chemical use.",
                img: "/images/grass_sec.jpg",
              },
              {
                title: "Pebbles",
                desc: "We offer premium decorative pebbles designed for both spiritual and aesthetic purposes. Our carefully selected range combines meaningful symbolism with visual appeal. Packed securely for global shipping, these pebbles bring beauty and serenity to any space.",
                img: "/images/pebbles_sec.jpg",
              },
              {
                title: "Charcoal Briquette",
                desc: "Coconut Charcoal Briquettes are produced by compressing carbon-rich coconut shells into solid, easy-to-use blocks. Fully natural and environmentally friendly, they come from a renewable resource and contain no chemicals. Each pack is securely packaged with durable materials, and the outer design can be customized to suit different markets, ensuring safe delivery and quality presentation.",
                img: "/images/charcol.png",
              },
            ].map((product, idx) => (
              <div
                key={idx}
                className="flex flex-col lg:flex-row lg:gap-6 gap-3 items-center shadow-xl bg-[#fff] lg:py-0 pb-5 overflow-hidden"
                data-aos="fade-up"
              >
                <div className="relative lg:w-[243px] w-[335px] h-[255px] flex-shrink-0">
                  <Image
                    src={product.img}
                    alt={product.title}
                    fill
                    className="object-cover "
                  />
                </div>

                <div className="lg:px-0 px-4">
                  <h2 className="font-bold lg:text-xl text-lg mb-4">{product.title}</h2>
                  <p className="max-w-[350px] lg:text-sm text-xs">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-[#fff] lg:text-end text-center mb-5 lg:mb-0">
            <button onClick={() => handleRedirect("/Product")} className="lg:py-3 py-2 px-4 lg:px-6 text-sm lg:text-[15px] bg-[#D73543] hover:bg-[#a52631] rounded-xl inline-flex items-center gap-2 text-white">
              More Products <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-[#D9D9D9] w-full my-10"></div>

      {/* Locations Section */}
      <section id="locations">
        <div className="custom_container">
          <div className="lg:text-start text-center">
            <h3 className="font-rubik-doodle  font-normal lg:text-[20px] text-sm leading-none">Our</h3>
            <h1 className="text-2xl lg:text-4xl font-bold leading-none">Branches</h1>
            <p className="text-[#000] lg:text-[16px] text-sm font-normal mt-5 lg:mb-0 mb-7">
              Pooja Export is proud to have multiple branches to serve our customers efficiently across regions.
              Each branch is equipped to provide personalized service, prompt support, and seamless delivery. No matter where you are, our team is always ready
              to assist you with the same commitment to quality and reliability.
            </p>
          </div>

          <div className="lg:my-16 flex lg:flex-row flex-col justify-around gap-5 items-center">
            <div className="flex flex-col lg:gap-12 gap-6">
              {[
                {
                  title: "Indonesia branch",
                  address: "PT POOJA EXPORTS INTERNATIONAL WTC Mangga Dua, Jakarta, Indonesia",
                  delay: 0,
                },
                {
                  title: "Australia branch",
                  address: "Brisbane: Pooja Exports Pty Ltd Suite 41, Building 6 2404 Logan Road Eight Miles Plains Qld 4113",
                  delay: 200,
                },
                {
                  title: "Hong Kong branch",
                  address: "Pooja Exports Unit 2509, Ho King- Comm Ctr, Yuen St Hong Kong",
                  delay: 400,
                },
                {
                  title: "India branch",
                  address: "POOJA Exports, R.T.Nagar, Bangalore, India Pin: 560032",
                  delay: 600,
                },
              ].map((branch, idx) => (
                <div key={idx} className="flex items-start gap-5 overflow-hidden" data-aos="fade-right" data-aos-delay={branch.delay}>
                  <IoLocationOutline className="lg:text-[32px] text-[20px] text-[#D73543]" />
                  <div>
                    <h2 className="lg:text-[18px] text-sm font-bold leading-none mb-2">{branch.title}</h2>
                    <p className="lg:text-[14px] text-sm font-normal max-w-[350px]">{branch.address}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <Image src="/images/map.png" alt="map" width={600} height={400} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="lg:py-16 py-8" id="contact">
        <div className="custom_container">
          <div className="text-center">
            <h1 className="font-rubik-doodle  leading-none lg:text-[24px] text-[16px] font-normal">Get I Touch</h1>
            <h1 className="font-bold lg:text-[36px] text-[24px] leading-none">Get In Touch</h1>
            <div className="flex justify-center">
              <p className="font-normal text-[#000] lg:text-[15px] text-xs mt-5 text-center max-w-[950px] lg:mb-0 mb-5">
                Get in touch today to discuss your export requirements and receive reliable, high-quality
                products delivered efficiently to your location.
              </p>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col justify-around items-center lg:mt-32 overflow-hidden">
            <div data-aos="fade-up">
              <h1 className="font-bold lg:tex-[16px] lg:mb-3 lg:text-start text-center">Send Message</h1>
              <p className="max-w-[450px] lg:text-xs text-[10px] lg:text-start text-center">
                Connect with us today to discuss your export requirements, explore our products, and receive reliable, timely service you can trust
              </p>
              <form className="lg:mt-10 mt-5" action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="a54fe400-b5e6-4b31-b160-8eb20886a7c7" />
                <input type="hidden" name="subject" value="New Contact Form Submission" />
                <input type="hidden" name="from_name" value="My Website Contact Form" />
                <input type="hidden" name="replyto" value="{email}" />
                <input type="hidden" name="recipient" value="sreelakshmi.stackup@gmail.com" />

                <div className="flex flex-col gap-6 lg:items-start items-center justify-center">
                  <div className="flex flex-col">
                    <label className="font-semibold text-[15px]">Name</label>
                    <input type="text" required name="name" className="border-b border-[#000] lg:w-96 focus:border-[#D73543] focus:outline-none px-2 py-1 bg-transparent" />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-semibold text-[15px]">Email</label>
                    <input type="email" required name="email" className="border-b border-[#000] lg:w-96 focus:border-[#D73543] focus:outline-none px-2 py-1 bg-transparent" />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-semibold text-[15px]">Message</label>
                    <textarea required name="message" className="border-b border-[#000] lg:w-96 focus:border-[#D73543] focus:outline-none px-2 py-1 bg-transparent"></textarea>
                  </div>
                </div>

                <div className="flex lg:justify-end justify-center lg:mt-20 my-10">
                  <button type="submit" className="lg:px-10 flex justify-center items-center gap-1 lg:py-3 px-6 py-2 bg-[#D73543] text-white font-semibold rounded-lg hover:bg-[#a52631] transition">
                    Submit <FaArrowRight />
                  </button>
                </div>
              </form>
            </div>

            <div className="h-[30rem] w-0.5 bg-[#D9D9D9] lg:block hidden overflow-hidden"></div>

            <div data-aos="fade-up">
              <h1 className="font-semibold lg:text-[24px] text-[18px] lg:mb-6 mb-4 italic">Pooja Export,</h1>
              <div className="flex gap-4 lg:mb-0 mb-5">
                <MdOutlineEmail className="lg:text-2xl text-xl" />
                <div>
                  <p className="leading-none font-semibold lg:text-lg">Email Us</p>
                  <p><a href="mailto:shiju1973@gmail.com">shiju1973@gmail.com</a></p>
                  <p><a href="mailto:ssudev@yahoo.com">ssudev@yahoo.com</a></p>
                </div>
              </div>

              <div className="flex gap-4 lg:mb-0 mb-5">
                <BsChat className="lg:text-2xl text-xl" />
                <div>
                  <h1 className="lg:text-lg font-semibold">We Chat</h1>
                  <p><a href="weixin://dl/chat?shijus73">shijus73</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

