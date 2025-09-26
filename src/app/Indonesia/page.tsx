"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar/page";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "@/components/Footer/page";
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import banner_image from "../../../public/images/banner_img.webp";

const products: Record<number, string[]> = {
  1: ["/images/coconutcharcolone.jpeg", "/images/coconutcharcoltwo.jpeg", "/images/coconutcharcolthree.jpeg"],
  2: ["/images/hardwoodone.webp", "/images/hardwoodtwo.webp", "/images/hardwoodnine.jpeg", "/images/hardwoodten.jpeg",
      "/images/hardwoodthree.jpeg", "/images/hardwoodfour.jpeg", "/images/hardwoodfive.jpeg",
      "/images/hardwoodsix.jpeg", "/images/hardwoodseven.jpeg", "/images/hardwoodeight.jpeg"],
  3: ["/images/sawdustone.jpeg", "/images/sawdusttwo.jpeg", "/images/sawdustthree.jpeg", "/images/sawdustfour.jpeg"],
  4: ["/images/woodcharcoalbriquetteone.jpg", "/images/woodcharcoalbriquetteone.jpg", "/images/woodcharcoalbriquetteone.jpg"],
  5: ["/images/coconutfibre.jpeg", "/images/coconutfibretwo.jpeg", "/images/coconutfibrethree.jpeg", "/images/coconutfibrefour.jpeg"],
  6: ["/images/coconutpeat.webp", "/images/coconutpeatone.webp", "/images/cocopeattwo.jpeg", "/images/cocopeatthree.jpeg", "/images/cocopeatfour.jpeg"],
  7: ["/images/coconutshelltwo.webp", "/images/coconutshellone.webp"],
};

const productsData = [
  {
    id: 1,
    title: "Coconut Charcoal Briquette",
    img: "./images/charcol-briquette.webp",
    description:
      `Coconut Charcoal Briquettes are made from coconut shell, 
      which is carbonized and then compressed to briquettes. Environment friendly as
       it is derived from a renewable resource and 100% organic in its content. Our 
       Coconut charcoal briquettes are packed in high quality durable packaging with 
       the outer cover customized for the relevant market.`,
  },
  {
    id: 6,
    title: "Coco peat",
    img: "./images/cocopeat_ablaza.webp",
    description:
      `As one of the leading suppliers of coco peat, Pooja Exports International
       manufactures and exports coco peat in 50kg bags. We ensure production of 
       high grade coco peat to enable the best services for our customers. The 
       aerated structure of coco peat enables usage in farming due to its water
        absorbent property, and excellent soil conditioner. It is an excellent 
        growing medium for container plant growing and has natural rooting hormones and anti-fungal properties.`,
  },
  {
    id: 2,
    title: "Hardwood Charcoal",
    img: "./images/hard_wood.webp",
    description:
      `Wood charcoal is made by slowly burning pieces of different types 
      of wood in the absence of oxygen until all the natural chemicals,
       sap and moisture gets out of the wood. After that we are left with 
       less harmful charcoal lumps with lots of good qualities; it is little
        more than carbon, leaves very little ash after burning out, burns hotter 
        and lights faster than briquettes. It also contains no fillers or additives
         which makes it one of the cleanest ways to barbecue.`,
  },

  {
    id: 3,
    title: "Sawdust Briquette",
    img: "./images/saw_dust.webp",
    description:
      `Our premium quality Barbecue food grade briquette grill fuel is made 
      from 100% hard wood. We guarantee high BTU capacity, clean burning, low ash, and low moisture,
       thus assuring you the finest pellet/briquette grilling experience. The briquettes are made from 
       100% sawed wood dust without any additives.`,
  },
  {
    id: 4,
    title: "Wood Charcoal Briquette",
    img: "./images/woodcharcoalbriquetteone.jpg",
    description:
      `Our wood charcoal briquettes are made from selected hard woods that are burnt down the same way as wood charcoal. Our briquettes burn cleaner, hotter, and longer than normal B&B Charcoal briquettes with high BTU capacity. They are made from our own hardwood charcoal manufactured from selected hardwoods with no chemical additives or fillers.`,
  },
  {
    id: 5,
    title: "Coconut Fibre",
    img: "./images/coconut-Fibre.webp",
    description:
      `Pooja Exports International produces one of the best qualities 
      of coir Fibres available in the market. Obtained from green coconuts, we 
      produce a very fine White fibre. Our White fibre is of the highest grade, 
      eco-friendly and cost effective. We assure quality and customer satisfaction.`
  },
  {
    id: 7,
    title: "Coconut Shell based Charcoal",
    img: "./images/coconut-shell-charcoal.webp",
    description:
      `The coconut shell has a high calorific value and can be used
       to produce steam, energy-rich gases, bio-oil, biochar etc. Coconut shell 
       is a solid fuel and it is more suitable for pyrolysis process as it contains 
       lower ash content, high volatile matter content and is available consistently.
        The higher fixed carbon content leads to the production of a high-quality solid
         residue which can be used in the production of activated carbon.`,
  },
];

