import React from 'react'
import NavPage from './NavPage'
import FooterPage from './FooterPage'
import { useState } from "react";
import { Link } from 'react-router-dom'
import womenproducts from './womenproducts.json'
import { useEffect } from "react";

// slider
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const HomePage = () => {

    const categories = [
        {
            name: "Rings",
            img: "/Rings.png",
            catg: "Ring"
        },
        {
            name: "Earrings",
            img: "/Earrings.png",
            catg: "Earrings"
        },
        {
            name: "Chain",
            img: "/Chain.png",
            catg: "Necklace"
        },
        {
            name: "Neckless",
            img: "/Neckless.png",
            catg: "Necklace"
        },
        {
            name: "Bangles",
            img: "/Bangles.png",
            catg: "Bangles"
        },
        {
            name: "Bracelets",
            img: "/Bracelets.png",
            catg: "Bracelet"
        },
        {
            name: "Gifts",
            img: "/Gifts.png",
            catg: "Ring"
        },
        {
            name: "Pendants",
            img: "/Pendants.png",
            catg: "Pendants"
        },
    ]


    // Trending Jewelry Gifts section data
    const trendingJewelryGifts = [
        {
            id: 1,
            dec: "Lab Grown Diamond Pear Halo Dangle Earrings in 14K White...",
            img: "/jewelry11.png",
            img2: "/jewelry12.png",
            price: "1,550 $"
        },
        {
            id: 2,
            dec: "Solid Gold White Topaz Baguette Chain Ring",
            img: "/jewelry21.png",
            img2: "/jewelry22.png",
            price: "80.88 $"
        },
        {
            id: 3,
            dec: "Solid Gold Simple Knot Ring, Solid Gold Simple Knot Ring",
            img: "/jewelry31.png",
            img2: "/jewelry32.png",
            price: "71.20 $"
        },
        {
            id: 4,
            dec: "Lab Grown Marquise Diamond Bezel Ring in 18K Yellow Gold...",
            img: "/jewelry41.png",
            img2: "/jewelry42.png",
            price: "1,800 $"
        },
        {
            id: 5,
            dec: "Pavé Lab Grown Diamond Fashion Bangle in 14K Yellow...",
            img: "/jewelry51.png",
            img2: "/jewelry52.png",
            price: "9,550 $"
        },
        {
            id: 6,
            dec: "Solid Gold Birth Flower Necklace",
            img: "/jewelry61.png",
            img2: "/jewelry62.png",
            price: "9,550 $"
        },
        {
            id: 7,
            dec: "Lab Grown Diamond Pear Halo Dangle Earrings in 14K White...",
            img: "/jewelry71.png",
            img2: "/jewelry72.png",
            price: "1,550 $"
        },
        {
            id: 8,
            dec: "Solid Gold White Topaz Baguette Chain Ring",
            img: "/jewelry81.png",
            img2: "/jewelry82.png",
            price: "80.88 $"
        }

    ]

    // customer reviews
    const reviews = [
        {
            id: 1,
            perimg: "/person1.png",
            name: "Olivia Grace Smith",
            dec: '"I recently purchased an engagement ring from [Jewelry Website Name], and the experience was incredible. The selection of rings was stunning, and their customer service was exceptional—patient and knowledgeable with customization questions. The ring exceeded my expectations in quality and craftsmanship, and my fiancée absolutely loves it!',
            rating: 3

        },
        {
            id: 2,
            perimg: "/person2.png",
            name: "James Oliver Bennett",
            dec: 'I recently purchased a custom wedding band from Regal rediance, and the experience was flawless. The design options were impressive, and the customization process was straightforward. The ring arrived on time, and the craftsmanship was top-notch—it fits perfectly and looks stunning. Excellent service and quality—I highly recommend them!',
            rating: 4
        },
        {
            id: 3,
            perimg: "/person3.png",
            name: "Emily Jane Evans",
            dec: 'I had a fantastic experience shopping on Regal Rediance. The site was easy to navigate, with a wide selection of elegant and high-quality pieces. I was able to find the perfect necklace for a special occasion, and the checkout process was smooth. The item arrived on time, beautifully packaged, and the craftsmanship was even better than I expected. ',
            rating: 5
        },
        {
            id: 4,
            perimg: "/person1.png",
            name: "Olivia Grace Smith",
            dec: '"I recently purchased an engagement ring from [Jewelry Website Name], and the experience was incredible. The selection of rings was stunning, and their customer service was exceptional—patient and knowledgeable with customization questions. The ring exceeded my expectations in quality and craftsmanship, and my fiancée absolutely loves it!',
            rating: 3
        },
        {
            id: 5,
            perimg: "/person2.png",
            name: "James Oliver Bennett",
            dec: 'I recently purchased a custom wedding band from Regal rediance, and the experience was flawless. The design options were impressive, and the customization process was straightforward. The ring arrived on time, and the craftsmanship was top-notch—it fits perfectly and looks stunning. Excellent service and quality—I highly recommend them!',
            rating: 4
        },
        {
            id: 6,
            perimg: "/person3.png",
            name: "Emily Jane Evans",
            dec: 'I had a fantastic experience shopping on Regal Rediance. The site was easy to navigate, with a wide selection of elegant and high-quality pieces. I was able to find the perfect necklace for a special occasion, and the checkout process was smooth. The item arrived on time, beautifully packaged, and the craftsmanship was even better than I expected. ',
            rating: 1
        },
        {
            id: 7,
            perimg: "/person1.png",
            name: "Olivia Grace Smith",
            dec: '"I recently purchased an engagement ring from [Jewelry Website Name], and the experience was incredible. The selection of rings was stunning, and their customer service was exceptional—patient and knowledgeable with customization questions. The ring exceeded my expectations in quality and craftsmanship, and my fiancée absolutely loves it!',
            rating: 3
        },
        {
            id: 8,
            perimg: "/person2.png",
            name: "James Oliver Bennett",
            dec: 'I recently purchased a custom wedding band from Regal rediance, and the experience was flawless. The design options were impressive, and the customization process was straightforward. The ring arrived on time, and the craftsmanship was top-notch—it fits perfectly and looks stunning. Excellent service and quality—I highly recommend them!',
            rating: 2
        },
        {
            id: 9,
            perimg: "/person3.png",
            name: "Emily Jane Evans",
            dec: 'I had a fantastic experience shopping on Regal Rediance. The site was easy to navigate, with a wide selection of elegant and high-quality pieces. I was able to find the perfect necklace for a special occasion, and the checkout process was smooth. The item arrived on time, beautifully packaged, and the craftsmanship was even better than I expected. ',
            rating: 5
        }
    ]

    // customer reviews stars
    const renderStars = (rating) => {
        const totalStars = 5;
        const filledStars = '★'.repeat(rating);
        const emptyStars = '☆'.repeat(totalStars - rating);
        return filledStars + emptyStars;
    };

    // change image on hover
    const [hoveredItem, setHoveredItem] = useState(null);

    // like and like
    const [liked, setLiked] = React.useState(false);
    const [likedProducts, setLikedProducts] = React.useState({});
    const [regallikedProducts, setregalLikedProducts] = React.useState({});
    const [sortedProducts, setSortedProducts] = useState([]);
    const [topsortedProducts, settopSortedProducts] = useState([]);


    // like and unlike handler
    const handleLike = () => {
        setLiked(!liked);
    };

    const handleLikes = (productId) => {
        setLikedProducts((prevLikedProducts) => ({
            ...prevLikedProducts,
            [productId]: !prevLikedProducts[productId],
        }));
    };

    const regalhandleLikes = (productId) => {
        setregalLikedProducts((prevLikedProducts) => ({
            ...prevLikedProducts,
            [productId]: !prevLikedProducts[productId],
        }));
    };

    

    useEffect(() => {
        if (womenproducts?.data) {
            setSortedProducts([...womenproducts.data].sort(() => Math.random() - 0.5));
        }
    }, [womenproducts]);

    

    useEffect(() => {
        if (womenproducts?.data) {
            settopSortedProducts([...womenproducts.data].sort(() => Math.random() - 0.5));
        }
    }, [womenproducts]);

    return (
        <div>
            {/* navbar */}
            <div className='container shadow-md'>
                <NavPage />
            </div>

            {/* main container */}
            <div className='maincontainer flex max-lg:w-full max-lg:justify-center items-center mt-2 lg:pl-[150px] max-lg:px-5' >
                <div>
                    <div>
                        <h1 className=' lg:text-[85px] lg:text-center max-lg:text-[40px] max-md:text-[30px] max-lg:text-center max-md:w-full font-bold maintext text-primary'>Bridal Jewellery</h1>
                        <hr className='border border-white w-[78%] lg:-mt-2 justify-center mx-auto' />
                        <h3 className='lg:text-[25px] mt-3 text-white text-center'>Elegance begins with the perfect jewel.</h3>
                        <div className='flex justify-center mt-5'>
                            <p className='border border-primary h-fit w-fit p-1'>
                                <button className='border bg-primary font-bold text-secondary px-[25px] py-[1px] hover:bg-secondary hover:border border-primary hover:text-primary  duration-300' >
                                    Collection
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Categories , Engagement Rings and Regal Radiance Most Loved Jewellery sections */}
            <div className='container'>

                {/* Categories section */}
                <div className='grid grid-cols-8 max-lg:mx-auto max-lg:justify-around max-xl:grid-cols-4 max-md:grid-cols-2 max-lg:gap-5 mt-[50px] gap-3'>
                    {
                        categories.map((category, index) => {
                            return (
                                <div key={index} className="w-fit space-y-5">
                                    <Link to={`/CategoriePage/${category.catg}`}>
                                        <div className="w-fit space-y-5 maindiv">
                                            {/* image */}
                                            <div className='overflow-hidden rounded-full duration-300'>
                                                <img src={category.img} className='duration-300' />
                                            </div>
                                            <p className='text-center duration-300'>
                                                {category.name}
                                            </p>
                                        </div>
                                    </Link>
                                </div>

                            )
                        })
                    }

                </div>

                {/* Engagement  Rings */}
                <div className='mt-[50px]'>

                    {/* title */}
                    <div>
                        <h1 className='text-4xl underline text-center font-semibold max-md:text-[30px] underline-offset-[5px] duration-300'>Engagement  Rings</h1>
                    </div>

                    <div className='grid grid-cols-4 max-lg:grid-cols-2 max-lg:mt-10 lg:mt-[40px]'>
                        {womenproducts.data.filter(item => item.ct === "Ring").slice(0, 4).map((item) => (
                            <div key={item.id} className="p-4 duration-300">
                                <div
                                    className="h-full duration-300"
                                >
                                    {/* Card Div */}
                                    <div className="h-full duration-300">
                                        {/* Image Div */}
                                        <div className="hovercarddiv flex-wrap h-full duration-300">
                                            <div className="p-2 border relative duration-300">
                                                {/* Image */}
                                                <Link to='/ProductDetailsPage'>
                                                    <div className="overflow-hidden">
                                                        <img
                                                            src={item.img}
                                                            alt={item.id}
                                                            className="duration-300 w-full scalimg"
                                                        />
                                                    </div>
                                                </Link>

                                                {/* Triangle Image */}
                                                <img
                                                    src="sideangle.png"
                                                    alt=""
                                                    className="absolute top-2 right-1 w-[33%]"
                                                />

                                                {/* Like Button */}
                                                <button
                                                    className="absolute xl:top-6 lg:top-[20px] md:top-[24px] max-md:top-[15px] xl:right-[20px] lg:right-[15px] md:right-[25px] max-md:right-[12px]"
                                                    onClick={() => { handleLikes(item.id) }}
                                                    aria-label="Like Button"
                                                >
                                                    <img
                                                        src={likedProducts[item.id] ? "/fill-like.svg" : "/like.svg"}
                                                        className="lg:w-[17px] duration-300 max-md:w-[13.5px]"
                                                    />
                                                </button>
                                            </div>

                                            {/* Name and Price */}
                                            <div className="flex-wrap justify-end mt-2 relative">
                                                <div className="flex justify-between">
                                                    <h2 className="text-xs line-clamp-1 w-[70%] text-wrap">
                                                        {item.name}
                                                    </h2>
                                                    <h2 className="text-xs text-nowrap font-semibold max-md:font-bold">{item.price} $</h2>
                                                </div>

                                                {/* Add to Cart */}
                                                <button className="mt-3 p-1 w-full justify-center flex bg-primary text-secondary border-2 font-semibold border-secondary hover:text-primary hover:bg-secondary hover:border-primary duration-300">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Regal Radiance Most Loved Jewellery */}
                <div className='mt-[50px]'>

                    {/* title */}
                    <div>
                        <h1 className='text-4xl underline font-semibold text-center max-md:text-[30px] underline-offset-[5px] duration-300'>
                            Regal Radiance Most Loved Jewellery
                        </h1>
                    </div>

                    <div className="grid grid-cols-4 max-lg:grid-cols-2 max-lg:mt-10 lg:mt-[40px]">
                        {sortedProducts.slice(0, 4).map((item) => (
                            <div key={item.id} className="p-4 duration-300">
                                <div className="h-full duration-300">
                                    {/* Card Div */}
                                    <div className="h-full duration-300">
                                        {/* Image Div */}
                                        <div className="hovercarddiv flex-wrap h-full duration-300">
                                            <div className="p-2 border relative duration-300">
                                                {/* Image */}
                                                <Link to="/ProductDetailsPage">
                                                    <div className="overflow-hidden">
                                                        <img
                                                            src={item.img}
                                                            alt={item.id}
                                                            className="duration-300 w-full scalimg"
                                                        />
                                                    </div>
                                                </Link>

                                                {/* Triangle Image */}
                                                <img
                                                    src="sideangle.png"
                                                    alt=""
                                                    className="absolute top-2 right-1 w-[33%]"
                                                />

                                                {/* Like Button */}
                                                <button
                                                    className="absolute xl:top-6 lg:top-[20px] md:top-[24px] max-md:top-[15px] xl:right-[20px] lg:right-[15px] md:right-[25px] max-md:right-[12px]"
                                                    onClick={() => regalhandleLikes(item.id)}
                                                    aria-label="Like Button"
                                                >
                                                    <img
                                                        src={
                                                            regallikedProducts[item.id] ? "/fill-like.svg" : "/like.svg"
                                                        }
                                                        className="lg:w-[17px] duration-300 max-md:w-[13.5px]"
                                                    />
                                                </button>
                                            </div>

                                            {/* Name and Price */}
                                            <div className="flex-wrap justify-end mt-2 relative">
                                                <div className="flex justify-between">
                                                    <h2 className="text-xs line-clamp-1 w-[70%] text-wrap">
                                                        {item.name}
                                                    </h2>
                                                    <h2 className="text-xs text-nowrap font-semibold max-md:font-bold">
                                                        {item.price} $
                                                    </h2>
                                                </div>

                                                {/* Add to Cart */}
                                                <button className="mt-3 p-1 w-full justify-center flex bg-primary text-secondary border-2 font-semibold border-secondary hover:text-primary hover:bg-secondary hover:border-primary duration-300">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Wedding Season section */}
            <div className='weddingdiv space-y-11 mt-[50px] items-center flex justify-center pl-[130px]'>

                <div className='flex justify-center space-x-4'>
                    {/* day */}
                    <div className=''>
                        <div className=' bg-primary text-center text-secondary p-2 px-4 w-fit'>
                            9
                        </div>
                        <div className='text-white text-center'>
                            Day
                        </div>
                    </div>

                    {/* hr */}
                    <div className=''>
                        <div className=' bg-primary text-center text-secondary p-2 px-3 w-fit'>
                            10
                        </div>
                        <div className='text-white text-center'>
                            Hours
                        </div>
                    </div>

                    {/* min */}
                    <div className=''>
                        <div className=' bg-primary text-center text-secondary px-3 p-2 w-fit'>
                            40
                        </div>
                        <div className='text-white text-center'>
                            Min
                        </div>
                    </div>

                    {/* sec */}
                    <div className=''>
                        <div className=' bg-primary text-center text-secondary px-3 p-2 w-fit'>
                            25
                        </div>
                        <div className='text-white text-center'>
                            Sec
                        </div>
                    </div>
                </div>
            </div>


            {/* Top Collection Of Regal Rediance section */}
            <div className='container mt-[50px]'>

                {/* title */}
                <div className='text-4xl underline text-center max-md:text-[30px] font-semibold underline-offset-[5px] duration-300'>
                    Top Collection Of Regal Rediance
                </div>

                <div className='grid grid-cols-3 max-lg:grid-cols-2 mt-[50px]'>
                    {topsortedProducts.slice(0, 3).map((item) => (
                        <div key={item.id} className="p-4 duration-300">
                            <div className="h-full duration-300">
                                {/* Card Div */}
                                <div className="h-full duration-300">
                                    {/* Image Div */}
                                    <div className="hovercarddiv flex-wrap h-full duration-300">
                                        <div className="p-2 border relative duration-300">
                                            {/* Image */}
                                            <Link to="/ProductDetailsPage">
                                                <div className="overflow-hidden">
                                                    <img
                                                        src={item.img}
                                                        alt={item.id}
                                                        className="duration-300 w-full scalimg"
                                                    />
                                                </div>
                                            </Link>

                                            {/* Triangle Image */}
                                            <img
                                                src="sideangle.png"
                                                alt=""
                                                className="absolute top-2 right-1 w-[33%]"
                                            />

                                            {/* Like Button */}
                                            <button
                                                className="absolute xl:top-[30px] lg:top-[20px] md:top-[24px] max-md:top-[15px] xl:right-[30px] lg:right-[15px] md:right-[25px] max-md:right-[12px]"
                                                onClick={() => regalhandleLikes(item.id)}
                                                aria-label="Like Button"
                                            >
                                                <img
                                                    src={
                                                        regallikedProducts[item.id] ? "/fill-like.svg" : "/like.svg"
                                                    }
                                                    className="lg:w-[17px] xl:w-[20px] duration-300 max-md:w-[13.5px]"
                                                />
                                            </button>
                                        </div>

                                        {/* Name and Price */}
                                        <div className="flex-wrap justify-end mt-2 relative">
                                            <div className="flex justify-between">
                                                <h2 className="text-xs line-clamp-1 w-[70%] text-wrap">
                                                    {item.name}
                                                </h2>
                                                <h2 className="text-xs text-nowrap font-semibold max-md:font-bold">
                                                    {item.price} $
                                                </h2>
                                            </div>

                                            {/* Add to Cart */}
                                            <button className="mt-3 p-1 w-full justify-center flex bg-primary text-secondary border-2 font-semibold border-secondary hover:text-primary hover:bg-secondary hover:border-primary duration-300">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* three image group */}
            <div className='container mt-[50px]'>
                <div className='flex max-lg:flex-wrap gap-5 '>

                    {/* left side two images */}
                    <div className='lg:w-1/2 max-lg:w-full space-y-5'>

                        {/* upper image */}
                        <div className='w-fit overflow-hidden Fashion duration-500'>
                            <img src="fashion1.svg" alt="" className='duration-500' />
                        </div>

                        {/* lower image */}
                        <div className='w-fit overflow-hidden Fashion duration-500'>
                            <img src="fashion2.svg" alt="" className='duration-500' />
                        </div>
                    </div>

                    {/* right side image */}
                    <div className='lg:w-1/2  max-lg:w-full fesonimghor overflow-hidden duration-500'>
                        <div className='h-[530px] max-xl:h-[500px] max-lg:h-[380px] max-md:w-full flex  text-center fesonimg justify-center  items-center overflow-hidden Fashion duration-500 '>
                            <div className=''>
                                <p className='text-6xl text-center text-white duration-500'>
                                    40% Off
                                </p>
                                <p className='text-4xl text-center text-white duration-500 mt-3'>
                                    Fashion Jewellery
                                </p>
                                <p className='border border-primary mx-auto h-fit w-fit p-1 mt-3'>
                                    <button className='border bg-primary font-bold text-secondary px-[25px] py-[1.5px] hover:bg-secondary hover:border border-primary hover:text-primary  duration-[400ms]' >
                                        Shop Now
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* The Nightfall Collection section */}
            <div className='mt-[50px]'>
                {/* backgroung image div */}
                <div className='nightfallbg w-full flex max-md:justify-center max-md:text-center items-center'>

                    {/* contain div */}
                    <div className='container md:ml-[100px]'>
                        <p className='text-3xl font-semibold underline underline-offset-[5px] duration-500'>
                            The Nightfall Collection
                        </p>

                        <p className='text-[19px] text-wrap mt-3 duration-500'>
                            Clear Topaz & Pearl Open Ring In Rose <br /> Gold Plated Silver
                        </p>

                        <p className='border border-secondary h-fit w-fit p-1 mt-3 max-md:mx-auto'>
                            <button className='border bg-primary border-secondary font-bold text-secondary px-[25px] py-[1.5px] hover:bg-secondary hover:border hover:text-primary  duration-[400ms]' >
                                Shop Now
                            </button>
                        </p>
                    </div>
                </div>
            </div>

            {/* Trending Jewelry Gifts section */}
            <div className="mt-[50px]">
                <h2 className="text-center text-3xl font-semibold mb-8 underline underline-offset-4">Trending Jewelry Gifts</h2>

                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        770: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                        1440: {
                            slidesPerView: 6,
                        },
                    }}

                    className="mySwiper"
                >
                    {trendingJewelryGifts.map((item) => (
                        <SwiperSlide key={item.id} className="p-4 duration-300">
                            <div
                                className="h-full duration-300"
                                onMouseEnter={() => setHoveredItem(item.id)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                {/* Card Div */}
                                <div className="h-full duration-300">
                                    {/* Image Div */}
                                    <div className="hovercarddiv flex-wrap h-full duration-300">
                                        <div className="p-2 border relative duration-300">
                                            {/* Image */}
                                            <Link to='/ProductDetailsPage'>
                                                <div className="overflow-hidden">
                                                    <img
                                                        src={hoveredItem === item.id ? item.img2 : item.img}
                                                        alt={item.dec}
                                                        className="duration-300 w-full"
                                                    />
                                                </div>
                                            </Link>

                                            {/* Triangle Image */}
                                            <img
                                                src="sideangle.png"
                                                alt=""
                                                className="absolute top-2 right-1 w-[33%]"
                                            />

                                            {/* Like Button */}
                                            <button
                                                className="absolute top-6 max-lg:top-7 max-lg:right-[25px] right-[12px]"
                                                onClick={handleLike}
                                                aria-label="Like Button"
                                            >
                                                <img
                                                    src={liked ? "fill-like.svg" : "like.svg"}
                                                    className="max-lg:w-full lg:w-[83%] duration-300"
                                                />
                                            </button>
                                        </div>

                                        {/* Name and Price */}
                                        <div className="flex-wrap justify-end mt-2 relative">
                                            <div className="flex justify-between">
                                                <h2 className="text-xs line-clamp-2 w-[70%] max-lg:line-clamp-1 text-wrap">
                                                    {item.dec}
                                                </h2>
                                                <h2 className="text-xs text-nowrap font-semibold max-md:font-bold">{item.price}</h2>
                                            </div>

                                            {/* Add to Cart */}
                                            <button className="mt-3 p-1 w-full justify-center flex bg-primary text-secondary border-2 font-semibold border-secondary hover:text-primary hover:bg-secondary hover:border-primary duration-300">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* customer reviews */}
            <div className='container mt-[50px]'>

                {/* title */}
                <div>
                    <h2 className='text-[24px] text-center font-bold'>Customer Reviews</h2>
                </div>
                <div c>
                    <Swiper
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                            dynamicThreshold: 1.0,
                            // give navigation color black
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,

                            },
                            1024: {
                                slidesPerView: 3,

                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {reviews.map((item) => (
                            <SwiperSlide key={item.id} className="p-4 duration-300 pb-10">
                                {/* customer reviews */}
                                <div className='mt-[50px]'>

                                    {/* main div */}
                                    <div className='border relative border-black px-4 py-5 mt-[30px]'>

                                        {/* image */}
                                        <div className='absolute flex justify-center w-full -top-[40px] pr-[10px]'>
                                            <img src={item.perimg} alt="" className='w-[90px]' />
                                        </div>

                                        {/* name, rating and dec */}
                                        <div className='mt-10'>
                                            {/* star */}
                                            <div className='flex justify-center items-end'>
                                                {renderStars(item.rating)}
                                                <p className='text-xs text-gray-600 font-semibold'>
                                                    {"("}{item.rating}{")"}
                                                </p>
                                            </div>

                                            {/* name */}
                                            <div className='font-bold text-lg text-center'>
                                                {
                                                    item.name
                                                }
                                            </div>

                                            {/* dec */}
                                            <div className='text-[13px] text-center'>
                                                {
                                                    item.dec
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>

            {/* footer */}
            <div className='mt-[50px]'>
                <FooterPage />
            </div>
        </div >
    )
}

export default HomePage