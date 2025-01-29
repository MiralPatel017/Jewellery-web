import React from "react";
import NavPage from "./NavPage";
import menproducts from "./menproducts.json";
import womenproducts from "./womenproducts.json";
import { Link } from "react-router-dom";
import FooterPage from "./FooterPage";
import PaginationPage from "./PaginationPage";


const CategoriePage = () => {

  // Men categories
  const mencategories = ["Ring", "Chain", "Kadas", "Bracelet"];

  // Women categories
  const wommencategories = ["Ring", "Earrings", "Bangles", "Bracelet", "Mangal Sutra", "Necklace", "Jhumkas", "Pendants",];

  // Gender
  const gender = ["men", "women"];

  const [Gender, setGender] = React.useState(gender[0]);
  const [categories, setCategories] = React.useState(mencategories);
  const [selectedCategory, setSelectedCategory] = React.useState("Ring");
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const [likedProducts, setLikedProducts] = React.useState({});

  // Change gender on click
  const changeGender = (selectedGender) => {
    setGender(selectedGender);

    // Update categories
    if (selectedGender === "men") {
      setCategories(mencategories);
    } else {
      setCategories(wommencategories);
    }

    // Reset category and fetch products
    const defaultCategory = selectedGender === "men" ? mencategories[0] : wommencategories[0];
    setSelectedCategory(defaultCategory);
    fetchProducts(selectedGender, defaultCategory);
  };

  // Fetch products based on gender and category
  const fetchProducts = (gender, category) => {
    const products = gender === "men" ? menproducts.data : womenproducts.data;
    const filtered = products.filter((product) => product.ct === category).slice(0, 6);
    setFilteredProducts(filtered);
  };

  // Handle category click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    fetchProducts(Gender, category);
  };

  // Handle like button click
  const handleLike = (productId) => {
    setLikedProducts((prevLikedProducts) => ({
      ...prevLikedProducts,
      [productId]: !prevLikedProducts[productId],
    }));
  };

  // Initial fetch
  React.useEffect(() => {
    fetchProducts(Gender, selectedCategory);
  }, []);


  return (
    <div>

      {/* navbar */}
      <div className="shadow-md bg-white w-full fixed top-0 z-50">
        <div className='container'>
          <NavPage />
        </div>
      </div>


      {/* Main container */}
      <div className="categorie-main-container mt-[80px]">
        <div className="container h-full flex justify-center items-center">
          {/* Title */}
          <div className="flex justify-center items-center h-full w-full xl:pl-[700px] lg:pl-[530px] md:pl-[300px]">
            <div className="md:w-fit md:h-fit max-md:text-center space-y-[26px]">

              <h1 className="xl:text-[32px] bg-primary w-fit px-5 pb-1 max-md:mx-auto Montserrat">
                Categories
              </h1>

              <p className=" text-[20px] Marcellus">Wedding season Offer flat 30% Off</p>

              <p className="text-[50px] Marcellus ">Golden Necklace</p>

              <p className="max-md:text-justify Karla">
                The grand allure of Gemstone & Polki jewellery lies in its
                details, intricacy, and visual elegance. Each piece is weaved
                together with graceful patterns and mesmerising rows of precious
                stones and uncut diamonds. Join us as we cherish a collection
                intertwined with majestic grandeur, vibrant colours, and
                exceptional designs.
              </p>
              <div className="border border-primary p-1 w-fit max-md:mx-auto">
                <button className="bg-primary hover:bg-secondary text-secondary Karla hover:text-primary border border-secondary hover:border-primary text-sm font-semibold px-5 py-1 duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter container */}
      <div className="container mt-[50px]">

        {/* main screen */}
        <div className="main-screeen max-lg:hidden">
          <div className="flex xl:gap-[80px] gap-[45px]">

            {/* Filter div */}
            <div className="w-[20%] ">
              {/* Active Gender Label */}
              <div className="text-center border border-secondary py-2 font-semibold text-lg bg-primary">
                {Gender === "men" ? "Men" : "Women"}
              </div>

              {/* Categories List */}
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`text-lg items-center justify-center w-full border Montserrat border-secondary p-2 hover:bg-primary hover:text-secondary duration-300 ${selectedCategory === category ? "bg-secondary text-primary" : ""
                    }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Product and Men/Women Category div */}
            <div className="w-[80%] Montserrat">

              {/* Two buttons for gender */}
              <div className="grid grid-cols-2 gap-5 w-[95%]">
                <button
                  className={`w-full Montserrat ${Gender === "men" ? "bg-secondary text-primary" : "bg-primary text-secondary"
                    } hover:bg-secondary hover:text-primary text-center text-xl py-2 font-semibold duration-300`}
                  onClick={() => changeGender("men")}
                >
                  Men
                </button>

                <button
                  className={`w-full Montserrat ${Gender === "women" ? "bg-secondary text-primary" : "bg-primary text-secondary"
                    } hover:bg-secondary  hover:text-primary text-center text-xl py-2 font-semibold duration-300`}
                  onClick={() => changeGender("women")}
                >
                  Women
                </button>
              </div>
              {/* name of selected product category */}
              <div className="flex items-center my-5 gap-5">
                <p className="text-3xl tracking-[4px] flex Montserrat">
                  {selectedCategory}
                </p>
                <hr className="w-full border mt-2 border-secondary" />
              </div>

              {/* Products */}
              <div className="grid grid-cols-3  max-xl:grid-cols-2 gap-5 mt-5">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="h-full duration-300 mb-5">
                    <div className="hovercarddiv flex-wrap h-full duration-300">

                      <div className="p-2 border relative duration-300">
                        {/* Main Image */}
                        <Link to='/ProductDetailsPage'>
                          <div className="overflow-hidden"

                          >
                            <img
                              src={product.img}
                              alt={product.name}
                              className="scalimg duration-300 line-clamp-1"
                              onClick={''}
                            />
                          </div>
                        </Link>

                        {/* Triangle Image */}
                        <img
                          src="/sideangle.png"
                          alt=""
                          className="absolute top-2 right-1 w-[33%] max-xl:w-[28%]"
                        />

                        {/* Like Button */}
                        <button
                          className="absolute top-6 max-xl:top-[25px] max-xl:right-[22.5px] right-[20px]"
                          onClick={() => handleLike(product.id)}
                          aria-label="Like Button"
                        >
                          <img
                            src={likedProducts[product.id] ? "/fill-like.svg" : "/like.svg"}
                            className="max-xl:w-[21px] duration-300"
                          />
                        </button>
                      </div>

                      {/* Name and Price */}
                      <div className="flex-wrap justify-end mt-2 relative">
                        <div className="flex justify-between">
                          <h2 className="text-sm line-clamp-1 w-[70%] text-wrap Montserrat">{product.name}</h2>
                          <h2 className="text-sm text-nowrap font-semibold max-md:font-bold Montserrat">{product.price} $</h2>
                        </div>

                        {/* add to card button */}
                        <button className="mt-3 Montserrat p-1 w-full justify-center flex bg-primary text-secondary border-2 font-semibold border-secondary hover:text-primary hover:bg-secondary hover:border-primary duration-300">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* PaginationPage */}
              <div className=" mt-5">
                <div className="mx-auto Montserrat">
                  <PaginationPage totalPages={3} />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* mobile and tablet view */}
        <div className="mobile-and-tab-screeen lg:hidden">
          <div className="">

            {/* Product and Men/Women Category div */}
            <div className="">
              {/* Two buttons for gender */}
              <div className="grid grid-cols-2 gap-5 w-[95%]">
                <button
                  className={`w-full Montserrat ${Gender === "men" ? "bg-secondary text-primary" : "bg-primary text-secondary"
                    }  text-center text-xl py-2 font-semibold duration-300`}
                  onClick={() => changeGender("men")}
                >
                  Men
                </button>

                <button
                  className={`w-full Montserrat ${Gender === "women" ? "bg-secondary text-primary" : "bg-primary text-secondary"
                    } text-center text-xl py-2 font-semibold duration-300`}
                  onClick={() => changeGender("women")}
                >
                  Women
                </button>
              </div>

              <hr className="my-10 border border-gray-500" />

              {/* Filter div */}
              <div className="mt-5">


                {/* Categories List */}
                <div className="grid grid-cols-3 gap-5 mt-5">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`text-lg Montserrat items-center justify-center w-full border border-secondary p-2 duration-300 ${selectedCategory === category ? "bg-secondary text-primary" : ""
                        }`}
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* name of selected product category */}
              <div className="flex items-center md:my-5 my-10">
                {/* shoe filter name */}
                <p className="text-[35px] font-[600] Montserrat tracking-[3px]">
                  {selectedCategory}
                </p>
                <hr className="border w-full ml-3 text-2xl md:mt-2 border-gray-500" />
              </div>

              {/* Products */}
              <div className="grid grid-cols-3  max-md:grid-cols-2 gap-5 mt-5">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="h-full duration-300 mb-5">
                    <div className="hovercarddiv flex-wrap h-full duration-300">
                      <div className="p-2 border relative duration-300">
                        {/* Main Image */}
                        <Link to='/ProductDetailsPage'>
                          <div className="overflow-hidden">
                            <img
                              src={product.img}
                              alt={product.name}
                              className="scalimg duration-300 line-clamp-1"
                            />
                          </div>
                        </Link>
                        {/* Triangle Image */}
                        <img
                          src="sideangle.png"
                          alt=""
                          className="absolute top-2 right-1 md:w-[33%] max-md:w-[35%]"
                        />

                        {/* Like Button */}
                        <button
                          className="absolute top-6 max-lg:top-5 max-md:top-[18px] md:right-[18px]  max-md:right-[13px]"
                          onClick={() => handleLike(product.id)}
                          aria-label="Like Button"
                        >
                          <img
                            src={likedProducts[product.id] ? "/fill-like.svg" : "/like.svg"}
                            className="w-[17px] duration-300"
                          />
                        </button>
                      </div>

                      {/* Name and Price */}
                      <div className="flex-wrap justify-end mt-2 relative">
                        <div className="flex justify-between">
                          <h2 className="text-sm line-clamp-1 w-[70%] text-wrap Montserrat">{product.name}</h2>
                          <h2 className="text-sm text-nowrap font-semibold max-md:font-bold Montserrat">{product.price} $</h2>
                        </div>

                        <button className="Montserrat mt-3 p-1 w-full justify-center flex bg-primary text-secondary border-2 font-semibold border-secondary hover:text-primary hover:bg-secondary hover:border-primary duration-300 text-[14px]">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* PaginationPage */}
              <div className=" mt-5">
                <div className="mx-auto Montserrat">
                  <PaginationPage totalPages={3} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* footer */}
      <div className="mt-[50px]">
        <FooterPage />
      </div>
    </div>
  );
};

export default CategoriePage;
