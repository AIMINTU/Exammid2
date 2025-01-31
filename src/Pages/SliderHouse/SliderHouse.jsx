import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideImg from '../../assets/3.png'

const SliderHouse = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (

        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-2'>
                <div>
                    <img src={SlideImg} alt="" />
                </div>
                <div>
                    <img src={SlideImg} alt="" />
                </div>
                <div>
                    <img src={SlideImg} alt="" />
                </div>
                <div>
                    <img src={SlideImg} alt="" />
                </div>
                <div>
                    <img src={SlideImg} alt="" />
                </div>
                <div>
                    <img src={SlideImg} alt="" />
                </div>
            </div>
            <div className=' mx-auto'>

                <div className='mt-20'>
                    <Slider {...settings}>
                        {Data.map(d =>
                            <div className='bg-white h-[450px] text-black rounded-xl'>
                                <div>
                                    <div>
                                        <p>{d.id}</p>
                                    </div>

                                    <div className='h-60  rounded-t-xl bg-indigo-600 flex justify-center items-center'>
                                        <img src={d.image} alt="" className='h-60 w-60 ' />
                                    </div>
                                    <div className='flex flex-col justify-center items-center gap-4 p-4'>
                                        <p className='text-xl font-semibold'>{d.name}</p>
                                        <p>{d.text}</p>

                                        <p>Retail Property for Lease/Sale – Prime Location in London, England.

                                            This highly sought-after retail property is located in the heart of [City/Area], offering excellent visibility and foot traffic.
                                            Retail Property for Lease/Sale – Prime Location in [City/Area]

                                            This highly sought-after retail property is located in the heart of [City/Area], offering excellent visibility and foot traffic. With a spacious [X square feet] of retail space, this property is perfect for a variety of businesses, from boutique stores to cafés or service-based businesses.

                                            Key Features
                                        </p>

                                    </div>
                                </div>
                            </div>
                        )}
                    </Slider>
                    <button className='border-indigo-600 text-white text text-lg px-4 py-1 rounded-xl'>read more</button>

                </div>


            </div>
        </div>
    );
};

export default SliderHouse;
const Data = [
    {
        id: 1,
        name: "John Doe",
        image: "https://i.ibb.co/5gNRkbdW/pexels-heyho-8146318.jpg",
        text: "Software Developer with a passion for coding and new technologies.",
    },
    {
        id: 2,
        name: "Jane Smith",
        image: "https://i.ibb.co/xKNR904m/pexels-pavel-danilyuk-7937363.jpg",
        text: "Creative Designer specializing in UI/UX and branding.",
    },
    {
        id: 3,
        name: "Sam Johnson",
        image: "https://i.ibb.co/QFNdGdFs/pexels-ivan-samkov-8963085.jpg",
        text: "Digital Marketer focused on SEO and content strategy.",
    },
    {
        id: 4,
        name: "Emily Clark",
        image: "https://i.ibb.co/0VYfNBh8/pexels-ivan-samkov-8962573.jpg",
        text: "Full Stack Developer with a focus on JavaScript and cloud technologies.",
    },
    {
        id: 5,
        name: "Emily Clark",
        image: "https://i.ibb.co/HT8nvNdB/pexels-ivan-samkov-8962339.jpg",
        text: "Full Stack Developer with a focus on JavaScript and cloud technologies.",
    },
    {
        id: 6,
        name: "Emily Clark",
        image: "https://i.ibb.co/YFQkt1Vg/pexels-olly-3125905.jpg",
        text: "Full Stack Developer with a focus on JavaScript and cloud technologies.",
    },
];
