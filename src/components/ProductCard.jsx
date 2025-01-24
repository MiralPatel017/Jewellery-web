import React from 'react'

const ProductCard = (pimg, pname, pprice) => {

    const [liked, setLiked] = React.useState(false);

    const handleLike = () => {
        setLiked(!liked); 
    };

    return (
        <div className=''>
            {/* card div */}
            <div className='w-fit'>
                {/* image div */}
                <div className='hovercarddiv h-auto'>
                    <div className='p-2 border w-fit relative '>

                        <div className='overflow-hidden'>
                            {/* <img src={pimg} alt="product image"/> */}
                            <img src="image.png" alt="product image" className='scalimg duration-300' />
                        </div>
                        <img src="sideangle.png" alt="" className=' absolute top-2 right-1 w-[33%]' />

                        <button
                            className="absolute top-6 right-[17px]"
                            onClick={handleLike}
                            aria-label="Like Button"
                        >
                            <img src={liked ? 'fill-like.svg' : 'like.svg'} className=' w-[83%] duration-300' />
                        </button>
                    </div>

                    {/* name and price */}
                    <div className=' mt-2 relative'>
                        <div className="flex justify-between">
                            {/* <h2 className='text-lg font-bold'>{pname}</h2> */}
                            <h2 className='text-xs line-clamp-2 w-[70%] text-wrap'>Clear Topaz & Pearl Open Ring In Rose Gold Plated Silver</h2>
                            <h2 className='text-xs text-nowrap font-semibold'>563.5 $</h2>
                        </div>{/*  */}

                        {/* add to card */}
                        <button className='mt-3 p-1 w-full bg-primary text-secondary border-2 font-semibold border-secondary hover:text-primary hover:bg-secondary hover:border-primary duration-300'>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard