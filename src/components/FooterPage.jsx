import React from 'react'
import { Link } from 'react-router-dom'
const FooterPage = () => {
  return (
    <div className='bg-[#D5DDDD] text-secondary pt-12 pb-3 text-secondary'>
      <div className='grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 justify-between  xl:px-10 lg:mx-[62px] md:px-8 px-4 2xl:px-[150px] 2xl:mx-auto'>

        {/* first section */}
        <div>
          <div>
            <img src="main-logo.svg" alt="" className='max-md:w-[100px] md:w-[90px]' />
          </div>

          {/* Location */}
          <div className='mt-7 Montserrat'>
            <div>
              <h1 className='text-3xl font-[600] text-secondary Montserrat'>
                Location
              </h1>
            </div>

            <div className='mt-5 space-y-3'>
              <p>
                support@regalrediance.com
              </p>
              <p>
                Regal Rediance Jewellery 23-25 The Parade,
              </p>
              <p>
                Leamington Spa,CV32 4DN,United Kingdom
              </p>
            </div>
          </div>
        </div>

        {/* second section */}
        <div className='md:mt-10 md:pl-[50px] max-md:mt-5 Montserrat '>
          <div>
            <h1 className='text-3xl font-[600] text-secondary Montserrat'>
              Link
            </h1>
          </div>
          <div className='mt-5 space-y-3'>
            <p>
              <Link to='/'> Home </Link>
            </p>
            <p>
              <Link to='/CategoriePage'> Categories </Link>
            </p>
            <p>
              <Link to='/AboutUsPage'> About </Link>
            </p>
            <p>
              <Link to='/ServicePage'> Services </Link>
            </p>
            <p>
              <Link to='/ContactPage'> Contact </Link>
            </p>
          </div>
        </div>

        {/* third section */}
        <div className='md:mt-10 max-md:mt-5 Montserrat'>
          <div>
            <h1 className='text-3xl font-[600] text-secondary Montserrat'>
              Information
            </h1>
          </div>
          <div className='mt-5 space-y-3'>
            <p>
              Term and Conditions
            </p>
            <p>
              Privacy Policy
            </p>
            <p>
              Blog
            </p>
            <p>
              Help & FAQ’s
            </p>
          </div>
        </div>

        {/* forth section */}
        <div className='md:mt-10 max-md:mt-5 Montserrat'>
          <div>
            <h1 className='text-3xl font-[600] Montserrat text-secondary'>
              Newsletter
            </h1>
          </div>
          <div className='mt-5'>
            <div className='flex items-center mt-7'>
              <input type="text"
                className='bg-primary placeholder:text-secondary px-2 text-sm py-2 w-full rounded-l-lg border border-secondary'
                placeholder='Enter Your Email Address' />
              <button className='p-2 w-fit text-sm border border-secondary px-4 text-primary bg-secondary rounded-r-lg'>
                Subscribe
              </button>
            </div>
            <div className='flex space-x-3 mt-5'>
              <img src="facebook.svg" alt="" />
              <img src="instagram.svg" alt="" />
              <img src="linkedin.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* copy right section */}
      <div className='mt-[30px] Montserrat'>

        <hr className='border-[1px] border-secondary' />

        <div className=' text-center text-secondary mt-5'>
          Copyright Notice © 2024 Regal Rediance. All Rights Reserved.
        </div>
      </div>
    </div>
  )
}

export default FooterPage
