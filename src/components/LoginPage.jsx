import React from 'react'
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
    return (
        <div className='login-background flex justify-center align-middle items-center'>
            <div className='flex'>
                <div className='lg:flex justify-end w-[70%] rounded-l-[20px] max-lg:hidden'>
                    <img src='/loginimg.png' className='rounded-l-[20px]' />
                </div>

                <div className='bg-secondary lg:w-[70%] text-white flex justify-center items-center lg:rounded-r-[20px] max-lg:rounded-[20px] max-lg:p-5 lg:px-10 max-sm:mx-2'>
                    <div className='space-y-[30px] w-full'>
                        <div className='text-center text-[31px] font-[700] Poppins'>
                            Login
                        </div>

                        <div className='text-[20px] text-center'>
                            Enter Your Email Address to Login
                        </div>

                        <div>
                            <input type="text"
                                className='border border-white rounded-lg placeholder:text-white Montserrat bg-transparent w-full h-[50px] px-[15px]'
                                placeholder='Enter Email ID / Mobile Number'
                            />
                        </div>

                        <div>
                            <button className='text-secondary bg-white w-full h-[50px] rounded-md Montserrat'>
                                Continue with Email
                            </button>
                        </div>

                        <div className='flex justify-center items-center gap-2 Montserrat'>
                            <hr className='w-full border border-white mt-1' />
                            or
                            <hr className='w-full border border-white mt-1' />
                        </div>

                        <div>
                            <button className='flex text-secondary bg-white w-full h-[50px] Montserrat rounded-md justify-center items-center gap-3'>
                                <FcGoogle className='text-[24px]' />
                                Continue with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage