import React from 'react'
import NavPage from './NavPage'
import FooterPage from './FooterPage'
const AboutUsPage = () => {
  return (
    <div className=' overflow-x-hidden'>

      {/* navbar */}
      <div className='container shadow-md'>
        <NavPage />
      </div>

      {/* main container */}
      <div className='about-main-container'>
        <div className='flex w-full md:ml-[150px] max-md:ml-[40px] justify-center lg:ml-[230px] h-full items-center'>
          <div className='space-y-4'>
            <h2 className='lg:text-3xl max-lg:text-lg  max-lg:py-1 text-secondary bg-primary w-fit py-2 font-semibold px-10'>
              About
            </h2>
            <h3 className='text-3xl text-white max-lg:text-2xl font-bold'>
              Get 50% Off On
            </h3>
            <h1 className='text-5xl text-primary max-lg:text-3xl font-semibold'>
              Fahion Jewellery
            </h1>
            <p className='p-1 border border-primary w-fit'>
              <button className='border bg-primary font-semibold text-secondary px-[25px] py-[1px] hover:bg-secondary hover:border border-primary hover:text-primary max-lg:text-sm duration-300' >
                Shop Now
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* about us section */}
      <div className='mt-[50px] container'>

        {/* title */}
        <div className='w-full mb-10 text-center'>
          <h2 className='text-3xl w-full font-semibold'>
            About Us
          </h2>
        </div>

        {/* contain */}
        <div className='flex max-xl:flex-wrap max-xl:justify-center max-xl:gap-5'>

          {/* image */}
          <div className='flex justify-center lg:mr-[100px] max-lg:mx-auto lg:w-[30%]'>
            <img src="aboutusimg.svg" className='xl:w-[93%]' />
          </div>

          <div className='space-y-5 xl:w-[70%] max-lg:mt-5'>
            <p className='text-[12px]'>
              Welcome to Regal Redince, where timeless elegance and extraordinary craftsmanship come together to create jewelry that captures life’s most cherished moments. For over 10 year, we have proudly helped our customers celebrate love, success, and milestones with designs that are as unique as the memories they represent. From sparkling diamonds and lustrous gold to contemporary and custom-made creations, every piece in our collection is crafted with care, precision, and a passion for excellence. Our jewelry reflects a seamless blend of tradition and innovation, offering timeless classics and modern styles to suit every occasion. Whether you're searching for the perfect engagement ring, a thoughtful gift, or an heirloom to cherish for generations, we’re here to make your dreams come true.
            </p>

            <p className='text-[12px]'>
              At Regal Redince, we believe that jewelry is far more than just an accessory—it’s a reflection of individuality, love, and the moments that matter most. Our custom design services allow you to bring your personal vision to life, creating one-of-a-kind treasures that will be cherished forever. We also take pride in offering ethically sourced gemstones and materials, ensuring that each piece represents not only beauty but also responsibility. From intricate craftsmanship to innovative techniques, our skilled artisans pour their expertise into every design. Each piece is created with the utmost attention to detail, ensuring perfection in every facet. Whether you’re looking for something bold and modern or a design that exudes timeless sophistication, Regal Redince has something special for you.
            </p>

            <p className='text-[12px]'>
              We understand that buying jewelry is a deeply personal experience, and we are here to make it as memorable as the moments you wish to commemorate. That’s why we offer a wide range of services, including custom designs, jewelry repairs, and expert advice to guide you in choosing pieces that are as unique as your story. Our collection is not only about beauty, but about quality, durability, and making sure your piece lasts for generations. At Regal Redince, we treat each customer like family, providing an experience that is personalized, friendly, and unforgettable. We invite you to explore our collections and allow us to help you find jewelry that will transform your special moments into timeless treasures.
            </p>

            <p className='text-[12px]'>
              In addition to our curated selection of jewelry, we also offer bespoke services to create pieces that reflect your unique style and personality. Our designers work closely with you to understand your vision, crafting masterpieces that are as individual as you are. Whether you’re looking for a wedding band that perfectly complements your engagement ring or a statement piece that makes you stand out at an event, Regal Redince is dedicated to bringing your vision to life with precision and care.
            </p>
          </div>

        </div>
      </div>


      {/* Our Vision section */}
      <div className='mt-[50px] container'>
        {/* title */}
        <div className='w-full mb-10 text-center'>
          <h2 className='text-3xl w-full font-semibold'>
            Our Vision
          </h2>
        </div>

        {/* contain */}
        <div className='flex max-xl:flex-wrap max-xl:justify-center max-xl:gap-5'>


          {/* text */}
          <div className='space-y-5 xl:w-[60%]'>
            <p className='text-[12px]'>
              At Regal Redince, our vision is to create timeless, meaningful jewelry that enhances life’s most cherished moments. We aim to be a destination for those seeking not only beautiful designs but also a personal connection to the artistry and craftsmanship behind each piece. Our commitment to innovation, ethical sourcing, and sustainability guides us in creating jewelry that is not only visually stunning but also responsible and enduring. We envision a future where every piece from Regal Redince becomes a cherished symbol of love, celebration, and personal expression, passed down through generations. Our goal is to provide an experience that is as unforgettable as the moments our jewelry represents, ensuring that every customer feels valued, heard, and celebrated.
            </p>
            <p className='text-[12px]'>
              Our vision is rooted in a deep respect for craftsmanship and artistry. We seek to preserve traditional techniques while embracing modern innovations to bring you the finest jewelry, built to last and designed to delight. At Regal Redince, we are more than just jewelers—we are storytellers. Every piece we create is a narrative, each stone a chapter, each design a continuation of a legacy. We believe that jewelry should evoke emotion, stir memories, and inspire the wearer to feel confident and connected to the meaningful moments in their life.
            </p>
          </div>

          {/* image */}
          <div className='flex justify-center my-5 max-lg:mx-auto lg:w-[40%]'>
            <img src="ourvisionimg.svg" className='xl:w-[75%]' />
          </div>
        </div>

      </div>


      {/* Our Values section */}
      <div className='mt-[50px] container'>
        {/* title */}
        <div className='w-full mb-10 text-center'>
          <h2 className='text-3xl w-full font-semibold'>
            Our Values
          </h2>
        </div>

        {/* contain */}
        <div className='flex max-xl:flex-wrap max-xl:justify-center max-xl:gap-5'>
          {/* image */}
          <div className='flex justify-center max-lg:mx-auto mb-5 xl:w-[40%]'>
            <img src="ourvaluesimg.svg" className='xl:w-[70%] max-lg:w-full' />
          </div>

          {/* text */}
          <div className='space-y-5 xl:w-[60%]'>
            <p className='text-[12px]'>
              At Regal Redince, our values are rooted in a commitment to craftsmanship, integrity, sustainability, and customer-centricity. We take pride in creating jewelry that blends timeless artistry with innovation, ensuring every piece reflects the highest standards of quality. Our dedication to responsible sourcing and eco-friendly practices ensures that our designs not only shine but contribute positively to the world. We prioritize personalized service, listening closely to our customers' needs and helping them find pieces that are as meaningful as they are beautiful. Above all, we believe in creating jewelry that lasts for generations, both in quality and sentiment, building legacies and cherished memories with every creation.
            </p>

            <p className='text-[12px]'>
              We believe that every piece of jewelry should have a story, and we are committed to telling that story through thoughtful design and impeccable craftsmanship. At Regal Redince, we strive to continuously evolve, embracing new technologies and materials while honoring the traditions that have made our jewelry timeless. Our artisans bring passion and precision to every detail, ensuring that each piece is a work of art. We take responsibility for the impact our business has on the environment, and our ethical practices guide every step of our process, from sourcing to production. Each creation is a celebration of love, legacy, and craftsmanship.
            </p>
          </div>
        </div>
      </div>


      {/* Regal Rediance section */}
      <div className='mt-[50px] bg-[#BE9A807A] pb-[50px]'>
        <div className='container'>

          {/* title */}
          <div className='py-[80px]'>
            <h2 className='text-3xl w-full text-secondary font-semibold text-center'>
              Why Regal Rediance ?
            </h2>
          </div>

          {/* 4 card */}
          <div className='flex justify-center'>
            <div className="grid grid-cols-4 max-xl:grid-cols-2 gap-5">

              {/* first card */}
              <div className='flex-wrap justify-center md:w-[250px]'>

                {/* image */}
                <div className="flex justify-center overflow-hidden bg-[#BE9A80] md:w-[250px]">
                  <img src="regalredianceimg1.svg" className='md:w-[250px] hover:scale-[1.15] scale-[0.7] duration-300' />
                </div>

                {/* text */}
                <div className='text-center mt-2 font-semibold'>
                  Designer Antique Jewellery
                </div>
              </div>

              {/* second card */}
              <div className='flex-wrap justify-center md:w-[250px]'>

                {/* image */}
                <div className="flex justify-center overflow-hidden bg-[#BE9A80] md:w-[250px]">
                  <img src="regalredianceimg2.svg" className='md:w-[250px] hover:scale-[1.15] scale-[0.7] duration-300' />
                </div>

                {/* text */}
                <div className='text-center mt-2 font-semibold'>
                  Personalized Service
                </div>
              </div>

              {/* third card */}
              <div className='flex-wrap justify-center md:w-[250px]'>

                {/* image */}
                <div className="flex justify-center overflow-hidden bg-[#BE9A80] md:w-[250px]">
                  <img src="regalredianceimg3.svg" className='md:w-[250px] hover:scale-[1.15] scale-[0.7] duration-300' />
                </div>

                {/* text */}
                <div className='text-center mt-2 font-semibold'>
                  10 Years Of Legency
                </div>
              </div>

              {/* forth card */}
              <div className='flex-wrap justify-center md:w-[250px]'>

                {/* image */}
                <div className="flex justify-center overflow-hidden bg-[#BE9A80] md:w-[250px]">
                  <img src="regalredianceimg4.svg" className='md:w-[250px] hover:scale-[1.15] scale-[0.7] duration-300' />
                </div>

                {/* text */}
                <div className='text-center mt-2 font-semibold'>
                  Customer Satisfaction
                </div>
              </div>


            </div>
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

export default AboutUsPage