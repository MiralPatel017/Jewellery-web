import React from 'react';
import { Link } from 'react-router-dom';
import OurService from './OurService.json';
import NavPage from './NavPage';
import FooterPage from './FooterPage';

const ServicePage = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="shadow-md bg-white w-full fixed top-0 z-50">
                <div className='container'>
                    <NavPage />
                </div>
            </div>

      {/* main container */}
      <div className='service-main-container mt-[80px]'>
        <div className='container flex max-lg:justify-center  xl:pl-[800px] lg:pl-[500px] h-full my-auto'>
          <div className='flex-wrap my-auto space-y-3 max-lg:text-center'>
            {/* title */}
            <div className='bg-primary text-secondary text-3xl w-fit px-7 pb-1  max-lg:mx-auto '>
              service
            </div>

            <div className='text-white md:text-2xl text-lg font-semibold'>
              Get Repair Service Free on
            </div>

            <div className='text-primary text-6xl max-lg:text-5xl max-md:text-4xl'>
              Wedding Season
            </div>
          </div>
        </div>
      </div>

      {/* How We Make Our Jewellery section */}
      <div className='container mt-[50px]'>

        {/* title */}
        <div>
          <div className='text-center text-3xl'>
            How We Make Our Jewellery
          </div>
        </div>

        <div className='flex max-lg:flex-wrap max-lg:mx-auto max-lg:justify-center mt-12 gap-5'>

          {/* image */}
          <div className='lg:w-30%  max-xl:flex xl:items-center'>
            <img src="We-Make-Our-Jewellery-img.svg" alt="" className='md:w-[80%] mx-auto' />
          </div>

          {/* text/contain */}
          <div className='lg:w-[70%]'>
            <p className='lg:text-[12.5px] max-md:text-sm max-lg:text-justify xl:text-[14.5px]'>
              At Regal Redince, jewelry making is an art form that blends tradition with innovation. Our process begins with a collaborative design phase, where we work closely with clients to bring their vision to life through detailed sketches and digital renderings. We then source the finest ethically-sourced gemstones and metals, ensuring quality and sustainability. Skilled artisans craft each piece with meticulous attention to detail, combining traditional techniques and modern technology. Each item undergoes rigorous quality control and finishing touches to ensure flawless craftsmanship. From concept to creation, we take pride in delivering jewelry that is as meaningful as it is beautiful, designed to last for generations. Every piece is a reflection of our commitment to excellence, passion for design, and dedication to customer satisfaction. We believe in creating jewelry that tells a unique story, making each piece a cherished treasure. At Regal Redince, we don't just create jewelry, we create legacies. Our pieces are made to stand the test of time, evoking emotions and memories for years to come. With every creation, we honor the artistry and tradition that has been passed down through generations.
            </p>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className='py-[50px] ourservices mt-[50px]'>
        <div className='container'>
          <div className='text-center titlestyle text-secondary'>
            Our Services
          </div>

          <div className='grid grid-cols-5 mt-5 max-lg:grid-cols-2 gap-5 '>
            {OurService.map((service) => (
              <div key={service.id} className='w-fit servicehover duration-300 max-lg:mx-auto'>
                <Link to={`/ServiceDetailsPage/${service.id}`}>
                  <div>
                    <img src={service.img} alt={service.name} className='w-[100%] duration-300' />
                  </div>
                  <div className='text-center mt-3 max-md:text-base font-semibold text-lg'>
                    <p className='duration-300 max-md:text-[13.5px]'>{service.name}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*  */}
      <div className='mt-[50px]'>
        <div className='container grid grid-cols-2 max-lg:grid-cols-1'>
          <div className='p-10 bg-[#BE9A8080] flex justify-center py-20 mx-auto '>
            <img src="making-customized.png" alt="w-[95%]" />
          </div>
          <div>
            <img src="customizedjewelleyimg.svg" alt="" className='mx-auto'/>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='mt-[50px]'>
        <FooterPage />
      </div>
    </div>
  );
};

export default ServicePage;