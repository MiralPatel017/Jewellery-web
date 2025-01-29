import React from 'react'
import NavPage from './NavPage'
import FooterPage from './FooterPage'

const WishListPage = () => {
    return (
        <div>

            {/* navbar */}
            <div className="shadow-md bg-white w-full fixed top-0 z-50">
                <div className='container'>
                    <NavPage />
                </div>
            </div>

            <div className='container mt-[160px]'>

                <div className=''>

                    {/* index */}
                    <div className='bg-secondary py-5 px-5 text-primary flex max-md:text-sm justify-between text-lg font-[500] Montserrat'>
                        <div className='md:pl-5 Montserrat'>
                            Product
                        </div>

                        <div className='xl:pr-[270px] lg:pr-[170px] md:pr-[70px] Montserrat'>
                            Product Details
                        </div>

                        <div className='xl:pr-[130px] lg:pr-[90px] md:pr-[50px] Montserrat'>
                            Action
                        </div>
                    </div>

                    {/* first Product */}
                    <div className='mt-8'>
                        <div className='flex md:gap-7 max-md:gap-5'>
                            {/* image */}
                            <div className='lg:w-[15%] md:w-[21%] flex items-center max-md:w-[25%]'>
                                <div className='border p-1 border-black'>
                                    <img src="product-1.svg" alt="" className='border-1 border-black' />
                                </div>
                            </div>

                            {/* product details */}
                            <div className='lg:w-[85%] md:w-[80%] max-md:w-[75%] lg:space-y-4'>

                                {/* product name */}
                                <div className='font-medium max-md:text-xs lg:text-[20px] text-secondary line-clamp-1 max-md:mb-4 Karla'>
                                    Annalise Layered Diamond Necklace
                                </div>

                                {/* Purity, Qty, price and delete */}
                                <div className='flex'>

                                    {/* Purity, Qty and price */}
                                    <div className='w-[80%] md:space-y-2 max-md:space-y-1 max-md:text-xs Karla'>
                                        <p className='gap-1 line-clamp-1 flex text-nowrap Karla'>
                                            Purity :
                                            <p className='opacity-55 text-nowrap line-clamp-1 Karla'>
                                                14K GOLD
                                            </p>
                                        </p>

                                        <p className='flex gap-1 Karla'>
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

                                        <p className='gap-1 flex Karla'>
                                            Price :
                                            <span className=' opacity-55'>
                                                548.3 $
                                            </span>
                                        </p>
                                    </div>

                                    {/* delete button */}
                                    <div className='w-[20%]'>
                                        <img src="delete-btn.svg" alt="" className='md:w-[20px] max-md:w-[15px] Karla' />
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
                            <div className='lg:w-[15%] md:w-[21%] flex items-center max-md:w-[25%]'>
                                <div className='border p-1 border-black'>
                                    <img src="product-2.svg" alt="" className='border-1 border-black' />
                                </div>
                            </div>

                            {/* product details */}
                            <div className='lg:w-[85%] md:w-[80%] max-md:w-[75%] lg:space-y-4'>

                                {/* product name */}
                                <div className='font-medium max-md:text-xs lg:text-[20px] text-secondary max-md:mb-4 line-clamp-1 Karla'>
                                    Beats Of Heart Diamond Band Ring
                                </div>

                                {/* Purity, Qty, price and delete */}
                                <div className='flex'>

                                    {/* Purity, Qty and price */}
                                    <div className='w-[80%] md:space-y-2 max-md:space-y-1 max-md:text-xs'>
                                        <p className='flex gap-1 line-clamp-1 text-nowrap max-md:w-[90%] Karla'>
                                            Purity :
                                            <span className=' opacity-55 line-clamp-1'>
                                                14K Gold and Diamod
                                            </span>
                                        </p>

                                        <p className='flex gap-1 Karla'>
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

                                        <p className='flex gap-1 Karla'>
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