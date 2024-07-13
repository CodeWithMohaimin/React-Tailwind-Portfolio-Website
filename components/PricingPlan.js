import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import mohaimin from "../public/mohaimin-website-developer.webp";

const PricingCard = () => {
  return (
    <header >
      <nav className='backdrop-blur-sm bg-[#000]/30 sticky top-0 z-50'>

        <div className='flex items-center justify-between max-w-[1500px] w-full mx-auto px-10 py-4'>
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
              target='_blank'
              className='text-white bg-blue-600 px-6 md:px-10 py-2 md:py-4 rounded-xl font-semibold uppercase text-xs md:text-base duration-150'
              href={'https://calendly.com/mohai/30min'}>
              Book A Video Call
            </Link>
          </div>
        </div>

      </nav>


      <section className='bg-[#081030]  min-h-screen p-4'>
        <h1 className='bg-[#081030] text-white  text-center text-4xl pt-5 pb-24'>100% Mony Back Grantee</h1>

        <div className="bg-[#081030] text-[#dfe8ff] flex justify-center gap-5  flex-wrap">

          {/* Offer 1 ----------------------------------------------------------------------- */}
          <article className="bg-[#000] hover:bg-blue-600 duration-500 border-[#fff] hover:border-blue-600  border-[1px] rounded-2xl w-full max-w-[500px] p-8 flex flex-col justify-between">

            <div>
              <h2 className="text-lg md:text-2xl font-semibold mt-4 text-white">
                E-commerce Pack =
                <span className=" text-teal-300 ">
                  $3,997
                  <small className='line-through text-red-400'>$7,500</small>
                </span>

              </h2>
              <div className="mt-8">
                {Offer2.map((feature, index) => (
                  <details className="relative mb-2 md:mb-4" key={index}>
                    <summary className="flex items-center list-none cursor-pointer">
                      <div className="min-w-3 md:min-w-6 min-h-3 md:min-h-6 rounded-full bg-[#4ade80] flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" className="text-white">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                        </svg>
                      </div>
                      <span className='text-xs md:text-base' >{feature.name}</span>
                    </summary>
                    <div className="bg-[#111b40] rounded-md p-3 border border-[#293359] shadow-md absolute left-1/2 transform -translate-x-1/2 -translate-y-full top-[-12px] w-4/5 z-10">
                      {feature.description}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            <button className='bg-green-400 text-black py-2 px-4 w-full mt-8 rounded-md text-sm md:text-lg uppercase'>My Requirements PDF</button>

          </article>

          {/* Offer 2 ----------------------------------------------------------------------- */}
          <article className="bg-[#000] hover:bg-blue-600 duration-500 border-[#fff] hover:border-blue-600   border-[1px] rounded-2xl w-full max-w-[500px] p-8 flex flex-col justify-between">
            <div>

              <h2 className="text-lg md:text-2xl font-semibold mt-4 text-white">Creatives Portfolio Pack =

                <span className=" text-teal-300 ">
                  $1,997
                  <small className='line-through text-red-400'>$4,500</small>
                </span>

              </h2>
              <div className="mt-8">
                {Offer1.map((feature, index) => (
                  <details className="relative mb-2 md:mb-4" key={index}>
                    <summary className="flex items-center list-none cursor-pointer">
                      <div className="min-w-3 md:min-w-6 min-h-3 md:min-h-6 rounded-full bg-[#4ade80] flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" className="text-white">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                        </svg>
                      </div>
                      <span className='text-xs md:text-base'>{feature.name}</span>
                    </summary>
                    <div className="bg-[#111b40] rounded-md p-3 border border-[#293359] shadow-md absolute left-1/2 transform -translate-x-1/2 -translate-y-full top-[-12px] w-4/5 z-10">
                      {feature.description}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            <button className='bg-green-400 text-black py-2 px-4 w-full mt-8 rounded-md text-sm md:text-lg uppercase'>My Requirements PDF</button>


          </article>



        </div>
      </section>
    </header>
  );
};


// Offer 1 -----------------------------------------------
const Offer1 = [
  {
    name: '5-page custom website',
    description: 'One user access.'
  },
  {
    name: 'Essential SEO setup',
    description: 'One fee. One time. Yours forever.'
  },
  {
    name: 'Mobile & tablet responsive design',
    description: 'You will gain access to every future update.'
  },
  {
    name: 'Integration of social media links',
    description: 'Create as many projects as you want.'
  },
  {
    name: 'Contact form + basic automation',
    description: 'Keep your files for easy access and management. 5GB space included. Scale when necessary.'
  },
  {
    name: '2 revision rounds',
    description: 'Get help and learn new things in our community Slack with over 5,000 contributors.'
  },
  {
    name: '30 days of post-launch support',
    description: 'Instant rollbacks to any version.'
  },
  {
    name: 'Basic analytics setup',
    description: 'Instant rollbacks to any version.'
  }
];


// Offer 2 -----------------------------------------------
const Offer2 = [
  {
    name: '10-page advanced website',
    description: 'One user access.'
  },
  {
    name: 'Advanced SEO and keyword optimization',
    description: 'One fee. One time. Yours forever.'
  },
  {
    name: 'Fully responsive design with custom animations',
    description: 'You will gain access to every future update.'
  },
  {
    name: 'E-commerce setup with up to 20 products',
    description: 'Create as many projects as you want.'
  },
  {
    name: 'Blog setup with content management system',
    description: 'Keep your files for easy access and management. 5GB space included. Scale when necessary.'
  },
  {
    name: 'Email marketing integration',
    description: 'Get help and learn new things in our community Slack with over 5,000 contributors.'
  },
  {
    name: '3 revision rounds',
    description: 'Instant rollbacks to any version.'
  },
  {
    name: '60 days of post-launch support',
    description: 'Instant rollbacks to any version.'
  },
  {
    name: 'Advanced analytics and reporting',
    description: 'Instant rollbacks to any version.'
  },
  {
    name: 'Conversion rate optimization (CRO) consultation',
    description: 'Instant rollbacks to any version.'
  }
];



export default PricingCard;
