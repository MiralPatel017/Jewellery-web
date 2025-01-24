import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './NavPage';
import FooterPage from './FooterPage';


const ServiceDetailsPage = () => {
    const Datas = [
        {
            "id": 1,
            "name": "Jewellery Repair",
            "imgs": "/ourservices1.svg",
            "dec": "Jewellery repair can also involve intricate work like soldering, re-enameling, or restoring tarnished surfaces. Repairs might require matching metal alloys, selecting the right gemstones, or recreating lost elements with precision. Often, professional jewellers will first assess the damage before offering solutions that maintain the original design. For sentimental pieces, repair can be a way to preserve family history or memories. Depending on the complexity, some repairs may take longer, but the results are often worth the wait. Some jewellers even offer customization during the repair process, allowing customers to add personal touches or upgrades. In cases of severe damage, a complete restoration may be necessary, which could include recreating missing sections of the jewellery. Regular cleaning and professional inspections help prevent major issues, extending the life of fine pieces. Whether the repair is minor or major, expert craftsmanship is crucial for ensuring a high-quality result. Ultimately, jewellery repair is an art that not only fixes but also enhances the value and longevity of precious items."
        },
        {
            "id": 2,
            "name": "Jewellery Fabrication",
            "imgs": "/ourservices2.svg",
            "dec": "Jewellery fabrication is the process of creating unique pieces of jewellery from scratch, using metalworking techniques such as soldering, casting, and forming. Skilled artisans work with a variety of materials, including gold, silver, platinum, and gemstones, to bring design concepts to life. This process begins with an idea, which is then translated into a detailed design or blueprint. The metal is carefully shaped, cut, and joined using tools like hammers, anvils, and lasers to create the desired structure. Once the basic shape is formed, stones are set, and finishing techniques such as polishing, engraving, or texturing are applied to add the final touches. Jewellery fabrication allows for endless customization, ensuring that each piece is one-of-a-kind. Whether it's a custom engagement ring, a bespoke bracelet, or a unique pendant, fabrication offers a level of craftsmanship and personalisation that mass-produced jewellery can't match. The process can take time and patience, but the result is a high-quality, original piece. Ultimately, jewellery fabrication is an art that combines skill, creativity, and precision to create timeless pieces that are as unique as the wearer."
        },
        {
            "id": 3,
            "name": "Stone Setting",
            "imgs": "/ourservices3.svg",
            "dec": "Stone setting is a critical aspect of jewellery design and craftsmanship, involving the precise placement and securing of gemstones into a piece of jewellery. The process requires a high level of skill and attention to detail, as the stone must be held firmly in place without compromising its beauty or security. There are various techniques used for stone setting, including prong setting, bezel setting, channel setting, and pave setting, each offering a different aesthetic and level of security. In prong setting, for example, small metal claws are bent over the stone to hold it, while bezel setting involves encircling the stone with a metal rim. The choice of setting depends on the type of gemstone, the desired style, and the durability needed. Proper stone setting not only enhances the gemstone’s visual appeal but also ensures it remains secure and protected during everyday wear. Expert stone setting elevates the overall design of the jewellery, turning a simple design into a work of art that showcases the stone's brilliance and beauty. Whether for engagement rings, necklaces, earrings, or bracelets, stone setting is an essential step in creating high-quality, lasting jewellery."
        },
        {
            "id": 4,
            "name": "Jewellery Pollishing",
            "imgs": "/ourservices4.svg",
            "dec": "Jewellery polishing is the final step in the jewellery-making process, aimed at enhancing the shine and smoothness of a piece. Using specialized tools and polishing compounds, artisans remove any surface imperfections, tarnish, or oxidation that may have developed during manufacturing or wear. Polishing not only restores the piece's brilliance but also brings out the intricate details of the design, ensuring that every curve and facet reflects light beautifully. There are different methods of polishing depending on the type of metal and the complexity of the jewellery, including hand polishing, machine polishing, and ultrasonic cleaning. Hand polishing involves using a cloth or polishing wheel with various grades of abrasive compounds, while machine polishing uses specialized machines for a more uniform finish. For delicate or highly intricate pieces, ultrasonic cleaning can be used to safely remove dirt and restore shine. Polishing is crucial for maintaining the jewellery’s appearance and durability, as it helps prevent the buildup of grime and can even minimize the risk of corrosion. "
        },
        {
            "id": 5,
            "name": "Ring Sizing",
            "imgs": "/ourservices5.svg",
            "dec": "Ring sizing is the process of adjusting the size of a ring to ensure it fits comfortably and securely on the wearer’s finger. This is a common service offered by jewellers, whether for resizing a new ring or adjusting an older one that no longer fits properly. The process typically involves either increasing or decreasing the ring's circumference by adding or removing metal, depending on the required size change. For rings that need to be made smaller, excess metal is carefully cut and re-soldered, while for larger sizes, additional metal is added and seamlessly integrated into the band. In some cases, the ring may also need to be reshaped to ensure its original design is maintained. Resizing is particularly important for engagement rings, wedding bands, or any other piece that may need adjustments over time due to weight fluctuations or changes in finger size. The jeweller will take precise measurements to ensure an accurate fit, often using a ring mandrel or measuring gauge. Proper ring sizing is essential for comfort, as a well-fitted ring should slide easily over the knuckle but stay in place without feeling too tight or loose."
        }
    ]

    const { id } = useParams();
    const service = Datas.find((item) => item.id == id);

    return (
        <div>

            {/* main container */}
            <div className='container shadow-md'>
                <Navbar />
            </div>

            {/* product image and details */}
            <div className='container mt-[50px]'>
                <div className="grid grid-cols-2 max-lg:grid-cols-1">
                    <div className='w-full max-xl:flex max-xl:justify-center'>
                        <img src={service.imgs} alt={service.name} className='lg:w-[80%] md:w-[50%]' />
                    </div>

                    <div className='max-lg:mt-5'>
                        <div className='font-semibold max-lg:text-center xl:text-4xl md:text-3xl max-md:text-[30px]'>
                            {service.name}
                        </div>

                        <div className='max-lg:text-justify max-lg:mt-3 max-lg:text-sm max-xl:text-[12.5px] lg:mt-5'>
                            {service.dec}
                        </div>
                    </div>
                </div>
            </div>

            {/* form container */}
            <div className='container mt-[50px]'>

                {/* form */}
                <form className='space-y-5'>

                    {/* first and last name */}
                    <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-5'>

                        {/* first name */}
                        <div>
                            <input
                                type="text"
                                name="firstname"
                                id="firstname"
                                placeholder='First Name*'
                                className='border border-black text-secondary placeholder:text-secondary w-full  px-3 py-1.5 text-sm rounded-lg '
                            />
                        </div>

                        {/* last name */}
                        <div>
                            <input
                                type="text"
                                name="lastname"
                                id="lastname"
                                placeholder='Last Name*'
                                className='border border-black text-secondary placeholder:text-secondary w-full  px-3 py-1.5 text-sm rounded-lg '
                            />
                        </div>
                    </div>

                    {/* Address and Jewellery name */}
                    <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-5'>

                        {/* Address */}
                        <div>
                            <input
                                type='text'
                                name="address"
                                id="address"
                                placeholder='Address*'
                                className='border border-black text-secondary placeholder:text-secondary w-full px-3 py-1.5 text-sm rounded-lg '
                            />
                        </div>

                        {/* last name */}
                        <div className=''>
                            <input
                                type="text"
                                name="jewelleryname"
                                id="jewelleryname"
                                placeholder='Jewellery name*'
                                className='border border-black text-secondary h-fit placeholder:text-secondary w-full  px-3 py-1.5 text-sm rounded-lg '
                            />
                        </div>
                    </div>

                    {/* Phone number and Email */}
                    <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-5'>

                        {/* Phone number */}
                        <div>
                            <input
                                type="number"
                                name="phonenumber"
                                id="phonenumber"
                                placeholder='Phone Number*'
                                className='border border-black text-secondary placeholder:text-secondary w-full  px-3 py-1.5 text-sm rounded-lg '
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder='Email*'
                                className='border border-black text-secondary placeholder:text-secondary w-full  px-3 py-1.5 text-sm rounded-lg '
                                required
                            />
                        </div>
                    </div>

                    {/* submit button */}
                    <div className='flex justify-center pt-5'>
                        <button className='bg-primary px-10 py-2 text-sm rounded-lg font-bold hover:bg-secondary hover:text-primary duration-300'
                            type='submit'>
                            Submit
                        </button>
                    </div>

                </form>
            </div>

            {/* footer */}
            <div className='mt-[50px]'>
                <FooterPage />
            </div>
        </div>
    );
};

export default ServiceDetailsPage;