import Image from "next/image";
import Link from "next/link";
import React from "react";
import mohaimin from "../public/mohaimin-website-developer.webp";

const Reviews = () => {
  const items = [
    {
      key: "a1",
      src: "/reviews/jobs.jpg",
      ClientName: "JobsCy",
      country: "Cyprus",
      paragraph:
        "This is a description for image 1. This is a description for image 1.This is a description for image 1.This is a description for image 1.This is a description for image 1.",
      caseStudy: "reviews/JobCy",
    },
    {
      key: "b2",
      src: "/reviews/tld.jpg",
      ClientName: "TLD Studio",
      country: "United Kingdom",
      paragraph:
        "This is a description for image 2. This is a description for image 2.This is a description for image 2.This is a description for image 2.",
      caseStudy: "reviews/tldStudio",
    },
    {
      key: "c3",
      src: "/reviews/rey.jpg",
      ClientName: "Rey-Express",
      country: "Canada",
      paragraph:
        "This is a description for image 3.This is a description for image 3.This is a description for image 3.This is a description for image 3.This is a description for image 3.",
      caseStudy: "reviews/reyExpress",
    },
  ];

  return (
    <main className="bg-black">
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
                alt="logo"
              />
            </Link>
          </div>

          <div>
            <Link
              target="_blank"
              className="text-white bg-blue-600 px-6 md:px-10 py-2 md:py-4 rounded-xl font-semibold uppercase text-xs md:text-base duration-300 hover:bg-blue-800"
              href={"https://calendly.com/mohai/30min"}
            >
              Book A Video Call
            </Link>
          </div>
        </div>
      </nav>

      <section className="min-h-screen ">
        <div className="text-center pt-5 pb-10">
          <h1 className="text-white text-2xl md:text-5xl font-bold">
            You&#x27;re in good hands{" "}
          </h1>
          <p className="text-[#999] text-sm md:text-2xl pt-2 md:pt-4">
            {" "}
            Read what our Website Campus subscribers say about us
          </p>
        </div>

        <div className="max-w-[1500px] w-full mx-auto px-10 py-4">
          <div className="columns-1 md:columns-2 xl:columns-3 gap-7">
            {items.map((item, index) => (
              <Link href={item.caseStudy}>
                <div
                  key={item.key}
                  className="break-inside-avoid mb-8 rounded-lg md:rounded-xl hover:scale-105 duration-300 cursor-pointer border-[1px] border-[#555] hover:bg-blue-600"
                >
                  <img
                    className="h-auto max-w-full rounded-t-lg md:rounded-t-xl"
                    src={item.src}
                    alt={`Gallery image ${index + 1}`}
                  />
                  <div className="p-2 md:p-4 text-white">
                    <div className="flex items-center justify-between">
                      {" "}
                      <h3 className="text-base md:text-2xl font-semibold">
                        {item.ClientName}
                      </h3>
                      <small className="text-[#999]">{item.country}</small>
                    </div>
                    <p className=" text-[#cbcbcb]">
                      <span className="text-4xl w-4 h-4">&#8220;</span>
                      {item.paragraph}{" "}
                      <span className="text-4xl w-4 h-4 flex">&#8221;</span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Reviews;
