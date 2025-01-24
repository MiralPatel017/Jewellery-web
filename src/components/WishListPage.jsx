import React from 'react'
import Navbar from './NavPage'
import FooterPage from './FooterPage'

const WishListPage = () => {
    return (
        <div>

            {/* navbar */}
            <div className='container shadow-md'>
                <Navbar />
            </div>

            <div className='container mt-[80px]'>

                <div className=''>

                    {/* index */}
                    <div className='bg-secondary py-5 px-5 text-primary flex max-md:text-sm justify-between text-lg font-semibold'>
                        <div className='md:pl-5'>
                            Product
                        </div>

                        <div className='xl:pr-[250px] lg:pr-[150px]'>
                            Product Details
                        </div>

                        <div className='xl:pr-[120px] lg:pr-[100px]'>
                            action
                        </div>
                    </div>

                    {/* first Product */}
                    <div className='mt-8'>
                        <div className='flex md:gap-7 max-md:gap-5'>
                            {/* image */}
                            <div className='w-[20%] flex items-center max-md:w-[25%]'>
                                <div className='border p-1 border-black'>
                                    <img src="product-1.svg" alt="" className='border-1 border-black' />
                                </div>
                            </div>

                            {/* product details */}
                            <div className='md:w-[80%] max-md:w-[75%]'>

                                {/* product name */}
                                <div className='font-medium max-md:text-xs md:mb-5 max-md:mb-4 text-lg'>
                                    Annalise Layered Diamond Necklace
                                </div>

                                {/* Purity, Qty, price and delete */}
                                <div className='flex'>

                                    {/* Purity, Qty and price */}
                                    <div className='w-[80%] md:space-y-3 max-md:space-y-1 max-md:text-xs'>
                                        <p className='gap-1 flex'>
                                            Purity :
                                            <p className='opacity-55'>
                                                14K GOLD
                                            </p>
                                        </p>

                                        <p className='flex gap-1'>
                                            <span className='flex gap-2.5'>
                                                <p>
                                                    QTY
                                                </p>
                                                <p>
                                                    :
                                                </p>
                                            </span>
                                            <p className=' opacity-55'>
                                                1
                                            </p>
                                        </p>

                                        <p className='gap-1 flex'>
                                            Price :
                                            <span className=' opacity-55'>
                                                548.3 $
                                            </span>
                                        </p>
                                    </div>

                                    {/* delete button */}
                                    <div className='w-[20%]'>
                                        <img src="delete-btn.svg" alt="" className='md:w-[20px] max-md:w-[15px]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className='mt-10 border' />

                    {/* second Product */}
                    <div className='mt-8'>
                        <div className='flex md:gap-7 max-md:gap-5'>
                            {/* image */}
                            <div className='w-[20%] flex items-center max-md:w-[25%]'>
                                <div className='border p-1 border-black'>
                                    <img src="product-2.svg" alt="" className='border-1 border-black' />
                                </div>
                            </div>

                            {/* product details */}
                            <div className='md:w-[80%] max-md:w-[75%]'>

                                {/* product name */}
                                <div className='font-medium max-md:text-xs md:mb-5 max-md:mb-4 text-lg'>
                                    Beats Of Heart Diamond Band Ring
                                </div>

                                {/* Purity, Qty, price and delete */}
                                <div className='flex'>

                                    {/* Purity, Qty and price */}
                                    <div className='w-[80%] md:space-y-3 max-md:space-y-1 max-md:text-xs'>
                                        <p className='flex gap-1'>
                                            Purity :
                                            <span className=' opacity-55'>
                                                14K Gold and Diamod
                                            </span>
                                        </p>

                                        <p className='flex gap-1'>
                                            <sppan className='flex gap-2.5'>
                                                <p>
                                                    QTY
                                                </p>
                                                <p>
                                                    :
                                                </p>
                                            </sppan>
                                            <p className=' opacity-55'>
                                                1
                                            </p>
                                        </p>

                                        <p className='flex gap-1'>
                                            Price :
                                            <p className=' opacity-55'>
                                                468.8 $
                                            </p>
                                        </p>
                                    </div>

                                    {/* delete button */}
                                    <div className='w-[20%]'>
                                        <img src="delete-btn.svg" alt="" className='md:w-[23px] max-md:w-[15px]' />
                                    </div>
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

export default WishListPage