export default function Indonesia() {
  const [currentProduct, setCurrentProduct] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pageIndices, setPageIndices] = useState<Record<number, number>>({});

  const openCarousel = (productId: number) => {
    setCurrentProduct(productId);
    setCurrentIndex(0);
  };

  const closeCarousel = () => setCurrentProduct(null);

  const nextSlide = () => {
    if (currentProduct !== null) {
      setCurrentIndex((prev) => (prev + 1) % products[currentProduct].length);
    }
  };

  const prevSlide = () => {
    if (currentProduct !== null) {
      setCurrentIndex((prev) => (prev - 1 + products[currentProduct].length) % products[currentProduct].length);
    }
  };

  const nextPageImage = (id: number) => {
    setPageIndices((prev) => ({
      ...prev,
      [id]: ((prev[id] ?? 0) + 1) % products[id].length,
    }));
  };

  const prevPageImage = (id: number) => {
    setPageIndices((prev) => ({
      ...prev,
      [id]: ((prev[id] ?? 0) - 1 + products[id].length) % products[id].length,
    }));
  };

  return (
    <>
      <Navbar />

      {/* Banner Section */}
      <div className="relative">
        <Image
          src={banner_image}
          alt="banner"
          width={1200}
          height={400}
          className="w-full object-cover h-[400px]"
        />
        <div className="absolute lg:top-44 top-36 lg:left-10 left-5">
          <h1 className="lg:text-7xl md:text-5xl text-4xl max-w-[540px] font-bold text-white mb-2">Indonasia Factory</h1>
          <p className="lg:text-lg text-[15px] max-w-[300px] lg:text-justify font-extrabold text-white">
            Address:- PT POOJA EXPORTS INTERNATIONAL WTC Mangga Dua, Jakarta, Indonesia
          </p>
        </div>
      </div>

      {/* Back Button */}
      <div className="custom_container">
        <div className="text-[#fff] lg:text-start my-7 lg:my-10">
          <Link href="/" className="relative z-50 inline-block lg:py-3 py-2 px-4 lg:px-6 text-sm lg:text-[15px] bg-[#D73543] hover:bg-[#a52631] rounded-xl text-white">
            <FaArrowLeft className="inline mr-2" /> Back
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <p className="text-[#000] font-normal lg:text-sm text-xs text-center my-5 lg:my-0">
           {` Lorem Ipsum is simply dummy text of the printing and typesetting industry...`}
          </p>
        </div>

        {/* Products Section */}
        <div>
          <div className="lg:mb-5 mb-4 text-center lg:my-10 my-8">
            <p className="font-rubik-doodle font-normal lg:text-3xl text-2xl leading-none">Ablaze</p>
            <p className="lg:text-4xl text-3xl font-bold ml-5 -mt-[6px] leading-none">Products</p>
          </div>

          <div className="lg:mt-32 mt-5 flex flex-col lg:gap-20 gap-16 lg:mb-16 mb-8">
            {productsData.map((item, index) => {
              const productImages = products[item.id];
              const pageIndex = pageIndices[item.id] ?? 0;

              return (
                <div key={item.id} className={`flex flex-col px-5 ${index % 2 === 1 ? "lg:flex-row-reverse " : "lg:flex-row"} lg:gap-0 gap-3 justify-around items-center`}>
                  <div className="relative items-center gap-4 flex px-5">
                    {productImages.length > 1 && (
                      <button
                        onClick={() => prevPageImage(item.id)}
                        className="absolute -left-8 top-1/2 -translate-y-1/2 text-[#000] z-10 text-3xl lg:text-4xl px-2"
                      >
                        <IoIosArrowBack />
                      </button>
                    )}
                    <Image
                      src={productImages[pageIndex]}
                      alt={item.title}
                      width={500}
                      height={400}
                      className="cursor-pointer w-[500px] lg:h-[400px] object-contain lg:object-cover"
                      onClick={() => openCarousel(item.id)}
                    />
                    {productImages.length > 1 && (
                      <button
                        onClick={() => nextPageImage(item.id)}
                        className="absolute -right-8 top-1/2 -translate-y-1/2 text-[#000] z-10 text-3xl lg:text-4xl px-2"
                      >
                        <IoIosArrowForward />
                      </button>
                    )}
                  </div>
                  <div>
                    <h1 className="font-bold lg:text-2xl lg:mb-6 my-2">{item.title}</h1>
                    <p className="max-w-[600px] lg:text-[14px] text-xs leading-4 lg:leading-7">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal Carousel */}
      {currentProduct !== null && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 px-5">
          <button
            onClick={closeCarousel}
            className="absolute top-5 right-5 text-white lg:text-5xl text-3xl"
          >
            <IoClose />
          </button>

          <div className="relative px-5">
            <Image
              src={products[currentProduct][currentIndex]}
              alt="carousel"
              width={600}
              height={400}
              className="w-[600px] h-[400px] object-contain"
            />
            <button
              onClick={prevSlide}
              className="absolute lg:-left-24 top-1/2 -left-6 -translate-y-1/2 text-white text-3xl lg:text-5xl px-3"
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={nextSlide}
              className="absolute lg:-right-24 top-1/2 -right-6 -translate-y-1/2 text-white text-3xl lg:text-5xl px-3"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
