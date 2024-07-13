import Image from "next/image";
import Link from "next/link";
import React from "react";
import mohaimin from "../public/mohaimin-website-developer.webp";

const Reviews = () => {
  const images = [
    "/web1.png",
    "https://pagedone.io/asset/uploads/1688031232.jpg",
    "/web4.png",
    "/web4.png",
    "https://pagedone.io/asset/uploads/1688031396.jpg",
    "https://pagedone.io/asset/uploads/1688031414.png",
  ];

  return (
    <>
      <nav className="backdrop-blur-sm bg-[#000]/30 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-[1500px] w-full mx-auto px-10 py-4">
          <div className="">
            <Link href={"/"}>
              <Image
                priority
                placeholder="blur"
                quality={100}
                className="w-[50px] md:w-[80px] rounded-full"
                src={mohaimin}
              />
            </Link>
          </div>

          <div>
            <Link
              target="_blank"
              className="text-white bg-blue-600 px-6 md:px-10 py-2 md:py-4 rounded-xl font-semibold uppercase text-xs md:text-base duration-150"
              href={"https://calendly.com/mohai/30min"}
            >
              Book A Video Call
            </Link>
          </div>
        </div>
      </nav>

      <section className="bg-black min-h-screen ">
        <div className="text-center pt-5 pb-10">
          <h1 className="text-white text-2xl md:text-5xl">
            You’re in good hands{" "}
          </h1>
          <p className="text-[#999] text-sm md:text-2xl pt-2 md:pt-4">
            {" "}
            Read what our "Website Campus" subscribers say about us
          </p>
        </div>

        <div className="max-w-[1500px] w-full mx-auto px-10 py-4">
          <div className="columns-1 md:columns-2 xl:columns-3 gap-7">
            {images.map((src, index) => (
              <div key={index} className="break-inside-avoid mb-8 border">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                />
                <div className="text-white p-2 md:p-4">
                  <h1 className="">Clients Names </h1>
                  <small>Client Professions, copywriter</small>
                  <p>What client says about us and our services</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
