import React from 'react'
import NavPage from './NavPage'
import FooterPage from './FooterPage'

const MyOrderPage = () => {

    const [activeSection, setActiveSection] = React.useState('onShipping');

    const handleButtonClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div>
            {/* navbar */}
            <div className="shadow-md bg-white w-full fixed top-0 z-50">
                <div className='container'>
                    <NavPage />
                </div>
            </div>

            {/* main container */}
            <div className='container mt-[160px]'>

                {/* title */}
                <div className='titlestyle text-secondary Montserrat max-md:text-3xl max-md:text-center'>
                    My Order
                </div>

                {/* three button div */}
                <div className='mt-7 bg-[#F5F5F5] p-2'>
                    <div className='flex gap-5 max-md:text-[14px] max-sm:gap-3 max-md:justify-center max-md:py-5'>

                        {/* Shipping button */}
                        <button
                            className={`border w-[200px] max-sm:text-xs text-[14px] py-[8px] duration-300 Montserrat ${activeSection === 'onShipping' ? 'bg-secondary text-white' : ' border-secondary'}`}
                            onClick={() => handleButtonClick('onShipping')}>
                            On Shipping
                        </button>

                        {/* completed button */}
                        <button
                            className={`border w-[200px] max-sm:text-xs text-[14px] py-[8px] duration-300 Montserrat ${activeSection === 'completed' ? 'bg-secondary text-white' : 'border-secondary'}`}
                            onClick={() => handleButtonClick('completed')}>
                            Completed
                        </button>

                        {/* canceled button */}
                        <button
                            className={`border max-sm:text-xs w-[200px] text-[14px] py-[8px] duration-300 Montserrat ${activeSection === 'canceled' ? 'bg-secondary text-white' : 'border-secondary'}`}
                            onClick={() => handleButtonClick('canceled')}>
                            Canceled
                        </button>
                    </div>
                </div>

                {/* order details section */}
                <div className='mt-7'>

                    {/* on shoppring product details section */}
                    {activeSection === 'onShipping' && (
                        <div className='mt-5 space-y-5'>

                            {/* first product */}
                            <div className='flex md:gap-7 Karla max-md:gap-5 w-full'>
                                {/* image */}
                                <div className='w-auto flex items-center max-md:w-[25%]'>
                                    <div className='border p-1 border-black'>
                                        <img src="product-1.svg" alt="" className='border-1 w-[100px] border-black' />
                                    </div>
                                </div>

                                {/* product details */}
                                <div className='md:w-[80%] max-md:w-[75%]'>

                                    {/* product name */}
                                    <div className='font-medium max-md:text-xs md:mb-5 max-md:mb-4 text-lg text-nowrap line-clamp-1'>
                                        Annalise Layered Diamond Necklace
                                    </div>

                                    {/* Purity, Qty and price */}
                                    <div className='flex'>

                                        {/* Purity & Qty */}
                                        <div className='w-[80%] md:space-y-3 max-md:space-y-1 max-md:text-xs'>

                                            {/* Purity  */}
                                            <p className='gap-1 flex text-nowrap line-clamp-1'>
                                                Purity :
                                                <p className='opacity-55 text-nowrap line-clamp-1'>
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

                                        {/* price */}
                                        <div className='w-[20%]'>
                                            <p className='text-end max-md:text-sm max-md:font-bold font-semibold text-nowrap'>
                                                548.3 $
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* hr */}
                            <div>
                                <hr className='border border-gray-300 w-full' />
                            </div>

                            {/* second product */}
                            <div className='flex md:gap-7 Karla max-md:gap-5 w-full'>
                                {/* image */}
                                <div className='w-auto flex items-center max-md:w-[25%]'>
                                    <div className='border p-1 border-black'>
                                        <img src="product-2.svg" alt="" className='border-1 w-[100px] border-black' />
                                    </div>
                                </div>

                                {/* product details */}
                                <div className='md:w-[80%] max-md:w-[75%]'>

                                    {/* product name */}
                                    <div className='font-medium max-md:text-xs md:mb-5 max-md:mb-4 text-lg text-nowrap line-clamp-1'>
                                        Beats Of Heart Diamond Band Ring
                                    </div>

                                    {/* Purity, Qty and price */}
                                    <div className='flex'>

                                        {/* Purity & Qty */}
                                        <div className='w-[80%] md:space-y-3 max-md:space-y-1 max-md:text-xs'>

                                            {/* Purity  */}
                                            <p className='gap-1 flex text-nowrap line-clamp-1'>
                                                Purity :
                                                <p className='opacity-55 text-nowrap line-clamp-1'>
                                                    14K Gold and Diamod
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

                                        {/* price */}
                                        <div className='w-[20%]'>
                                            <p className='text-end max-md:text-sm max-md:font-bold font-semibold text-nowrap'>
                                                468.8 $
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}

                    {/* Completed product details section */}
                    {activeSection === 'completed' && (
                        <div className='mt-5 space-y-5'>

                            {/* first product */}
                            <div className='flex md:gap-7 Karla max-md:gap-5 w-full'>

                                {/* right image */}
                                <div className='flex items-center'>
                                    <img src="/right.png" alt="" />
                                </div>

                                {/* image */}
                                <div className='w-auto flex items-center max-md:w-[25%]'>
                                    <div className='border p-1 border-black'>
                                        <img src="product-1.svg" alt="" className='border-1 w-[100px] border-black' />
                                    </div>
                                </div>

                                {/* product details */}
                                <div className='md:w-[80%] max-md:w-[75%]'>

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

                                        {/* price */}
                                        <div className='w-[20%] max-md:w-[50px]'>
                                            <p className='text-end max-md:text-sm max-md:font-bold font-semibold text-nowrap'>
                                                548.3 $
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* hr */}
                            <div>
                                <hr className='border border-gray-300 w-full' />
                            </div>

                            {/* second product */}
                            <div className='flex md:gap-7 Karla max-md:gap-5 max-sm:gap-3 w-full'>

                                {/* right image */}
                                <div className='flex items-center'>
                                    <img src="/right.png" alt="" />
                                </div>

                                {/* image */}
                                <div className='w-auto flex items-center max-md:w-[25%]'>
                                    <div className='border p-1 border-black'>
                                        <img src="product-2.svg" alt="" className='border-1 w-[100px] border-black' />
                                    </div>
                                </div>

                                {/* product details */}
                                <div className='md:w-[80%] max-md:w-[75%]'>

                                    {/* product name */}
                                    <div className='font-medium max-md:text-xs md:mb-5 max-md:mb-4 text-lg line-clamp-1'>
                                        Beats Of Heart Diamond Band Ring
                                    </div>

                                    {/* Purity, Qty and price */}
                                    <div className='flex'>

                                        {/* Purity & Qty */}
                                        <div className='w-[80%] md:space-y-3 max-md:space-y-1 max-md:text-xs'>

                                            {/* Purity  */}
                                            <p className='gap-1 flex line-clamp-1'>
                                                Purity :
                                                <span className='opacity-55'>
                                                    14K Gold and Diamod
                                                </span>
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

                                        {/* price */}
                                        <div className='w-[20%] max-md:w-[50px]'>
                                            <p className='text-end max-md:text-sm max-md:font-bold font-semibold text-nowrap'>
                                                468.8 $
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Canceled products details section */}
                    {activeSection === 'canceled' && (
                        <div className='mt-5 space-y-5'>

                            {/* first product */}
                            <div className='flex md:gap-7 Karla max-md:gap-5 w-full'>

                                {/* right image */}
                                <div className='flex-wrap justify-center my-auto w-fit space-y-2'>
                                    <img src="/wrong.png" alt="" className='mx-auto max-sm:w-6' />
                                    <p className='text-red-500 max-md:text-xs'>
                                        Canceled
                                    </p>
                                </div>

                                {/* image */}
                                <div className='w-auto flex items-center max-md:w-[25%]'>
                                    <div className='border p-1 border-black'>
                                        <img src="product-1.svg" alt="" className='border-1 w-[100px] border-black' />
                                    </div>
                                </div>

                                {/* product details */}
                                <div className='md:w-[80%] max-md:w-[75%]'>

                                    {/* product name */}
                                    <div className='font-medium max-md:text-xs md:mb-5 max-md:mb-4 text-lg line-clamp-1'>
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

                                        {/* price */}
                                        <div className='w-[20%] max-md:w-[50px]'>
                                            <p className='text-end max-md:text-sm max-md:font-bold font-semibold text-nowrap'>
                                                548.3 $
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* hr */}
                            <div>
                                <hr className='border border-gray-300 w-full' />
                            </div>

                            {/* second product */}
                            <div className='flex md:gap-7 Karla max-md:gap-5 w-full'>

                                {/* right image */}
                                <div className='flex-wrap items-center justify-center my-auto space-y-2'>
                                    <img src="/wrong.png" alt="" className='mx-auto max-md:w-6' />
                                    <p className='text-red-500 max-md:text-xs'>
                                        Canceled
                                    </p>
                                </div>

                                {/* image */}
                                <div className='w-auto flex items-center max-md:w-[25%]'>
                                    <div className='border p-1 border-black'>
                                        <img src="product-2.svg" alt="" className='border-1 w-[100px] border-black' />
                                    </div>
                                </div>

                                {/* product details */}
                                <div className='md:w-[80%] max-md:w-[75%]'>

                                    {/* product name */}
                                    <div className='font-medium max-md:text-xs md:mb-5 max-md:mb-4 text-lg line-clamp-1'>
                                        Beats Of Heart Diamond Band Ring
                                    </div>

                                    {/* Purity, Qty and price */}
                                    <div className='flex'>

                                        {/* Purity & Qty */}
                                        <div className='w-[80%] md:space-y-3 max-md:space-y-1 max-md:text-xs'>

                                            {/* Purity  */}
                                            <p className='gap-1 flex'>
                                                Purity :
                                                <p className='opacity-55'>
                                                    14K Gold and Diamod
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

                                        {/* price */}
                                        <div className='w-[20%] max-md:w-[50px]'>
                                            <p className='text-end max-md:text-sm max-md:font-bold font-semibold text-nowrap'>
                                                468.8 $
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* footer */}
            <div className='mt-[50px]'>
                <FooterPage />
            </div>
        </div>
    )
}

export default MyOrderPage