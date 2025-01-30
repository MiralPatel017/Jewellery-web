import React from 'react'
import Navbar from './NavPage'
import FooterPage from './FooterPage';
import { Link } from 'react-router-dom';
// navigate import
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {

    const navigate = useNavigate();
    const handleForved = () => {
        navigate('/ThankYouPage');

        // setPaymentMethod(selectedOption)

    }
    const [selectedOptionAddr, setSelectedOptionAddr] = React.useState("same");
    const [selectedOption, setSelectedOption] = React.useState('Credit Card');
    return (
        <div>
            {/* navbar */}
            <div className="shadow-md bg-white w-full fixed top-0 z-50">
                <div className='container'>
                    <Navbar />
                </div>
            </div>

            {/* main container */}

            <div className='container mt-[160px]'>

                {/* title */}
                <div className='titlestyle max-md:text-center max-md:font-[600] Montserrat'>
                    Billing Details
                </div>

                {/* flex div */}
                <div className='flex max-lg:flex-wrap-reverse max-md:gap-5 md:gap-8 mt-8'>

                    {/* product details div */}
                    <div className='w-[70%] max-lg:w-full'>

                        {/* form */}
                        <form className=''>

                            {/* personal details */}
                            <div className='space-y-5'>

                                {/* first and last name */}
                                <div className='grid grid-cols-2 max-md:grid-cols-1 gap-5'>

                                    {/* first name */}
                                    <div className=''>
                                        <input type="text"
                                            className='border border-gray-800 px-4 placeholder:text-gray-700 py-2 w-full Karla'
                                            placeholder='First Name*'
                                            required
                                        />
                                    </div>

                                    {/* last name */}
                                    <div>
                                        <input type="text"
                                            className='border border-gray-800 px-4 placeholder:text-gray-700 py-2 w-full Karla'
                                            placeholder='Last Name*'
                                            required
                                        />
                                    </div>
                                </div>

                                {/* phone number and Street Address */}
                                <div className='grid grid-cols-2 max-md:grid-cols-1 gap-5'>

                                    {/* Phone number */}
                                    <div className=''>
                                        <input type="number"
                                            className='border border-gray-800 px-4 placeholder:text-gray-700 py-2 w-full Karla'
                                            placeholder='Phone Number*'
                                            required
                                        />
                                    </div>

                                    {/* Street Address */}
                                    <div>
                                        <input type="text"
                                            className='border border-gray-800 px-4 placeholder:text-gray-700 py-2 w-full Karla'
                                            placeholder='Street Address*'
                                            required
                                        />
                                    </div>
                                </div>

                                {/* City, State, and Zip Code  */}
                                <div className='grid grid-cols-3 max-md:grid-cols-2 gap-5 max-sm:grid-cols-1'>

                                    {/* City */}
                                    <div>
                                        <input type="text"
                                            className='border border-gray-800 px-4 placeholder:text-gray-700 py-2 w-full Karla'
                                            placeholder='City*'
                                            required
                                        />
                                    </div>

                                    {/* State */}
                                    <div>
                                        <input type="text"
                                            className='border border-gray-800 px-4 placeholder:text-gray-700 py-2 w-full Karla'
                                            placeholder='State*'
                                            required
                                        />
                                    </div>

                                    {/* Zip code */}
                                    <div>
                                        <input type="number"
                                            className='border border-gray-800 px-4 placeholder:text-gray-700 py-2 w-full Karla'
                                            placeholder='Zip Code*'
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Continue To Delivery button */}
                                <div className='max-md:w-full max-md:flex max-md:justify-center'>
                                    <Link to='/ThankYouPage'>
                                        <button
                                            className=' text-secondary hover:text-white hover:bg-secondary border border-secondary px-[70px] py-2 font-semibold duration-300 max-sm:text-sm Karla'
                                            type='submit'>
                                            Continue To Delivery
                                        </button>
                                    </Link>
                                </div>

                                {/* chackbox */}
                                <div className='flex gap-1 items-center'>
                                    <input type="checkbox" name="" id=""
                                        className='accent-secondary md:pt-1' />
                                    <label className='text-gray-700 text-sm ml-2 Karla'>
                                        Save my information for a faster checkout
                                    </label>
                                </div>

                                {/* hr */}
                                <div className='pt-8'>
                                    <hr className='w-full border border-gray-300 ' />
                                </div>

                                {/* shopping address */}
                                <div className='mt-5 space-y-5'>

                                    {/* title */}
                                    <div className='text-[30px] font-[600] Montserrat max-md:text-center text-secondary'>
                                        Shipping Address
                                    </div>

                                    {/* text */}
                                    <div className='Karla'>
                                        Select the address that matches your card or payment method.
                                    </div>

                                    {/* select address */}
                                    <div className="bg-[#BEBCBD] p-4 lg:px-12 text-[#3C4242x] Karla w-full">
                                        <div className="space-y-3">
                                            <label className="flex items-center space-x-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="shipping"
                                                    value="same"
                                                    checked={selectedOptionAddr === "same"}
                                                    onChange={() => setSelectedOptionAddr("same")}
                                                    className="w-4 h-4 accent-[#2C3E50]"
                                                />
                                                <span className="text-gray-900">Same as Billing address</span>
                                            </label>
                                            <hr className="border-gray-400" />
                                            <label className="flex items-center space-x-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="shipping"
                                                    value="different"
                                                    checked={selectedOptionAddr === "different"}
                                                    onChange={() => setSelectedOptionAddr("different")}
                                                    className="w-4 h-4 accent-[#2C3E50]"
                                                />
                                                <span className="text-gray-900">Use a different shipping address</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* payment method */}
                                    <div className='bg-[#F5F5F5] lg:px-12 lg:py-8 md:px-10 md:py-8 max-md:p-5'>
                                        <div className="">
                                            <h2 className="text-xl font-[600] mb-4 Montserrat">Payment Method</h2>
                                            <form>
                                                {/* Credit Card Option */}
                                                <div className="my-4 space-y-5">

                                                    <label className="flex items-center mb-2 cursor-pointer">
                                                        <input
                                                            type="radio"
                                                            name="payment"
                                                            value="Credit Card"
                                                            checked={selectedOption === 'Credit Card'}
                                                            onChange={() => setSelectedOption('Credit Card')}
                                                            className="mr-2 accent-[#807D7E] Karla"
                                                        />
                                                        <span className="font-medium">Credit Card</span>
                                                    </label>

                                                    {/* card details */}
                                                    {selectedOption === 'Credit Card' && (
                                                        <div className="ml-6 space-y-5" >

                                                            <p className="text-sm text-gray-500 mb-2">We accept all major credit cards.</p>

                                                            {/* card image */}
                                                            <div className="grid grid-cols-4 max-md:grid-cols-2 md:space-x-2 max-md:gap-5 mb-2">
                                                                <img src="/gpay.svg" alt="Google Pay" className="h-14 max-md:mx-auto" />
                                                                <img src="/visa.svg" alt="Visa" className="h-14 max-md:mx-auto" />
                                                                <img src="/paypal.svg" alt="PayPal" className="h-14 max-md:mx-auto" />
                                                                <img src="/paypass.svg" alt="PayPass" className="h-14 max-md:mx-auto" />
                                                            </div>

                                                            {/* card details input/form */}
                                                            <div className='grid grid-cols-2 max-md:grid-cols-1 gap-5'>

                                                                {/* card number */}
                                                                <input
                                                                    type="number"
                                                                    placeholder="Card Number"
                                                                    className="w-full p-2 border border-gray-600 placeholder:text-gray-600 Karla"
                                                                />

                                                                {/* card name */}
                                                                <input
                                                                    type="text"
                                                                    placeholder="Card Name"
                                                                    className="w-full p-2 border border-gray-600 placeholder:text-gray-600 Karla"
                                                                />

                                                                {/* Expiry date */}
                                                                <input
                                                                    type="text"
                                                                    placeholder="Expiry Date (MM/YY)"
                                                                    className="w-full p-2 border border-gray-600 placeholder:text-gray-600 Karla"
                                                                />

                                                                {/* cvv code */}
                                                                <input
                                                                    type="text"
                                                                    placeholder="CVV Code"
                                                                    className="w-full p-2 border border-gray-600 placeholder:text-gray-600 Karla"
                                                                />
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                                <div>
                                                    <hr />
                                                </div>

                                                {/* Cash on Delivery Option */}
                                                <div className="my-4">
                                                    <label className="flex items-center cursor-pointer">
                                                        <input
                                                            type="radio"
                                                            name="payment"
                                                            value="Cash on Delivery"
                                                            checked={selectedOption === 'Cash on Delivery'}
                                                            onChange={() => setSelectedOption('Cash on Delivery')}
                                                            className="mr-2 accent-[#807D7E] Karla"
                                                        />
                                                        <span className="font-medium Karla">Cash on delivery</span>
                                                    </label>
                                                    {selectedOption === 'Cash on Delivery' && (
                                                        <p className="ml-6 text-sm text-gray-500 Karla">Pay with cash upon delivery.</p>
                                                    )}
                                                </div>

                                                <div>
                                                    <hr />
                                                </div>

                                                {/* PayPal Option */}
                                                <div className="mt-4">
                                                    <label className="flex items-center cursor-pointer">
                                                        <input
                                                            type="radio"
                                                            name="payment"
                                                            value="PayPal"
                                                            checked={selectedOption === 'PayPal'}
                                                            onChange={() => setSelectedOption('PayPal')}
                                                            className="mr-2 accent-[#807D7E] Karla"
                                                        />
                                                        <span className="font-medium Karla">PayPal</span>
                                                    </label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    {/* pay button */}
                                    <div className=' max-md:flex max-md:justify-center'>
                                        {/* <Link to='/ThankYouPage'> */}
                                        <button
                                            className="bg-primary hover:bg-secondary text-secondary hover:text-primary duration-300 px-[20px] py-1 font-[500] Montserrat border border-secondary"
                                            onClick={() =>
                                                handleForved
                                            }
                                        >
                                            Pay Now
                                        </button>
                                        {/* </Link> */}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* book summary div */}
                    <div className='w-[30%] max-lg:w-full max-lg:mt-5'>
                        <div className='bg-[#F5F5F5] pb-5'>

                            {/* title */}
                            <div className='p-5 lg:text-xl max-lg:text-2xl font-[600] Montserrat    '>
                                Book Summary
                            </div>

                            {/* hr */}
                            <div>
                                <hr className='border border-gray-300' />
                            </div>

                            {/* products */}
                            <div className=''>
                                {/* first product */}
                                <div className='mt-5 flex px-5 gap-2 items-center'>
                                    {/* product image */}
                                    <div className="w-1/4 max-lg:p-[20px] max-md:p-0">
                                        <img
                                            src='/product-1.svg'
                                            alt="book image"
                                            className="object-cover border border-primary"
                                        />
                                    </div>
                                    {/* product name */}
                                    <div className="w-1/2">
                                        <span className='line-clamp-1 Karla font-[500]'> Annalise Layered Diamond Necklace</span>
                                        {/* <br /> */}
                                        <span className='line-clamp-1 text-xs text-gray-400 Karla'> Purity : 14K Gold</span>
                                    </div>

                                    {/* product price */}
                                    <div className="w-1/4 text-end max-lg:text-xl xl:text-lg max-xl:text-sm font-[700] Karla text-nowrap max-sm:text-base">
                                        548.3 $
                                    </div>
                                </div>

                                {/* second product */}
                                <div className='mt-5 flex px-5 gap-2 items-center'>
                                    {/* product image */}
                                    <div className="w-1/4 max-lg:p-[20px] max-md:p-0">
                                        <img
                                            src='/product-2.svg'
                                            alt="book image"
                                            className="object-cover border border-primary"
                                        />
                                    </div>
                                    {/* product name */}
                                    <div className="w-1/2">
                                        <span className='line-clamp-1 Karla font-[500]'> Beats Of Heart Diamond Band Ring </span>
                                        {/* <br /> */}
                                        <span className='line-clamp-1 text-xs text-gray-400 Karla'> Purity : 14K Gold</span>
                                    </div>

                                    {/* product price */}
                                    <div className="w-1/4 text-end max-lg:text-xl xl:text-lg max-xl:text-sm font-bold text-nowrap Karla max-sm:text-base">
                                        468.8 $
                                    </div>
                                </div>
                            </div>

                            {/* hr */}
                            <div className=' max-md:mt-5 lg:mt-5'>
                                <hr className='border border-gray-300' />
                            </div>

                            {/* Subtotal and Discount */}
                            <div className='mt-5 px-5 space-y-5'>

                                {/* subtotal  */}
                                <div className='flex justify-between'>
                                    <div className='font-[600] text-gray-600 Karla'>
                                        Subtotal
                                    </div>
                                    <div className='text-end max-lg:text-xl xl:text-lg max-xl:text-sm font-[700] text-nowrap max-sm:text-base Karla'>
                                        1012.6 $
                                    </div>
                                </div>

                                {/* discount */}
                                <div className='flex justify-between'>
                                    <div className='font-semibold text-gray-600'>
                                        Discount (4%)
                                    </div>
                                    <div className='text-end max-lg:text-xl xl:text-lg max-xl:text-sm font-[700] Karla text-red-500 text-nowrap max-sm:text-base'>
                                        30 $
                                    </div>
                                </div>
                            </div>

                            {/* hr */}
                            <div className='mt-5'>
                                <hr className='border border-gray-300' />
                            </div>

                            {/* totle */}
                            <div className='mt-5 px-5'>
                                <div className='flex justify-between'>
                                    <div className='font-[500] text-gray-600 Karla'>
                                        Total
                                    </div>
                                    <div className='text-end max-lg:text-xl xl:text-lg max-xl:text-sm font-[700] text-nowrap max-sm:text-base Karla'>
                                        984.6 $
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer */}
            <div className=' mt-[50px]'>
                <FooterPage />
            </div>
        </div>
    )
}

export default PaymentPage