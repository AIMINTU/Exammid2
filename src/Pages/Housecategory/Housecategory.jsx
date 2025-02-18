import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import studi from '../../assets/2.png'
import stud from '../../assets/3.png'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook ,FaTwitter,FaLinkedin,FaInstagram, FaSnapchat,FaTelegram,FaWhatsapp,FaPinterest, FaReddit} from "react-icons/fa";
import sphoto from '../../assets/Rent-a-house.png'

const Housecategory = () => {

    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='Max-w-7xl mx-auto'>

            <Link to='/houses'><h1 className='font-bold text-3xl text-center border border-b-blue-600 shadow text-neutral py-3 rounded-xl'>HouseCategory</h1></Link>
            <div className='grid grid-cols-3 mt-0'>
                <div className='col-span-2 border border-blue-500 p-10 '>

                    <h1 className='font-bold text-2xl text-neutral'>Types of Flates :</h1>
                    <hr className='border border-black' />
                    <div className='grid grid-cols-2'>
                        <div>
                            <img className='mt-3 h-[450px]' src={studi} alt="" />
                            <Link to='/houses'><p className='text-bold text-neutral text-2xl text-center border border-blue-400'>Studio Apartment</p></Link>
                        </div>
                        <div>
                            <img className='mt-3 h-[450px]' src={stud} alt="" />
                            <Link to='/houses'><p className='text-bold text-neutral text-2xl text-center border border-blue-400'>One Bedroom Apartment</p></Link>

                        </div>
                        <div>
                            <img className='mt-3 h-[450px]' src={studi} alt="" />
                            <Link to='/houses'><p className='text-bold text-neutral text-2xl text-center border border-blue-400'>Three Bedrooms Apartment</p></Link>
                        </div>
                        <div>
                            <img className='mt-3 h-[450px]' src={stud} alt="" />
                            <Link to='/houses'><p className='text-bold text-neutral text-2xl text-center border border-blue-400'>Four Bedrooms Apartment</p></Link>

                        </div>
                    </div>
                </div>

                <div className='col-span-1 border border-blue-500 p-10'>
                    <h1 className='font-bold text-2xl text-neutral'>Google and Github login</h1>
                    <hr className='border border-black' />
                    <div>
                        <button className='btn btn-outline btn-info w-full mt-2'> <FcGoogle className='text-3xl' />Google Login</button>
                        <button className='btn btn-outline btn-info w-full mt-2'> <FaGithub className='text-3xl' />Github Login</button>
                    </div>
                    <div className='mt-10'>
                        <h1 className='font-bold text-2xl text-neutral'>Social media login page</h1>
                        <hr className='border border-black' />
                        <div className='border  border-black mt-3 '>
                            <div className='border-b border-accent'>
                                <h1 className='flex p-3 gap-2 items-center text-indigo-500'><FaFacebook className='text-xl' />Facebook</h1>
                            </div>
                            <div className='border-b border-accent'>
                                <h1 className='flex p-3 gap-2 items-center text-indigo-500'>< FaLinkedin className='text-xl' />Linkedin</h1>
                            </div>

                            <div className='border-b border-accent'>
                                <h1 className='flex p-3 gap-2 items-center text-indigo-500'><FaTwitter className='text-xl' />Twitter</h1>
                            </div>

                            <div className='border-b border-accent'>
                                <h1 className='flex p-3 gap-2 items-center text-indigo-500'><FaInstagram className='text-xl'/>Instagram</h1>
                            </div>
                            <div className='border-b border-accent'>
                                <h1 className='flex p-3 gap-2 items-center text-indigo-500'><FaWhatsapp className='text-xl'/>Whatsapp</h1>
                            </div>
                            <div className='border-b border-accent'>
                                <h1 className='flex p-3 gap-2 items-center text-indigo-500'><FaTelegram className='text-xl'/>Telegram</h1>
                            </div>
                            <div className='border-b border-accent'>
                                <h1 className='flex p-3 gap-2 items-center text-indigo-500'><FaSnapchat className='text-xl'/>Snapchat</h1>
                            </div>
                            <div className='border-b border-accent'>
                                <h1 className='flex p-3 gap-2 items-center text-indigo-500'><FaReddit className='text-xl'/>Reddit</h1>
                            </div>
                            <div className='border-b border-accent'>
                                <h1 className='flex p-3 gap-2 items-center text-indigo-500'><FaPinterest className='text-xl'/>Pinterest</h1>
                            </div>

                        </div>
                        <Link to='/houses'><h1 className='font-bold text-2xl text-indigo-500 mt-3'>Click here for comfort home</h1></Link>
                        <hr className='border border-black' />
                        <Link to='/houses'><img className='w-500' src={sphoto}alt="" /></Link>

                    </div>

                </div>

            </div>
            <div className='mt-20'>
                <Slider {...settings}>
                    {Data.map(d =>
                        <div className='bg-white h-[450px] text-black rounded-xl'>
                            <div>
                                <div>
                                    <p>{d.id}</p>
                                </div>

                                <div className='h-56 rounded-xl bg-indigo-600 flex justify-center items-center'>
                                    <img src={d.image} alt="" className='h-44 w-44 rounded-full' />
                                </div>
                                <div className='flex flex-col justify-center items-center gap-4 p-4'>
                                    <p className='text-xl font-semibold'>{d.name}</p>
                                    <p>{d.text}</p>
                                    <button className='border-indigo-600 text-white text text-lg px-4 py-1 rounded-xl'>read more</button>
                                </div>
                            </div>
                        </div>
                    )}
                </Slider>

            </div>


        </div>
    );
};

export default Housecategory;

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
