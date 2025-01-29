import { Link, useLocation } from "react-router-dom";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { useState, useRef, useEffect } from "react";

// Import React Icons
import { LuHeart } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegUser, FaRegHeart, FaSignOutAlt } from "react-icons/fa";

import { IoMdSearch } from "react-icons/io";
import { MdOutlineInventory, MdOutlineTrackChanges } from "react-icons/md";
import { PiWarningCircleBold } from "react-icons/pi";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isLogout, setIsLogout] = useState(false);

    const menuRef = useRef(null);
    const dropdownRef = useRef(null);
    const location = useLocation();

    // toggle dropdown on click
    const toggleDropdown = () => setIsOpen(!isOpen);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const openLogout = () => setIsLogout(!isLogout)
    const closeLogout = () => setIsLogout(!isLogout)


    useEffect(() => {
        const handleClickOutside = (event) => {
            // if (menuRef.current && !menuRef.current.contains(event.target)) setIsMenuOpen(false);
            // if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsOpen(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-white md:h-[80px] z-50 md:justify-around flex items-center max-lg:py-4 text-[17px]">
            <div className="flex max-lg:justify-start items-center max-lg:w-full">
                <img src="/main-logo.svg" alt="logo" className="w-[80px] max-lg:w-[70px] border-transparent" />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex w-full">
                <li className="flex-grow w-full flex space-x-10 justify-center items-center">
                    {["/", "/CategoriePage", "/AboutUsPage", "/ServicePage", "/ContactPage"].map((path, index) => (
                        <Link key={index} to={path} className={`${isActive(path) ? "border-b-[2.39px] text-primary border-primary" : ""} pb-1`}>
                            {path === "/" ? "Home" : path.replace("/", "").replace("Page", "")}
                        </Link>
                    ))}
                </li>

                <li className="flex items-center gap-3">
                    <Link><IoMdSearch className="text-[22px]" /></Link>
                    <Link to='/WishListPage'><LuHeart className={`${isActive("/WishListPage") ? "text-primary" : ""} text-[22px]`} /></Link>
                    <Link to="/CartPage"><IoCartOutline className={`${isActive("/CartPage") ? "text-primary" : ""} text-[22px]`} /></Link>

                    <div className="relative" ref={dropdownRef} >
                        {/* User Icon */}
                        <FaRegCircleUser className={`${isOpen ? "text-primary" : ""} text-[22px] cursor-pointer`} onClick={toggleDropdown} />

                        {/* Dropdown Menu */}
                        {isOpen && (
                            <div className="absolute right-0 top-10 w-64 bg-[#b98e6d] text-black p-4 rounded-lg shadow-lg transition-opacity duration-300">
                                <div className="flex items-center space-x-3 pb-2 mb-2">
                                    <img src="/user-profile.png" alt="User" className="w-12 h-12 rounded-full" />
                                    <div>
                                        <h3 className="text-md font-semibold">James Johnson</h3>
                                        <p className="text-sm text-secondary">james09@gmail.com</p>
                                    </div>
                                </div>
                                <ul className="space-y-3 px-5">
                                    <li>
                                        <Link to='/ProfilePage'>
                                            <button className="flex items-center space-x-2 cursor-pointer hover:text-white">
                                                <FaRegUser />
                                                <span>My Profile</span>
                                            </button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/MyOrderPage'>
                                            <button className="flex items-center space-x-2 cursor-pointer hover:text-white">
                                                <MdOutlineInventory />
                                                <span>My Order</span>
                                            </button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/WishListPage'>
                                            <button className="flex items-center space-x-2 cursor-pointer hover:text-white">
                                                <FaRegHeart />
                                                <span>My Wishlist</span>
                                            </button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/OrderTrackingPage'>
                                            <button className="flex items-center space-x-2 cursor-pointer hover:text-white">
                                                <MdOutlineTrackChanges />
                                                <span>Order Tracking</span>
                                            </button>
                                        </Link>
                                    </li>
                                    <li>
                                        <button className="flex items-center space-x-2 cursor-pointer hover:text-white"
                                            onClick={openLogout}><FaSignOutAlt />
                                            <span>Log Out</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </li>
            </ul>

            {/* Mobile Menu */}
            <div className="lg:hidden flex items-center gap-5 text-[35px] absolute right-[15px]" ref={menuRef}>
                <p className="flex items-center space-x-5">
                    <Link to='/WishListPage'><LuHeart className={`${isActive("/WishListPage") ? "text-primary" : ""} w-[25px]`} /></Link>
                    <Link to="/CartPage"><IoCartOutline className={`${isActive("/CartPage") ? "text-primary" : ""} w-[28px]`} /></Link>

                    <div className="relative" ref={dropdownRef} >
                        <FaRegCircleUser className={`${isOpen ? "text-primary" : ""} text-[25px] cursor-pointer`} onClick={toggleDropdown} />

                        {isOpen && (
                            <div className="absolute right-[-50px] Karla top-10 w-64 bg-[#b98e6d] text-secondary p-4 rounded-lg shadow-lg transition-opacity duration-300">
                                <div className="flex items-center space-x-3 pb-2 mb-2">
                                    <img src="/user-profile.png" alt="User" className="w-12 h-12 rounded-full" />
                                    <div>
                                        <h3 className="text-[16px] text-secondary font-semibold">James Johnson</h3>
                                        <p className="text-[14px] text-gray-700">james09@gmail.com</p>
                                    </div>
                                </div>
                                <ul className="space-y-3 text-[18px] px-5">
                                    <li>
                                        <Link to='/ProfilePage'>
                                            <button className="flex items-center space-x-2 cursor-pointer hover:text-white">
                                                <FaRegUser />
                                                <span>My Profile</span>
                                            </button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/MyOrderPage'>
                                            <button className="flex items-center space-x-2 cursor-pointer hover:text-white">
                                                <MdOutlineInventory />
                                                <span>My Order</span>
                                            </button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/WishListPage'>
                                            <button className="flex items-center space-x-2 cursor-pointer hover:text-white">
                                                <FaRegHeart />
                                                <span>My Wishlist</span>
                                            </button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/OrderTrackingPage'>
                                            <button className="flex items-center space-x-2 cursor-pointer hover:text-white">
                                                <MdOutlineTrackChanges />
                                                <span>Order Tracking</span>
                                            </button>
                                        </Link>
                                    </li>
                                    <li>
                                        <button className="flex items-center space-x-2 cursor-pointer hover:text-white" onClick={openLogout}>
                                            <FaSignOutAlt />
                                            <span>Log Out</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </p>
                <button className="ml-auto" onClick={toggleMenu}>
                    <HiOutlineBars3BottomRight className="text-[30px]" />
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-[80px] h-[800px] right-0 w-[80%] md:w-[50%] bg-white shadow-lg p-4 lg:hidden">
                    <ul className="flex flex-col space-y-4">
                        {["/", "/CategoriePage", "/AboutUsPage", "/ServicePage", "/ContactPage"].map((path, index) => (
                            <Link key={index} to={path} className={`${isActive(path) ? " underline underline-offset-[5px] text-primary border-primary" : ""} pb-1 text-center`}>
                                {path === "/" ? "Home" : path.replace("/", "").replace("Page", "")}
                            </Link>
                        ))}
                    </ul>
                </div>
            )}

            {/* logout model */}
            {
                isLogout && (
                    <div className=" fixed bg-opacity-40 bg-gray-500 top-0 left-0 w-full h-full flex justify-center text-center items-center">
                        <div className="bg-white text-center w-fit flex-wrap justify-center p-4 py-8 md:p-10 space-y-5">
                            <div className="text-center mx-auto text-red-700 flex justify-center text-[100px] lg:text-[150px]">
                                <PiWarningCircleBold />
                            </div>
                            <div className="text-[32px] max-md:text-[30px] Montserrat font-[600] max-sm:text-[27px]">
                                Sure! You want to delete ?
                            </div>
                            <div className="text-[22px] max-sm:text-[22px]">
                                You won't be able to revert this!
                            </div>

                            <div className="grid grid-cols-2 gap-6 Montserrat">
                                <Link to='/LoginPage' className="w-full">
                                    <button className="border border-secondary py-[8px] w-full rounded-md">
                                        Yes, Delete It!
                                    </button>
                                </Link>
                                <button className="bg-red-700 py-[8px] text-white rounded-md"
                                    onClick={closeLogout}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </nav>
    );
};

export default Navbar;