import React from 'react'
import NavPage from './NavPage'
import FooterPage from './FooterPage'

const OrderTrackingPage = () => {

    const steps = [
        { id: 1, label: "Order Processed", completed: true },
        { id: 2, label: "Order Shipped", completed: true },
        { id: 3, label: "Order En Route", completed: false },
        { id: 4, label: "Order Arrived", completed: false },
    ];

    return (
        <div>

            {/* navbar */}
            <div className="shadow-md bg-white w-full fixed top-0 z-50">
                <div className='container'>
                    <NavPage />
                </div>
            </div>

            {/* main container */}
            <div className=' container mt-[160px] Karla'>

                {/* title */}
                <div className=" max-md:text-center max-lg:text-3xl lg:text-[40px] font-[600] Montserrat">
                    Order Tracking
                </div>

                {/* order steps */}
                <div className="flex items-center w-full mt-5 px-5">
                    {/* First Step */}
                    <div className="flex items-center w-1/3">
                        <div className="h-6 w-6 bg-secondary rounded-full"></div>
                        <div className="h-1 bg-secondary w-full"></div>
                    </div>

                    {/* Second Step */}
                    <div className="flex items-center  w-1/3 ">
                        <div className="h-7 w-7 bg-primary rounded-full border-2 border-primary flex justify-center items-center">
                            <div className="h-4 w-4 bg-secondary rounded-full">
                            </div>
                        </div>
                        <div className="h-1 bg-primary w-full"></div>
                    </div>

                    {/* Third Step */}
                    <div className="flex items-center  w-1/3">
                        <div className="h-6 w-6 bg-primary rounded-full border-2 border-primary"></div>
                        <div className="h-1 bg-primary w-full"></div>
                    </div>

                    {/* Final Step */}
                    <div className="h-6 w-6 bg-primary rounded-full border-2 border-primary"></div>
                </div>

                <div className='mt-5' >
                    <div className='flex md:justify-between max-md:gap-[40px] Montserrat'>
                        <div className='text-center max-md:text-sm max-md:pr-[0px]'>
                            Order <br />
                            Processed
                        </div>
                        <div className='text-center max-md:text-sm max-md:pr-[10px]'>
                            Order <br />
                            Shipped
                        </div>
                        <div className='text-center max-md:text-sm max-md:pr-[15px]'>
                            Order <br />
                            Shipped
                        </div>
                        <div className='text-center max-md:text-sm'>
                            Order <br />
                            Arrived
                        </div>
                    </div>
                </div>

                {/* product details */}
                <div className='mt-5'>
                    <div className='mt-8'>
                        <div className='flex md:gap-7 max-md:gap-5'>
                            {/* image */}
                            <div className='w-auto flex items-center max-md:w-[25%]'>
                                <div className='border p-1 border-black'>
                                    <img src="product-1.svg" alt="" className='border-1 w-[100px] border-black' />
                                </div>
                            </div>

                            {/* product details */}
                            <div className='md:w-[80%] max-md:w-[75%] Karla'>

                                {/* product name */}
                                <div className='font-medium max-md:text-xs md:mb-5 max-md:mb-4 text-lg'>
                                    Annalise Layered Diamond Necklace
                                </div>

                                {/* Purity, Qty and price */}
                                <div className='flex'>

                                    {/* Purity & Qty */}
                                    <div className='w-[80%] md:space-y-3 max-md:space-y-1 max-md:text-xs'>

                                        {/* Purity  */}
                                        <p className='gap-1 flex'>
                                            Purity :
                                            <p className='opacity-55'>
                                                14K GOLD
                                            </p>
                                        </p>
                                        {/* qty */}
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
                                    </div>
                                </div>
                            </div>

                            {/* price */}
                            <div className='w-[10%] flex items-center justify-end'>
                                <p className='text-end max-md:text-sm max-md:font-bold text-nowrap font-semibold '>
                                    548.3 $
                                </p>
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

export default OrderTrackingPage