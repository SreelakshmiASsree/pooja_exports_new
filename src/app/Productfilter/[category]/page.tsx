"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
type ProductCategory = {
    name: string;
    images: string[];
};

const categoriesData = {
    Charcoal: [
        {
            name: "Charcoal Briquette",
            images: [
                "/images/charcoalbriquettesone.jpg",
                "/images/charcoalbriquettestwo.jpg",
                "/images/charcoalbriquettesthree.jpg",


            ],
            description: "Coconut Charcoal Briquettes are made from coconut shell, which is carbonized and then compressed to briquettes. Environment friendly as it is derived from a renewable resource and 100% organic in its content. Our Coconut charcoal briquettes are packed in high quality durable packaging with the outer cover customized for the relevant market."
        },
        {
            name: "Sawdust Briquette",
            images: ["/images/sawdustone.jpeg", "/images/sawdusttwo.jpeg", "/images/sawdustthree.jpeg",
                "/images/sawdustfour.jpeg",
                "/images/sawdust7.mp4",


            ],
            description: `Our premium quality Barbecue
                    food grade briquette grill fuel is made from 100% hard
                    wood. We guarantee high BTU capacity, clean burning, low ash, and low moisture, thus
                    assuring you the finest pellet/briquette grilling experience. The briquettes are
                    made from 100% sawed wood dust without any additives`
        },
        {
            name: "Hardwood Charcoal",
            images: ["/images/hardwoodone.webp",
                "/images/hardwoodtwo.webp",
                "/images/hardwoodnine.jpeg",
                "/images/hardwoodten.jpeg",
                "/images/hardwoodthree.jpeg",
                "/images/hardwoodfour.jpeg",
                "/images/hardwoodfive.jpeg",
                "/images/hardwoodsix.jpeg",
                "/images/hardwoodseven.jpeg",
                "/images/hardwoodeight.jpeg",

            ],

            description: `Wood charcoal is made by slowly
                    burning pieces of different types of wood in the
                    absence of oxygen until all the natural chemicals, sap and Moisture gets out of the
                    wood
                    After that we are left with less harmful charcoal lumps with lots of good qualities;
                    it is little more than carbon, leaves very little ash after burning out, burns
                    hotter and lights faster than briquettes. It also contains no fillers or additives
                    which makes it one of the cleanest ways to barbecue.`
        },
        {
            name: "Coconut Charcoal Briquette",
            images: ["/images/coconutcharcolone.jpeg", "/images/coconutcharcoltwo.jpeg", "/images/coconutcharcolthree.jpeg"],
            description: `Coconut Charcoal Briquettes are
                    made from coconut shell, which is carbonized and
                    then compressed to briquettes. Environment friendly as it is derived from a
                    renewable resource and 100% organic in its content.
                    Our Coconut charcoal briquettes are packed in high quality durable packaging with
                    the outer cover customized for the relevant market`
        },
        {
            name: "Coconut Shell Charcoal",
            images: ["/images/coconutshelltwo.webp", "/images/coconutshellone.webp",],
            description: `The coconut shell has a high
                    calorific value and can be used to produce steam,
                    energy-rich gases, bio-oil, biochar etc. Coconut shell is a solid fuel and it is
                    more suitable for pyrolysis process as it contains lower ash content, high volatile
                    matter content and is available consistently. The higher fixed carbon content leads
                    to the production of a high-quality solid residue which can be used in the
                    production of activated carbon`
        },
    ],

    Coconut: [
        {
            name: "Coconut Copra",
            images: ["/images/copraone.jpg", "/images/copratwo.webp"],
            description: `We offer copra that is used in
                    the extraction of coconut oil and for its use as a dry fruit. Our range and varieties of copra are
                    known for their high nutritive value and quality. We export to different countries with proper
                    packaging thus making them safe for long transit periods. We offer copra at reasonable rates without
                    any compromise on quality and can be availed by our clients in large and small quantities.`
        },
        {
            name: "Coconut Fibre",
            images: ["/images/coconutfibre.jpeg", "/images/coconutfibretwo.jpeg",
                "/images/coconutfibrethree.jpeg", "/images/coconutfibrefour.jpeg",],
            description: ` Pooja Exports International
                    produces one of the best qualities of coir Fibres
                    available in the market. Obtained from green coconuts, we produce a very fine White
                    fibre , Our White fibre is of the highest grade, eco-friendly and cost effective .
                    We assure quality and customer satisfaction`
        },
        {
            name: "Desiccated Coconut Powder",
            images: ["/images/coconutdesicatedone.webp", "/images/coconutdesicatedtwo.webp",],
            description: `Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                    to make a type specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. `
        },
        {
            name: "Semi Husked Coconut",
            images: ["/images/semihuskedtwo.jpeg", "/images/semihuskedone.webp"],
            description: "Partially husked coconut, perfect for various processing needs."
        },
    ],

    WPC: [
        {
            name: "Cladding",
            images: ["/images/claddingone.jpeg",
                "/images/claddingtwo.jpeg",
                "/images/cladding3.jpeg",
                "/images/cladding4.jpeg",
                "/images/cladding5.jpeg",

            ],
            description: "Durable WPC cladding for modern construction projects."
        },
        {
            name: "Decking",
            images: ["/images/deckingone.jpeg",
                "/images/deckingtwo.jpeg",
                "/images/deckingthree.jpeg",
                "/images/decking4.jpeg",
                "/images/decking5.jpeg",
                "/images/decking6.jpeg",
                "/images/decking7.jpeg",

            ],
            description: "Weather-resistant WPC decking for outdoor spaces."
        },
        {
            name: "Fencing",
            images: ["/images/fence1.jpeg",
                "/images/fence2.jpeg",
                "/images/fence3.jpeg",
                "/images/fence4.jpeg",
            ],
            description: "Sturdy WPC fencing for gardens and landscapes."
        },
    ],
};


