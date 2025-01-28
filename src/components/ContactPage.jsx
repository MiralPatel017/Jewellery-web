import React from 'react'
import NavPage from './NavPage'
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import FooterPage from './FooterPage';
const ContactPage = () => {
  return (
    <div>

      {/* navbar */}
      <div className="shadow-md bg-white w-full fixed top-0 z-50">
                <div className='container'>
                    <NavPage />
                </div>
            </div>

      {/* main container */}
      <div className='contact-main-container mt-[80px] flex justify-center max-md:text-center items-center'>
        {/* contain */}
        <div className='lg:pl-[500px]'>
          <p className='text-3xl text-white max-md:text-2xl'>
            For Any Inquiries
          </p>
          <p className='text-7xl text-primary max-md:text-[51px]'>
            Contact Us
          </p>
        </div>
      </div>

      {/* contact us form */}
      <div className=' mt-[50px]'>

        {/* title */}
        <div className='text-center titlestyle'>
          Contact us
        </div>

        <div className='container grid grid-cols-2 max-lg:grid-cols-1 mt-5 lg:space-x-10'>
          {/* form part  */}
          <div>
            <div>
              Have questions or feedback? We're here to help. Send us a message, and we'll respond within 24 hours
            </div>

            {/* form */}
            <div>
              <form className='flex flex-col space-y-5 mt-5'>

                {/* name */}
                <div className=''>
                  <input
                    placeholder='Your Name*'
                    type="text"
                    className="w-full p-2 border border-black focus:border-black focus:border focus:outline-none focus placeholder:text-secondary bg-[#BE9A8073]"
                    required
                  />
                </div>

                {/* phone number */}
                <div>
                  <input
                    placeholder='Your Phone Number*'
                    type="number"
                    className="w-full p-2 border border-black focus:border-black focus:border focus:outline-none focus placeholder:text-secondary bg-[#BE9A8073]"
                    required
                  />
                </div>

                {/* email */}
                <div>
                  <input
                    placeholder='Your Email*'
                    type="email"
                    className="w-full p-2 border border-black focus:border-black focus:border focus:outline-none placeholder:text-secondary bg-[#BE9A8073]"
                    required
                  />
                </div>

                {/* Your Subject* */}
                <div>
                  <input
                    placeholder='Your Subject*'
                    type="text"
                    className="w-full p-2 border border-black focus:border-black focus:border focus:outline-none placeholder:text-secondary bg-[#BE9A8073]"
                    required
                  />
                </div>

                {/* Your Message* */}
                <div className=''>
                  <textarea
                    placeholder='Your Message*'
                    rows="3"
                    className="w-full p-2 border border-black focus:border-black focus:border focus:outline-non bg-[#BE9A8073] placeholder:text-secondary"
                  />
                </div>

                {/* submit button */}
                <div className='max-md:flex max-md:justify-center p-1 border border-secondary w-fit'>
                  <button
                    className="bg-primary text-secondary hover:bg-secondary hover:text-primary border hover:border-primary p-1 px-12 text-sm font-semibold duration-300"
                  >
                    Submit
                  </button>
                </div>

              </form>
            </div>
          </div>

          {/* address, contact, hours part */}
          <div className='max-lg:mt-5 space-y-4'>

            {/* address */}
            <div className='mt-[55px] space-y-1'>
              <h2 className='text-[23px] text-secondary font-[600]'>Address</h2>
              <p className='text-[13px]'>
                Regal Redince <br />
                The Galleria Building, 3rd Floor,Suite 312, 4782 Jewelers Lane, <br />
                Midtown, New York, NY 10022
              </p>
              <p className='hover:text-secondary  text-primary flex items-center align-middle w-fit space-x-1 duration-300 cursor-pointer contacthover'>
                <span>
                  Get Durection
                </span>
                <span className='text-[25px] duration-300 contactarrow pt-1'>
                  <LiaLongArrowAltRightSolid />
                </span>
              </p>
            </div>

            {/* Contact */}
            <div className='space-y-1'>
              <h2 className='text-[23px] text-secondary font-[600]'>Contact</h2>
              <p className='text-[13px]'>
                +1 (212) 555-9847, <br />
                +1 (212) 555-7683
              </p>
              <p className='hover:text-secondary text-primary flex items-center align-middle w-fit space-x-1 duration-300 cursor-pointer contacthover'>
                <span>
                  Whatsapp Us
                </span>
                <span className='text-[25px] duration-300 contactarrow pt-1'>
                  <LiaLongArrowAltRightSolid />
                </span>
              </p>
            </div>

            {/* Hours */}
            <div className='space-y-1'>
              <h2 className='text-[25px] text-secondary font-[600]'>Hours</h2>
              <p className='text-[13px]'>
                Monday - Saturday <br />
                10:00 AM To 07:00PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Visit Our Jewellery Shop section */}
      <div className='container mt-[50px]'>

        {/* title */}
        <div className='text-center text-secondary titlestyle font-sans'>
          Visit Our Jewellery Shop
        </div>

        <div className='grid grid-cols-2 max-lg:grid-cols-1  mt-5 max-lg:space-y-3'>

          {/* map */}
          <div className=' lg:lg:flex lg:justify-center'>
            <img src="jewellery-map.svg" alt="" className='md:w-full contactmap'/>
          </div>


          {/* contain/text */}
          <div className='lg:text-[13.5px] text-secondary lg:p-4 max-lg:text-justify xl:text-[17px]'>
            Our showroom at Regal Redince is a beacon of elegance and timeless craftsmanship, nestled in the heart of Midtown, New York. For generations, we have been a trusted name in the world of fine jewelry, blending luxury with innovation. At Regal Redince, every piece tells a story, celebrating the artistry and traditions of exceptional jewelry-making. Step into a world of unmatched beauty and sophistication, where every design reflects our commitment to quality and excellence.
          </div>
        </div>
      </div>

      {/* footer */}
      <div className='mt-[50px]'>
        <FooterPage />
      </div>
    </div>
  )
}

export default ContactPage