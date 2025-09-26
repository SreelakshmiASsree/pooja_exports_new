"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaClock, FaCircleCheck, FaTruck } from "react-icons/fa6";
import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa6";
import Initialloader from "@/components/Initialloader/page";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import banner_image from "../../../public/images/banner_img.webp"
export default function ProductsPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
   
    const router = useRouter();
    const handleNavigation = (path: string) => {
        setLoading(true);
        setIsOpen(false);
        router.push(path);
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            easing: "ease-in-out",
        });
    }, []);

    const products = [
        {
            key: "Steel",
            images: [
                "/images/steel_sect.jpg",
                "/images/steelone.webp",
                "/images/steeltwo.jpeg",
                "/images/steelthree.jpeg",
                "/images/steelfour.jpeg",
                "/images/steelfive.jpeg",
                "/images/steelsix.jpeg",
                "/images/steelseven.jpeg",
                "/images/steeleight.jpeg",
                "/images/steelnine.jpeg",
                "/images/steelten.jpeg",
                "/images/steel11.jpeg",
                "/images/steel12.jpeg",
                "/images/steel13.jpeg",
                "/images/steel14.jpeg",

            ],
            description:
                `We specialize in supplying a
                    variety of steel types, including carbon steel, stainless steel, and galvanized steel, tailored to
                    meet the specific needs of our customers. Whether you require sheets, rods, pipes, or custom shapes,
                    we deliver high-quality steel products to suit your requirements. Our extensive range ensures
                    versatility for various applications across industries. Trust us for reliable supply and superior
                    quality steel solutions, meeting your specifications and exceeding expectations.`
        },
        {
            key: " Artificial Grass",
            images: [
                "/images/grassfour.webp",
                "/images/grassone.webp",
                "/images/grasstwo.webp",
                "/images/grassthree.webp",

            ],
            description:
                `Artificial grass, also known as
                    synthetic turf, offers a low-maintenance alternative to natural grass. It requires no watering or
                    mowing and is highly durable and weather-resistant. Widely used in landscaping, sports fields, and
                    playgrounds, it provides a lush, green appearance year-round. Installation involves laying it over a
                    base and infilling with sand or rubber granules. With occasional brushing and rinsing, it remains
                    vibrant and long-lasting, contributing to water conservation and reducing the need for chemicals.`
        },
        {
            key: "Pebbels",
            images: [
                "/images/pebbelsone.webp",
                "/images/pebbelstwo.webp",
                "/images/pebbelsthree.webp",
                "/images/pebbelsfour.webp",
                "/images/pebbelsfive.webp",
            ],
            description:
                `Specializing in high-quality decorative pebbles for spiritual and aesthetic purposes. 
                Our diverse range ensures both spiritual significance and aesthetic appeal. Exported 
                globally with meticulous packaging for safe transit. Experience spirituality and beauty with us.`,
        },
        {
            key: "Charcoal",
            images: [
                "/images/charcol.png",
                "/images/charcolshapes.jpeg",

            ],
            brochures: [
                "/images/Coir_mat.pdf",
            ],
            description:
                `Coconut Charcoal Briquettes are made from coconut shell, which is 
                carbonized and then compressed to briquettes. Environment friendly as it is derived 
                from a renewable resource and 100% organic in its content. Our Coconut charcoal briquettes
                 are packed in high quality durable packaging with the outer cover customized for the relevant market.`,
        },



        {
            key: "Coir",
            images: [
                "/images/coirfive.webp",

                "/images/coirfour.webp",

                "/images/coirsix.webp",
                "/images/coirone.webp",
                "/images/coirseven.webp",
                "/images/coirthree.webp",
                "/images/coireight.webp",
                "/images/coirtwo.webp",
                "/images/coirnine.webp",
                "/images/coirten.webp",

            ],
            brochures: [
                "/images/Coir_mat.pdf",  // put pdfs here
            ],
            description:
                `We manufacture and export fine coir fibre extracted from mature green husks.
                 Coir is used for commercial and industrial applications for mats, mattresses, brushes, 
                 and upholstery. Free from pith and roots. Available at competitive rates and customizable.`,
        },


        {
            key: "Coconut",
            images: [
                "/images/coconut_diff.jpg",


            ],
            description:
                `The coconut shell has a high calorific value and can be used
                 to produce steam, energy-rich gases, bio-oil, biochar etc. It is a solid fuel, 
                 more suitable for pyrolysis process due to lower ash content, high volatile matter, 
                 and higher fixed carbon content for quality residue.`,
        },



        {
            key: "Hardware",
            images: [
                "/images/hardwarethree.webp",
                "/images/hardwareone.webp",
                "/images/hardwaretwo.webp",

                "/images/hardwarefour.webp",
                "/images/hardwarefive.webp",
                "/images/hardwaresix.webp",
                "/images/hardwareseven.webp",
                "/images/hardwareeight.webp",
                "/images/hardwarenine.webp",
                "/images/hardwareten.webp",
                "/images/hardwareeleven.webp",
                "/images/hardware12.webp",
                "/images/hardware13.webp",
                "/images/hardware14.webp",
                "/images/hardware15.webp",
                "/images/hardware16.webp",
                "/images/hardware17.webp",
                "/images/hardware18.webp",
                "/images/hardware19.webp",

                "/images/hardware21.webp",
                "/images/hardware22.webp",
                "/images/hardware23.jpeg",
                "/images/hardware24.jpeg",
                "/images/hardware25.jpg",
                "/images/hardware26.jpeg",
                "/images/hardware27.jpeg",
                "/images/hardware28.jpg",

                "/images/hardware30.jpeg",
                "/images/hardware31.jpeg",
                "/images/hardware32.jpeg",
                "/images/hardware33.jpeg",

            ],
            description:
                `Pooja Exports is a premier exporter of all types of plywood, 
                steel pipes, galvanized steel, ready-made door sets, door accessories, 
                aluminum accessories, door handles, door locks, light fittings, metal chains,
                 metal hooks and solar lights. We can ship the product to your location, subject 
                 to conditions and costs prevalent in your country.`,
        },
        {
            key: "Tiles",
            images: [
                "/images/tilesfour.webp",
                "/images/tilesone.webp",
                "/images/tilestwo.webp",
                "/images/tilesthree.webp",

                "/images/tilesfive.webp",
                "/images/tilessix.webp",
                "/images/tilesseven.webp",
                "/images/tiles8.jpeg",
                "/images/tiles9.jpeg",
                "/images/tiles10.jpeg",
                "/images/tiles11.jpeg",
                "/images/tiles12.jpeg",
                "/images/tiles13.jpeg",
            ],
            description:
                `High quality ceramic and porcelain tiles for residential
                 and commercial applications. Durable, easy to clean, and available in multiple sizes and finishes.`,
        },
        {
            key: "kairali Steel",
            images: ["/images/tmtone.jpeg",
                "/images/tmttwo.jpeg",
                "/images/tmtthree.jpeg",
                "/images/tmtfour.jpeg",
                "/images/tmtfive.jpeg",
                "/images/tmtsix.jpeg",
                "/images/tmtseven.jpeg",
                "/images/tmteight.jpeg",
                "/images/tmtnine.jpeg",
                "/images/tmtten.jpeg"],
            description:
                `Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                    to make a type specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.`
        },
        {
            key: "PVC",
            images: ["/images/pvcone.webp", "/images/pvctwo.webp"],
            description:
                `High quality PVC pipes and fittings suitable for plumbing, water supply, and industrial 
                applications. Durable and resistant to corrosion.`,
        },
        {
            key: "Medical Clothing and Disposables",
            images: ["/images/medicalshoeone.webp", "/images/medicalshoe2.jpg"],
            description:
                `Semi-husked coconuts for culinary and oil extraction purposes.
                 High quality and hygienically processed for global export.`,
        },
        {
            key: "Woods",
            images: [
                "/images/woodthree.webp",
                "/images/woodone.webp",
                "/images/woodtwo.webp",

                "/images/wood5.jpeg",
                "/images/wood6.jpeg",
                "/images/wood4.jpeg",
                "/images/wood7.jpeg",
                "/images/wood8.jpeg",

            ],
            description:
                `Premium wood products for furniture, 
                construction, and decoration. Available in multiple species, grades, and finishes.`,
        },
        {
            key: "WPC",
            images: [
                "/images/wpc-door.webp",

            ],
            description:
                `Wood Plastic Composite (WPC) products 
                suitable for decking, fencing, and interior applications. Durable, low maintenance, and eco-friendly.`,
        },
        {
            key: "Coco Peat",
            images: [
                "/images/coconutpeat.webp",
                "/images/coconutpeatone.webp",
                "/images/cocopeattwo.jpeg",
                "/images/cocopeatthree.jpeg",
                "/images/cocopeatfour.jpeg",

            ],
            description:
                `As one of the leading suppliers
                    of coco peat, Pooja Exports
                    International manufactures and exports coco peat in 50kg
                    bags .We ensure production ofhigh grade coco peat to enable the best services for
                    our customers. The aerated structure of coco peat enables usage in farming due to
                    its water absorbent property, and excellent soil conditioner. It is an excellent
                    growing medium for container plant growing and has natural rooting hormones and
                    anti-fungal properties.`
        },


        {
            key: "fencing",
            images: [
                "/images/fencingeight.jpeg",
                "/images/fencingone.jpeg",
                "/images/fencingtwo.jpeg",
                "/images/fencingthree.jpeg",
                "/images/fencingfour.jpeg",
                "/images/fencingfive.jpeg",
                "/images/fencingsix.jpeg",
                "/images/fencingseven.jpeg",

                "/images/fencingnine.jpeg",
                "/images/fencingten.jpeg",
                "/images/fencing11.jpeg",
                "/images/fencing12.jpeg",
                "/images/fencing13.jpeg",
                "/images/fencing14.jpeg",
                "/images/fencing15.jpeg",
                "/images/fencing16.jpeg",
                "/images/fencing17.jpeg",
                "/images/fencing18.jpeg",
                "/images/fencing19.jpeg",
                "/images/fencing20.jpeg",
                "/images/fencing21.jpg",

            ],
            brochures: [
                "/images/fencingone.pdf",
                "/images/fencingtwo.pdf",
            ],
            description:
                `We offer a wide variety of fencing 
                solutions suitable for residential, commercial, and industrial purposes. 
                Durable, reliable, and exported globally.`,
        },
        {
            key: "Scrap",
            images: [
                "/images/scraptwo.jpeg",
                "/images/scrapone.jpeg",
                "/images/scrapthree.jpeg",
                "/images/scrap4.jpeg",
                "/images/scrap5.jpeg",
                "/images/scrap6.jpeg",
                "/images/scrap7.jpeg",
                "/images/scrap8.jpeg",
                "/images/scrap9.jpeg",
                "/images/scrap10.jpeg",
                "/images/scrap11.jpeg",
                "/images/scrap12.jpeg",



            ],
            description:
                `As one of the leading suppliers
                    of coco peat, Pooja Exports
                    International manufactures and exports coco peat in 50kg
                    bags .We ensure production ofhigh grade coco peat to enable the best services for
                    our customers. The aerated structure of coco peat enables usage in farming due to
                    its water absorbent property, and excellent soil conditioner. It is an excellent
                    growing medium for container plant growing and has natural rooting hormones and
                    anti-fungal properties.`
        },

    ];

    const [carouselIndices, setCarouselIndices] = useState(
        products.map(() => 0)
    );

    const nextImage = (index: number) => {
        setCarouselIndices((prev) =>
            prev.map((val, i) =>
                i === index ? (val + 1) % products[i].images.length : val
            )
        );
    };

    const prevImage = (index: number) => {
        setCarouselIndices((prev) =>
            prev.map((val, i) =>
                i === index
                    ? (val - 1 + products[i].images.length) % products[i].images.length
                    : val
            )
        );
    };

    // Modal states
    const [modalOpen, setModalOpen] = useState(false);
    const [activeProduct, setActiveProduct] = useState<number | null>(null);

    const openCarousel = (idx: number) => {
        setActiveProduct(idx);
        setModalOpen(true);
    };

    const closeCarousel = () => {
        setModalOpen(false);
        setActiveProduct(null);
    };

    return (
        <>

          {loading && (
                <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
                  <Initialloader color="#D73543" message="Loading..." />
                </div>
              )}
            <Navbar />
            <div>
                <div className="relative">
                       <Image
  src={banner_image}
  alt="banner"
  width={1200}      // set your image width
  height={400}      // set your image height
  className="w-full object-cover h-[400px]"
/>
                    <div className="absolute lg:top-52 top-36 lg:left-10 left-5">
                        <h1 className="lg:text-8xl md:text-5xl text-3xl max-w-[540px] font-bold leading-none text-white">
                            Our <br />
                            <span className="lg:text-7xl md:text-5xl text-3xl leading-none">
                                Products
                            </span>
                        </h1>
                    </div>
                </div>
                <div className="custom_container">
                    <div
                        className="flex lg:justify-around justify-between lg:my-10 my-5 overflow-hidden"
                        data-aos="fade-down"
                        data-aos-duration="1500"
                    >
                        <div className="flex lg:gap-3 gap-1 items-center">
                            <FaClock className="lg:text-[26px] text-[14px]" />
                            <p className="font-extrabold lg:text-[16px] text-[8px]">24/7 Support</p>
                        </div>

                        <div className="flex lg:gap-3 gap-1 items-center">
                            <FaCircleCheck className="lg:text-[26px] text-[14px]" />
                            <p className="font-extrabold lg:text-[16px] text-[8px]">Global Quality Standards</p>
                        </div>

                        <div className="flex lg:gap-3 gap-1 items-center">
                            <FaTruck className="lg:text-[26px] text-[14px]" />
                            <p className="font-extrabold lg:text-[16px] text-[8px]">On-Time Delivery</p>
                        </div>
                    </div>
                    <div className="text-[#fff] lg:text-start my-5 lg:my-10">
                        <Link href="/" className="">
                            <button
                                className="lg:py-3 py-2 flex gap-1 px-4 lg:px-6 text-sm lg:text-[15px] bg-[#D73543] hover:bg-[#a52631] rounded-xl ">
                                <FaArrowLeft /> Back
                            </button>
                        </Link>
                    </div>
                    <div className="flex justify-center items-center ">
                        <p className="text-[#000] font-normal lg:text-sm text-xs text-center">{`Lorem Ipsum is simply dummy text of
                            the
                            printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard
                            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                            to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. `}</p>
                    </div>
                </div>
                <div className="lg:mt-32 mt-5 flex flex-col lg:gap-10 gap-10">
                    {products.map((product, idx) => {
                        const currentImage = product.images[carouselIndices[idx]];
                        const isPDF = currentImage.endsWith(".pdf");
                       

                        const isReversed = idx % 2 === 1;
                        const bgColor = isReversed ? "bg-[#F3EDDF]" : "bg-transparent";
                        return (
                            <div
                                key={idx}
                                data-aos="fade-up"
                                className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                                    } justify-center items-center relative lg:gap-20  ${bgColor} lg:py-10 py-6 cursor-pointer lg:px-0 px-5 overflow-hidden `}
                            >


                                <div className="flex items-center gap-4 relative">
                                    {product.images.length > 1 && (
                                        <button
                                            onClick={() => prevImage(idx)}
                                            className="text-3xl font-bold text-gray-600 hover:text-black"
                                        >
                                      <IoIosArrowBack />
                                        </button>
                                    )}

                                    <div className="cursor-pointer lg:w-[450px] w-full">
                                        {isPDF && ["Charcoal", "Coir", "Fencing"].includes(product.key) ? (
                                            <a
                                                href={currentImage}
                                                download
                                                className="inline-flex items-center px-4 py-2  transition-all gap-2"
                                            >

                                            </a>
                                        ) : currentImage.endsWith(".mp4") ? (
                                            <video
                                                src={currentImage}
                                                controls
                                                className="w-full h-[300px] object-cover"
                                                onClick={() => openCarousel(idx)}
                                            />
                                        ) : !isPDF ? (
                                            <Image
                                                src={currentImage}
                                                width={450}
                                                height={300}
                                                alt={product.key}
                                                className="object-cover lg:h-[400px] h-full w-[500px]"
                                                onClick={() => openCarousel(idx)}
                                            />
                                        ) : null}
                                    </div>


                                    {product.images.length > 1 && (
                                        <button
                                            onClick={() => nextImage(idx)}
                                            className="text-3xl font-bold text-gray-600 hover:text-black"
                                        >
                                         <IoIosArrowForward />
                                        </button>
                                    )}
                                </div>

                                <div className="relative max-w-[600px] flex flex-col justify-between h-full">
                                    <div>
                                        <h1 className="font-bold lg:text-2xl lg:mb-6 my-2">
                                            {product.key}
                                        </h1>
                                        <p className="lg:text-[14px] text-xs leading-4 lg:leading-7">
                                            {product.description}
                                        </p>
                                    </div>
                                    {(product.key.includes("Charcoal") ||
                                        product.key.includes("Coconut") ||
                                        product.key === "WPC") && (
                                            <div className="mt-6">
                                                <button
                                                    onClick={() => handleNavigation(`/Productfilter/${product.key}`)}
                                                    className="flex items-center justify-end gap-2 bg-[#D73543] text-white px-3 py-1 lg:text-sm text-xs rounded-full hover:bg-[#ba2b37] transition-all"
                                                >
                                                    View More <span className="text-lg"><FaArrowRightLong /></span>
                                                </button>

                                            </div>
                                        )}


                                </div>
                                {/* Download Button (if brochure exists for specific products) */}
                                {["Charcoal", "Coir", "fencing"].includes(product.key) && product.brochures && product.brochures.length > 0 && (
                                    <div className="absolute lg:right-37 -right-1 -top-1 lg:top-1 flex flex-col  z-10 ">
                                        {product.brochures.map((brochure, bIdx) => (
                                            <a
                                                key={bIdx}
                                                href={brochure}
                                                download
                                                className="flex items-center  gap-2 text-[#0b7905] underline-offset-1 lg:text-sm text-xs underline px-3 py-1 rounded-full hover:bg-[#0b7905] hover:text-[#fff] transition-all"
                                            >
                                                Download Brochure {bIdx + 1} <AiOutlineCloudDownload className="lg:text-2xl text-lg" />
                                            </a>
                                        ))}
                                    </div>
                                )}




                            </div>
                        );
                    })}
                </div>
                {modalOpen && activeProduct !== null && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 px-12">
                        <button
                            className="absolute top-5 right-5 text-white text-3xl"
                            onClick={closeCarousel}
                        >
                            <IoClose />
                        </button>

                        <button
                            className="text-white text-4xl absolute left-5"
                            onClick={() => prevImage(activeProduct)}
                        >
                           <IoIosArrowBack />
                        </button>

                        {products[activeProduct].images[carouselIndices[activeProduct]].endsWith(".mp4") ? (
                            <video
                                src={products[activeProduct].images[carouselIndices[activeProduct]]}
                                controls
                                autoPlay
                                className="max-w-[90vw] max-h-[90vh] object-contain"
                            />
                        ) : (
                            <Image
                                src={products[activeProduct].images[carouselIndices[activeProduct]]}
                                width={800}
                                height={600}
                                alt={products[activeProduct].key}
                                className="object-contain max-h-[90vh]"
                            />
                        )}

                        <button
                            className="text-white text-4xl absolute right-5"
                            onClick={() => nextImage(activeProduct)}
                        >
                          <IoIosArrowForward />
                        </button>
                    </div>
                )}

            </div>
            <Footer />
        </>
    );
}