const categoryBanners: Record<keyof typeof categoriesData, string> = {
    Charcoal: "/Images/productfiltercharcol.png",
    Coconut: "/Images/productfiltercoconut.avif",
    WPC: "/Images/productfilterwpc.png",
};

interface Props {
    params: { category: string };
}

export default function ProductFilter({ params }: Props) {
    const initialCategory = params.category as keyof typeof categoriesData;
    const [activeSubcategory, setActiveSubcategory] = useState(0);

    const subcategories = categoriesData[initialCategory];
    const [modalOpen, setModalOpen] = useState(false);
    const [activeImageIndex, setActiveImageIndex] = useState(0);


    const openCarousel = (startIndex: number) => {
        setActiveImageIndex(startIndex);
        setModalOpen(true);
    };

    const closeCarousel = () => setModalOpen(false);

    const nextImage = () => {
        setActiveImageIndex((prev) =>
            (prev + 1) % subcategories[activeSubcategory].images.length
        );
    };

    const prevImage = () => {
        setActiveImageIndex((prev) =>
            (prev - 1 + subcategories[activeSubcategory].images.length) %
            subcategories[activeSubcategory].images.length
        );
    };

    return (
        <>
            <Navbar />
            <div className="relative">
                <Image
                    src={categoryBanners[initialCategory]} // dynamic banner
                    alt={`${initialCategory} banner`}
                    width={1920}
                    height={335}
                    className="w-full object-cover h-[335px] rounded-b-[50px]"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-xl lg:text-4xl font-bold capitalize">
                        {initialCategory} Products
                    </h1>
                </div>
            </div>

            {/* Only show Subcategory Buttons */}
            <section className="py-12 px-6 lg:px-16">
                <div className="flex gap-3 lg:justify-center mb-10 overflow-x-auto scrollbar-hide px-4">
                    {subcategories.map((subcat, idx) => (
                        <button
                            key={subcat.name}
                            onClick={() => setActiveSubcategory(idx)}
                            className={`flex-shrink-0 lg:px-5 px-3 py-1 lg:py-2 rounded-lg font-medium shadow text-xs lg:text-[15px] ${activeSubcategory === idx
                                ? "bg-[#D73543] text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                        >
                            {subcat.name}
                        </button>
                    ))}
                </div>


                {/* Subcategory Images */}
                <div className="mt-6 max-w-4xl mx-auto text-center">
                    <p className="text-gray-700 text-sm lg:text-base">
                        {subcategories[activeSubcategory]?.description}
                    </p>
                </div>
                <div className="mt-10 flex justify-center">
                    <div
                        className={`grid  max-w-4xl w-full h-full overflow-hidden rounded-bl-[60px] rounded-tr-[60px] 
                        ${subcategories[activeSubcategory]?.images.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}
                    >
                        {subcategories[activeSubcategory]?.images?.slice(0, 4).map((file, i, arr) => {
                            const isVideo = file.endsWith(".mp4");
                            const isLastOdd = arr.length === 3 && i === 2;
                            const isLastVisible = i === 3; // 4th slot

                            return (
                                <div
                                    key={i}
                                    className={`relative ${isLastOdd ? "col-span-2" : ""}`}
                                    onClick={() => openCarousel(i)}
                                >
                                    {isVideo ? (
                                        <video
                                            src={file}
                                            className="object-cover w-full lg:h-64 h-32 cursor-pointer"
                                            controls
                                        />
                                    ) : (
                                        <Image
                                            src={file}
                                            alt={subcategories[activeSubcategory].name}
                                            width={300}
                                            height={200}
                                            className="object-cover w-full lg:h-64 h-32 cursor-pointer"
                                        />
                                    )}

                                    {/* Show +N overlay if more than 4 images */}
                                    {isLastVisible &&
                                        subcategories[activeSubcategory].images.length > 4 && (
                                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-3xl font-bold">
                                                +{subcategories[activeSubcategory].images.length - 4}
                                            </div>
                                        )}
                                </div>
                            );
                        })}
                    </div>



                </div>



                {modalOpen && (
                    <div className="fixed inset-0 bg-white/90 flex justify-center items-center z-50 px-10">
                        <button
                            className="absolute top-5 right-5 text-[#000] text-3xl"
                            onClick={closeCarousel}
                        >
                            <IoClose />
                        </button>
                        <button
                            className="text-[#000] text-4xl absolute left-5"
                            onClick={prevImage}
                        >
                            <IoIosArrowBack />
                        </button>

                        {/* Check if current file is a video */}
                        {subcategories[activeSubcategory].images[activeImageIndex].endsWith(".mp4") ? (
                            <video
                                src={subcategories[activeSubcategory].images[activeImageIndex]}
                                controls
                                className="object-contain max-h-[90vh]"
                            />
                        ) : (
                            <Image
                                src={subcategories[activeSubcategory].images[activeImageIndex]}
                                width={800}
                                height={600}
                                alt="carousel"
                                className="object-contain max-h-[90vh]"
                            />
                        )}

                        <button
                            className="text-[#000] text-4xl absolute right-5"
                            onClick={nextImage}
                        >
                            <IoIosArrowForward />
                        </button>
                    </div>
                )}



            </section>

            <Footer />
        </>
    );
}
