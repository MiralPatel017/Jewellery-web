import React from 'react'
import Navbar from './NavPage'
import FooterPage from './FooterPage'

const ProfilePage = () => {
    return (
        <div>

            {/* navbar */}
            <div className="shadow-md bg-white w-full fixed top-0 z-50">
                <div className='container'>
                    <Navbar />
                </div>
            </div>

            {/* main container */}
            <div className='profile-main-container mt-[80px]'>
                <div className='md:px-[100px] md:flex justify-between max-md:flex-wrap max-md:text-center max-md:my-auto items-center h-full'>

                    {/* left side */}
                    <div className='max-md:pt-8'>
                        <p className='text-white text-[25px] max-md:text-[20px] Karla'>
                            Chrishmus Offer
                        </p>
                        <p className='text-primary text-[40px] Marcellus max-md:text-[30px] Marcellus'>
                            COMING SOON
                        </p>
                    </div>

                    {/* right side */}
                    <div className='md:leading-[32px]'>
                        <p className='text-white text-[20px] Karla'>
                            Get
                        </p>
                        <p className='text-primary text-[50px] Marcellus max-md:text-[40px]'>
                            30% OFF
                        </p>
                        <p className='text-white md:pl-[85px] text-[20px] Karla'>
                            On any Ring
                        </p>
                    </div>
                </div>
            </div>

            {/* profile form */}
            <div className='container mt-[50px]'>
                {/* title */}
                <div className='text-[36px] font-[500] Karla'>
                    Edit Profile
                </div>

                {/* profile form */}
                <div className='space-y-[]'>

                    {/* profile photo, First name, Last name, Mobile number, and Email Id */}
                    <div className='flex max-lg:flex-col gap-5 mt-5 max-lg:gap-y-4'>

                        {/* Profile Photo */}
                        <div className='lg:w-[10%] my-auto max-lg:justify-center max-lg:flex' >
                            <img src="user-profile-img.svg" alt="" className='lg:w-full max-lg:w-[100px]' />
                        </div>

                        <div className='lg:w-[90%] space-y-4'>

                            {/* first and last name */}
                            <div className='gap-5 flex max-md:flex-wrap'>
                                {/* first name */}
                                <div className="w-full">
                                    <label className="block text-sm font-[500] Karla" htmlFor="firstName">
                                        First Name*
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="w-full border  p-2 bg-[#BE9A8073] placeholder:text-secondary Karla"
                                        placeholder="First Name"
                                    />
                                </div>

                                {/* last name */}
                                <div className="w-full">
                                    <label className="block text-sm font-[500] Karla" htmlFor="lastName">
                                        Last Name*
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="w-full border Karla p-2 bg-[#BE9A8073] placeholder:text-secondary"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>

                            {/* mobile no and email id */}
                            <div className='flex max-md:flex-wrap gap-5'>
                                {/* mobile number */}
                                <div className="w-full">
                                    <label className="block text-sm font-[500] Karla" htmlFor="mobile">
                                        Mobile No.
                                    </label>
                                    <div className="flex">
                                        <span className="inline-flex items-center bg-[#BE9A8073] Karla border-1 border-r-0 px-2">
                                            +91
                                        </span>
                                        <input
                                            type="text"
                                            id="mobile"
                                            className="w-full border border-l-0 p-2 bg-[#BE9A8073] Karla placeholder:text-secondary"
                                            placeholder="Mobile No."
                                        />
                                    </div>
                                </div>

                                {/* email */}
                                <div className="w-full ">
                                    <label className="block text-sm font-[500] Karla " htmlFor="email">
                                        Email ID
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full border Karla p-2 bg-[#BE9A8073] placeholder:text-secondary"
                                        placeholder="Email Address"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* gender, DOB and Anniversary Date */}
                    <div className='grid grid-cols-3 max-md:grid-cols-1 pt-4 gap-5 max-lg:gap-3'>

                        {/* gender */}
                        <div className="w-full ">
                            <label className="block text-sm font-[500] Karla " htmlFor="gender">
                                Gender
                            </label>
                            <select
                                id="gender"
                                className="w-full border Karla p-2 h-[41.6px] bg-[#BE9A8073] placeholder:text-secondary"
                            >
                                <option value="" className='Karla'>Select Gender</option>
                                <option value="male" className='Karla'>Male</option>
                                <option value="female" className='Karla'>Female</option>
                                <option value="other" className='Karla'>Other</option>
                            </select>
                        </div>

                        {/* DOB */}
                        <div className="w-full ">
                            <label className="block text-sm font-[500] Karla " htmlFor="dob">
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                id="dob"
                                className="w-full border  p-2 bg-[#BE9A8073] h-[41.6px] placeholder:text-secondary Karla "
                            />
                        </div>

                        {/* Anniversary Date */}
                        <div className="w-full ">
                            <label className="block text-sm font-[500] Karla" htmlFor="anniversary">
                                Anniversary Date
                            </label>
                            <input
                                type="date"
                                id="anniversary"
                                className="w-full border Karla p-2 h-[41.6px] bg-[#BE9A8073] placeholder:text-secondary"
                                placeholder='Anniversary Date'
                            />
                        </div>
                    </div>

                    {/* Address, city and state */}
                    <div className='grid grid-cols-3 max-md:grid-cols-1 pt-4 gap-5 max-lg:gap-3'>
                        {/* address */}
                        <div className="w-full">
                            <label className="block text-sm font-[500] Karla" htmlFor="address">
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                className="w-full border Karla p-2 bg-[#BE9A8073] placeholder:text-secondary"
                                placeholder='Address'
                            />
                        </div>

                        {/* city */}
                        <div className="w-full">
                            <label className="block text-sm font-[500] Karla" htmlFor="city">
                                City
                            </label>
                            <input
                                type="text"
                                id="city"
                                className="w-full border Karla p-2 bg-[#BE9A8073] text-secondary placeholder:text-secondary"
                                placeholder='City'
                            />
                        </div>

                        {/* state */}
                        <div className="w-full">
                            <label className="block text-sm font-[500] Karla" htmlFor="state">
                                State
                            </label>
                            <input
                                type="text"
                                id="state"
                                className="w-full border Karla p-2 bg-[#BE9A8073] text-secondary placeholder:text-secondary"
                                placeholder='State'
                            />
                        </div>
                    </div>

                    {/* pincode */}
                    <div className='grid grid-cols-3 pt-5 max-md:grid-cols-1 gap-5 max-lg:gap-3'>
                        <div className="w-full">
                            <label className="block text-sm font-[500] Karla" htmlFor="pincode">
                                Pincode
                            </label>
                            <input
                                type="number"
                                id="pincode"
                                className="w-full border Karla p-2 bg-[#BE9A8073] placeholder:text-secondary"
                                placeholder='Pincode'
                            />
                        </div>
                    </div>

                    {/* submit */}
                    <div className='grid grid-cols-3 max-md:grid-cols-1 pt-5 gap-5 max-lg:gap-3'>
                        <div className='lg:w-2/3 max-md:w-2/3'>
                            <button
                                className="bg-primary hover:bg-secondary w-full Karla hover:text-primary border hover:border-primary p-1 py-2 Karla px-12 font-[500] duration-300"
                            >
                                Save Profile
                            </button>
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

export default ProfilePage