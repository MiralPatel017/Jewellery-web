import { Link, useLocation } from "react-router-dom";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { useState, useRef, useEffect } from "react";

// like
import { LuHeart } from "react-icons/lu";
// cart
import { IoCartOutline } from "react-icons/io5";
// user profile
import { FaRegCircleUser } from "react-icons/fa6";
// search
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
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
                    <Link
                        to="/"
                        className={`${isActive("/") ? "border-b-[2.39px] text-primary border-primary" : ""
                            } pb-1`}
                    >
                        Home
                    </Link>

                    <Link
                        to="/CategoriePage"
                        className={`${isActive("/CategoriePage") ? "border-b-[2.39px] text-primary border-primary" : ""
                            } pb-1`}
                    >
                        Categories
                    </Link>

                    <Link
                        to="/AboutUsPage"
                        className={`${isActive("/AboutUsPage") ? "border-b-[2.39px] text-primary border-primary" : ""
                            } pb-1`}
                    >
                        About
                    </Link>

                    <Link
                        to="/ServicePage"
                        className={`${isActive("/ServicePage") ? "border-b-[2.39px] text-primary border-primary" : ""
                            } pb-1`}
                    >
                        Services
                    </Link>

                    <Link
                        to="/ContactPage"
                        className={`${isActive("/ContactPage") ? "border-b-[2.39px] text-primary border-primary" : ""
                            } pb-1`}
                    >
                        Contact
                    </Link>
                </li>

                <li className="flex items-center gap-3 ">
                    <Link>
                        <IoMdSearch className="text-[22px]" />
                    </Link>

                    <Link to='/WishListPage '
                    >
                        <LuHeart className={`${isActive("/WishListPage") ? "text-primary" : ""} text-[22px]`} />
                    </Link>

                    <Link to="/CartPage"
                    >
                        <IoCartOutline
                            className={`${isActive("/CartPage") ? "text-primary" : ""} text-[22px]`} />
                    </Link>

                    <Link to="/ProfilePage"
                    >
                        <FaRegCircleUser className={`${isActive("/ProfilePage") ? "text-primary" : ""} text-[21px]`} />
                    </Link>
                </li>
            </ul>

            {/* Mobile Menu */}
            <div className="lg:hidden flex items-center  gap-5 text-[35px] absolute right-[15px]">
                <p className="flex items-center space-x-5">

                    <Link to='/WishListPage '
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <LuHeart className={`${isActive("/WishListPage") ? "text-primary" : ""} w-[25px]`} />
                    </Link>

                    <Link to="/CartPage"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <IoCartOutline
                            className={`${isActive("/CartPage") ? "text-primary" : ""} w-[28px]`} />
                    </Link>

                    <Link to="/ProfilePage"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <FaRegCircleUser className={`${isActive("/ProfilePage") ? "text-primary" : ""} w-[25px]`} />
                    </Link>
                </p>
                <button
                    className="block ml-auto transition-all"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <HiOutlineBars3BottomRight className="text-[30px]" />
                </button>
            </div>

            {isMenuOpen && (
                <div className="bg-white">
                    <ul
                        className={`absolute bg-white top-[80px] z-50 bgblurenavul text-lg right-0 max-md:w-[80%] md:w-[50%] h-[700px] rounded-b-[20px] rounded-r-none flex flex-col gap-4 py-4 text-center transform transition-transform duration-700 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                            }`}
                    >
                        <li>
                            <Link
                                to="/"
                                className={`${isActive("/") ? "border-b-[2.39px] text-primary border-primary" : ""
                                    } pb-1`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/CategoriePage"
                                className={`${isActive("/CategoriePage")
                                    ? "border-b-[2.39px] text-primary border-primary"
                                    : ""
                                    } pb-1`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Categories
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/AboutUsPage"
                                className={`${isActive("/AboutUsPage")
                                    ? "border-b-[2.39px] text-primary border-primary"
                                    : ""
                                    } pb-1`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/ServicePage"
                                className={`${isActive("/ServicePage")
                                    ? "border-b-[2.39px] text-primary border-primary"
                                    : ""
                                    } pb-1`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/ContactPage"
                                className={`${isActive("/ContactPage")
                                    ? "border-b-[2.39px] text-primary border-primary"
                                    : ""
                                    } pb-1`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>

    );
};

export default Navbar;
