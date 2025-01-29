import React from 'react'
import NavPage from './NavPage'
import FooterPage from './FooterPage'
import { Link } from 'react-router-dom'
import MyOrderPage from './MyOrderPage'

const ThankYouPage = () => {

  const data = [
    {
      "name": "Annalise Layered Diamond Necklace",
      "purity": "14K Gold",
      "qty": 1,
      "price": "548.3 $",
      "image": "product-1.svg"
    },
    {
      "name": "Beats Of Heart Diamond Band Ring",
      "purity": "14K Gold and Diamod",
      "qty": 1,
      "price": "468.8 $",
      "image": "product-2.svg"
    }
  ]
  return (
    <div>
      {/* navbar */}
      <div className="shadow-md bg-white w-full fixed top-0 z-50">
        <div className='container'>
          <NavPage />
        </div>
      </div>

      {/* main container */}
      <div className='mt-[160px] container'>
        <div className='border border-secondary md:p-10 max-md:p-5 md:px-12 md:mx-5'>

          {/* title */}
          <div className='text-center md:text-xl font-semibold max-md:font-bold max-md:text-lg text-secondary Karla'>
            Thanks  for Order On Regal Rediance
          </div>

          {/* pera */}
          <div className='mt-5 text-center lg:w-[78%] mx-auto max-md:text-[15px] Karla'>
            Thank You for Your Order! The Annalise Layered Diamond Necklace and Beats of Heart Diamond Band Ring
            Are Ready to Sparkle in Your Collection
          </div>

          {/*  */}
          <div className='mt-5 flex items-center'>
            <hr className='w-full border border-secondary' />
            <p className=' border border-secondary rounded-[50%] px-2.5 py-4'>
              <img src="/Black.png" alt="" className='w-[80px] h-4.5' />
            </p>
            <hr className='w-full border border-secondary' />
          </div>

          {/* title: Your Activity Details */}
          <div className='text-center mt-5 text-lg md:font-semibold max-md:font-bold Karla'>
            Your Activity Details
          </div>

          {/* Booking id */}
          <div className='mt-1 text-center font-semibold Karla'>
            Booking ID : 2569846
          </div>

          <div className='mt-5'>
            {/* hr */}
            <hr className='w-full border border-secondary ' />
          </div>

          {/* product details */}
          <div className='mt-7 space-y-7'>
            {/*  */}
            {
              data.map((product, index) => {
                return (
                  <div key={index} className=''>
                    <div className='flex max-md:flex-wrap md:space-x-5 max-md:gap-5'>
                      {/* product image */}
                      <div className="md:w-[20%] max-lg:my-auto text-secondary">
                        <img src={product.image} alt="" className='' />
                      </div>

                      {/* product details */}
                      <div className=" md:w-[60%] max-md:flex-wrap max-md:justify-center max-md:w-full xl:space-y-6 lg:space-y-4">
                        <p className='xl:text-xl font-semibold max-md:text-[15px] max-lg:mb-2 Karla'>{product.name}</p>
                        <p className='xl:text-lg md:text-sm max-md:text-[15px] Karla'> Purity: {product.purity}</p>
                        <p className='xl:text-lg md:text-sm max-md:text-[15px] Karla'> QTY: {product.qty}</p>
                        <p className='xl:text-lg md:text-sm max-md:text-[15px] Karla'> Price: {product.price}</p>
                      </div>

                      {/* btn */}
                      <div className="lg:w-[20%] max-md:w-full h-full justify-center">
                        <Link to="/MyOrderPage">
                          <button className='text-secondary hover:text-primary bg-primary hover:bg-secondary border border-secondary Karla hover:border-primary md:text-[13px] xl:text-[14px] lg:text-[14px] max-md:text-[13px] w-[150px] h-[30px] duration-300'>
                            Download Invoice
                          </button>
                        </Link>
                      </div>
                    </div>

                    <div className='mt-5'>
                      <hr className='w-full border border-gray-300' />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      <div className='mt-[50px]'>
        {/* footer */}
        <FooterPage />
      </div>
    </div>
  )
}

export default ThankYouPage