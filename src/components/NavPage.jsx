import { Link, useLocation } from "react-router-dom";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { useState, useRef, useEffect } from "react";

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
        <nav className="bg-white w-full md:h-[80px] py-[10px] lg:mt-5 md:justify-around flex items-center lg:px-4">
            <div className="flex max-lg:justify-start items-center max-lg:w-full">
                <img src="/main-logo.svg" alt="logo" className="w-[80px] max-lg:w-[70px] border-transparent" />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex w-full">
                <li className="flex-grow w-full flex space-x-10 justify-center items-center">
                    <Link
                        to="/"
                        className={`${isActive("/") ? "border-b-[2.39px] font-bold border-primary" : ""
                            } pb-1`}
                    >
                        Home
                    </Link>

                    <Link
                        to="/CategoriePage"
                        className={`${isActive("/CategoriePage") ? "border-b-[2.39px] font-bold border-primary" : ""
                            } pb-1`}
                    >
                        Categories
                    </Link>

                    <Link
                        to="/AboutUsPage"
                        className={`${isActive("/AboutUsPage") ? "border-b-[2.39px] font-bold border-primary" : ""
                            } pb-1`}
                    >
                        About
                    </Link>

                    <Link
                        to="/ServicePage"
                        className={`${isActive("/ServicePage") ? "border-b-[2.39px] font-bold border-primary" : ""
                            } pb-1`}
                    >
                        Services
                    </Link>
                    
                    <Link
                        to="/ContactPage"
                        className={`${isActive("/ContactPage") ? "border-b-[2.39px] font-bold border-primary" : ""
                            } pb-1`}
                    >
                        Contact
                    </Link>
                </li>
                <li className="flex items-center space-x-5">
                    <Link>
                        <img src="/search.svg" className="w-[22px]" />
                    </Link>

                    <Link to='/WishListPage'>
                        <img src="/like.svg" className="w-[22px]" />
                    </Link>

                    <Link to="/CartPage">
                        <img src="/cart.svg" className="w-[22px]" />
                    </Link>

                    <Link to="/ProfilePage">
                        <img src="/profile.png" className="w-[22px]" />
                    </Link>
                </li>
            </ul>

            {/* Mobile Menu */}
            <div className="lg:hidden flex items-center  gap-5 text-[35px] absolute right-[15px]">
                <p className="flex items-center space-x-5">
                    <Link to='/WishListPage'
                     onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <img src="/like.svg" className="w-[21px]" />
                    </Link>

                    <Link to="/CartPage"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <img src="/cart.svg" className="w-[21px]" />
                    </Link>

                    <Link to="/ProfilePage"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <img src="/profile.png" className="w-[21px]" />
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
                <div>
                    <ul
                        className={`absolute bg-stone-50 top-[70px] z-10 bgblurenavul text-lg right-0 w-[80%] h-[100%] rounded-b-[20px] rounded-r-none flex flex-col gap-4 py-4 text-center transform transition-transform duration-700 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                            }`}
                    >
                        <li>
                            <Link
                                to="/"
                                className={`${isActive("/") ? "border-b-[2.39px] font-bold border-primary" : ""
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
                                    ? "border-b-[2.39px] font-bold border-primary"
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
                                    ? "border-b-[2.39px] font-bold border-primary"
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
                                    ? "border-b-[2.39px] font-bold border-primary"
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
                                    ? "border-b-[2.39px] font-bold border-primary"
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
