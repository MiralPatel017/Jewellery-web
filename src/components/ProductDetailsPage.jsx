import React from 'react'
import Navbar from './NavPage'
import { Link } from 'react-router-dom'
import FooterPage from './FooterPage'
const ProductDetailsPage = () => {

    // four product image
    const productImage = ["productimg1.svg", "productimg2.svg", "productimg3.svg", "productimg4.svg"]

    // change image on onClisk
    const [mainImage, setMainImage] = React.useState(productImage[0]);

    return (
        <div>
            {/* navbar */}
            <div className='container shadow-md'>
                <Navbar />
            </div>

            {/* mian container (Product details and images) */}
            <div className='container mt-[50px]'>

                {/* grid main div */}
                <div className='grid grid-cols-2 max-lg:grid-cols-1 lg:gap-7'>

                    {/* product image div */}
                    <div className='flex max-lg:flex-wrap-reverse gap-5'>
                        {/* four image div */}
                        <div className='max-lg:w-full max-lg:flex gap-5 w-[17.5%] max-xl:space-y-4 max-lg:space-y-0 max-lg:pt-0 xl:space-y-5 max-lg:justify-around'>
                            {
                                productImage.map((image, index) => {
                                    return (
                                        <div key={index} className={`border border-black max-lg:w-[100px] ${mainImage === image ? 'border-[2px] p-[3px]' : 'p-1'
                                            } cursor-pointer`
                                        }
                                            onClick={() => setMainImage(image)} >
                                            <img src={image} alt="product image" className='w-full h-[100%]' />
                                        </div>
                                    )
                                })
                            }
                        </div>

                        {/* product main image div */}
                        <div className='max-md:w-full w-[80%] duration-300 mx-auto border border-gray-700 max-lg:w-[400px] max-lg:h-[400px] p-3 max-xl:h-fit'>
                            <img src={mainImage} alt="" className='w-full h-full duration-300' />
                        </div>
                    </div>

                    {/* product details div */}
                    <div className='max-lg:mt-10 xl:space-y-5 max-lg:space-y-5 max-xl:space-y-3'>

                        <div className='font-semibold text-xl'>
                            Annalise Layered Diamond Necklace
                        </div>

                        <div className=' lg:text-sm max-md:text-justify'>
                            Intricate Annalise Layered Diamond Necklace in Yellow, White and Rose gold, priced
                            under 548.3 $.This fashionable diamond necklace for her is crafted in 14k gold purity &
                            0.1299 ct diamond to elevate your stylish ensemble.This casual necklace is ideal for
                            everyday wear.
                        </div>

                        <div className=' lg:text-sm'>
                            SKU: GN-D000589135
                        </div>

                        <div className=''>
                            ★★★★☆ (4.6) 1.2k Reviews
                        </div>

                        <div className=' gap-2 flex items-end align-bottom'>
                            <div className='text-3xl max-md:text-xl font-semibold text-nowrap'> $ 548.3 </div>
                            <div className='text-gray-500 max-sm:text-sm line-through text-nowrap'> 988.04 $</div>
                            <div className='max-sm:text-sm line-clamp-1'>40% Off On Making Charges</div>
                        </div>

                        <div className=''>
                            <div className='flex gap-1 px-2 bg-primary py-1 font-[450] max-md:border-[1.5px] border-[1.8px items-center] border-secondary text-secondary w-fit'>
                                <img src="RightVector.svg" alt="" className='' />
                                <div className='text-sm'>Only 5 In Stock</div>
                            </div>
                        </div>

                        <div className=' text-sm'>
                            Expected Shipping within 5 - 7 days
                        </div>

                        <div className=''>
                            <div className='grid grid-cols-2 max-md:grid-cols-1 md:gap-8 max-md:gap-5'>

                                <Link to='/WishListPage'>
                                    <button className='border border-secondary hover:border-primary bg-primary hover:bg-secondary text-secondary hover:text-primary duration-300 py-[5px] text-[17px] w-full'>
                                        Add To Wishlist
                                    </button>
                                </Link>

                                <Link to='/CartPage'>
                                    <button className='border border-secondary hover:border-primary bg-primary hover:bg-secondary text-secondary hover:text-primary duration-300 py-[5px] text-[17px] w-full'>
                                        Add To Cart
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* order summary */}
            <div className='mt-[50px] container'>
                {/* title */}
                <div className='text-center text-2xl font-semibold'>
                    Product Information
                </div>

                {/* order summary */}
                <div className='flex max-lg:flex-wrap lg:gap-16 max-lg:gap-10 mt-5'>
                    <div className='w-[25%] bg-[#d0a88b4d] max-lg:w-full p-4'>

                        {/* sub title */}
                        <div className='w-full text-2xl font-semibold text-center mt-1 max-md:font-bold'>
                            Product Summary
                        </div>

                        {/* other details */}
                        <div className='mt-5 space-y-2.5'>
                            <div className='flex justify-between'>
                                <div className='text-sm'> Style No. </div>
                                <div className='text-sm max-md:font-bold md:font-semibold'> LCN0302</div>
                            </div>

                            <div className='flex justify-between'>
                                <div className='text-sm'>Width</div>
                                <div className='text-sm max-md:font-bold md:font-semibold'> 0.7 cm (7 mm) </div>
                            </div>

                            <div className='flex justify-between'>
                                <div className='text-sm'>Necklace Lenght</div>
                                <div className='text-sm max-md:font-bold md:font-semibold text-end'>  17.25 inch <br />
                                    (438.15 mm)</div>
                            </div>

                            <div className='flex justify-between'>
                                <div className='text-sm'> Gold Weight </div>
                                <div className='text-sm max-md:font-bold md:font-semibold'> 4.87g </div>
                            </div>

                            <div className='flex justify-between'>
                                <div className='text-sm'> Gross Weight </div>
                                <div className='text-sm max-md:font-bold md:font-semibold'> 4.90g </div>
                            </div>
                        </div>
                    </div>

                    {/* price summary */}
                    <div className='lg:w-[70%] max-lg:w-full space-y-3'>
                        {/* index */}
                        <div className='bg-[#d0a88b4d] md:px-10 max-md:px-5 font-bold py-2 product-shadow'>
                            Price Breakup
                        </div>

                        <div className='md:px-10 max-md:px-5'>
                            <div className='flex justify-between'>
                                <div>
                                    Gold
                                </div>
                                <div>
                                    530.94 $
                                </div>
                            </div>
                        </div>

                        <div>
                            <hr className='border border-black' />
                        </div>

                        <div className='md:px-10 max-md:px-5'>
                            <div className='flex justify-between'>
                                <div>
                                    Diamond
                                </div>
                                <div>
                                    360.76 $
                                </div>
                            </div>
                        </div>

                        <div>
                            <hr className='border border-black' />
                        </div>

                        <div className='md:px-10 max-md:px-5'>
                            <div className='flex justify-between'>
                                <div>
                                    Making Charge
                                </div>
                                <div>
                                    190.67 $
                                </div>
                            </div>
                        </div>

                        <div>
                            <hr className='border border-black' />
                        </div>

                        <div className='md:px-10 max-md:px-5'>
                            <div className='flex justify-between'>
                                <div>
                                    GST(3%)
                                </div>
                                <div>
                                    32.47 $
                                </div>
                            </div>
                        </div>

                        <div>
                            <hr className='border border-black' />
                        </div>

                        <div className='md:px-10 max-md:px-5'>
                            <div className='flex justify-between'>
                                <div>
                                    Grand Total
                                </div>
                                <div>
                                    1114.84 $
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
        </div >
    )
}

export default ProductDetailsPage