import React from 'react'
import Navbar from './NavPage'
import FooterPage from './FooterPage'
import { Link } from 'react-router-dom'

const CartPage = () => {
    return (
        <div>
            {/* navbar */}
            <div className="shadow-md bg-white w-full fixed top-0 z-50">
                <div className='container'>
                    <Navbar />
                </div>
            </div>

            {/* product details and order summary */}
            <div className='container mt-[160px]'>
                <div className='flex max-lg:flex-wrap gap-10'>
                    {/* product details */}
                    <div className='lg:w-[70%] max-lg:w-full'>

                        {/* index */}
                        <div className='bg-secondary py-5 px-5 text-primary flex max-md:text-sm justify-between text-lg font-[600]'>
                            <div className='md:pl-5 Montserrat'>
                                Product
                            </div>

                            <div className='Montserrat'>
                                Product Details
                            </div>

                            <div className='md:pr-12 Montserrat'>
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
                                    <div className='font-[500] max-md:text-xs md:mb-5 max-md:mb-4 Karla text-lg'>
                                        Annalise Layered Diamond Necklace
                                    </div>

                                    {/* Purity, Qty, price and delete */}
                                    <div className='flex'>

                                        {/* Purity, Qty and price */}
                                        <div className='w-[80%] md:space-y-3 max-md:space-y-1 max-md:text-xs'>
                                            <p className='gap-1 flex Karla'>
                                                Purity :
                                                <p className='opacity-55'>
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
                                            <img src="delete-btn.svg" alt="" className='md:w-[23px] max-md:w-[15px]' />
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
                                    <div className='font-[500] max-md:text-xs md:mb-5 max-md:mb-4 text-lg Karla'>
                                        Beats Of Heart Diamond Band Ring
                                    </div>

                                    {/* Purity, Qty, price and delete */}
                                    <div className='flex'>

                                        {/* Purity, Qty and price */}
                                        <div className='w-[80%] md:space-y-3 max-md:space-y-1 max-md:text-xs Karla'>
                                            <p className='flex gap-1'>
                                                Purity :
                                                <span className=' opacity-55'>
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

                    {/* order summary */}
                    <div className='lg:w-[30%] max-lg:w-full'>

                        {/* index */}
                        <div className='bg-secondary py-5 text-center font-[600] Montserrat text-primary'>
                            Checkout Securely
                        </div>

                        <div className='bg-[#D9D9D9] px-1 py-[8px] '>

                            {/* title */}
                            <div className='mb-[8px] text-center font-[600] Montserrat'>
                                Order Summery
                            </div>

                            {/* order price and totle */}
                            <div className='bg-[#FFFFFF99] py-2'>

                                <div className="space-y-4">
                                    {/* Item Total */}
                                    <div className="flex justify-between text-[15px]  px-4">
                                        <span className="font-[500] Montserrat">Item Total</span>
                                        <span className="font-[500] Montserrat">1012.6 $</span>
                                    </div>

                                    {/* Season Discount */}
                                    <div className="flex justify-between text-[15px] Montserrat px-4">
                                        <span>Season Discount</span>
                                        <span>30 $</span>
                                    </div>

                                    {/* Sub Total */}
                                    <div className="flex justify-between text-[15px] Montserrat px-4">
                                        <span className="font-[500]">Sub Total</span>
                                        <span className="font-[500]">982.6 $</span>
                                    </div>

                                    {/* Insurance */}
                                    <div className="flex justify-between text-[15px] Montserrat px-4">
                                        <span>Insurance (1% Of Sub Total)</span>
                                        <span>2 $</span>
                                    </div>

                                    {/* Order Total */}

                                    <div className='flex justify-between text-lg Montserrat text-secondary bg-[#a6b0b0] w-full font-[600] px-4'>
                                        <span>Order Total</span>
                                        <span>984.6 $</span>
                                    </div>


                                    {/* Total Savings */}
                                    <div className="flex justify-between Montserrat text-[15px] px-4">
                                        <span>Your Total Savings</span>
                                        <span>30 $</span>
                                    </div>
                                </div>

                            </div>


                            <div className=' pt-[16px] pb-[8px] text-[12px] text-center Montserrat'>
                                Have Any Queries? contact us For Assistance <br />
                                Call Us At +1(212) 555-984 or whatsapp Chat
                            </div>
                        </div>


                        {/* continue shping button */}
                        <Link to='/PaymentPage'>
                            <button className='text-primary hover:text-secondary Montserrat bg-secondary hover:bg-primary text-xl w-full py-3 mt-5 font-[600] duration-300'>
                                Continue Shoping
                            </button>
                        </Link>
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

export default CartPage