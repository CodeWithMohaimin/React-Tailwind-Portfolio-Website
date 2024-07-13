import Image from "next/image";
import Link from "next/link";
import React from "react";
import mohaimin from "../public/mohaimin-website-developer.webp";

const Reviews = () => {
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

      <section className="bg-black min-h-screen">
        <div className="text-center pt-5 pb-10">
          <h1 className="text-white text-2xl md:text-5xl">
            You’re in good hands{" "}
          </h1>
          <p className="text-[#999] text-lg md:text-2xl pt-2 md:pt-4">
            {" "}
            Read what our "Website Campus" subscribers say about us
          </p>
        </div>
      </section>
    </>
  );
};

export default Reviews;
