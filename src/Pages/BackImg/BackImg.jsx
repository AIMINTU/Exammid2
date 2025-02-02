import React from 'react';
import backig from '../../assets/houserent.png'
import { Link } from 'react-router-dom';
import nvai1 from '../../assets/Nvai1.jpg'
import nvai from '../../assets/Nvai.jpg'
import Marquee from "react-fast-marquee";


const BackImg = () => {
    return (

        <div className=" max-w-7xl mx-auto">
            <img className='w-400 mt-3' src={backig} alt="" />
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <Link to='/houses'> <h1 className="text-blue-400 text-5xl font-bold">Click here to Rent</h1></Link>

                    <Link to='/houses'><button className="btn btn-primary">We provide best budget house for you</button></Link>
                    <Marquee className='text-3xl text-bold text-neutral '>
                        You will find best budget house, this our commitment.
                    </Marquee>
                </div>

            </div>

            <p className='text-3xl text-left text-bold text-blue-500'>
                A well-priced 1,300 sq ft apartment is now available for rent in the convenient neighborhood of Khilgaon.
                This spacious residence offers three comfortable bedrooms and three modern bathrooms, making it ideal for families seeking a practical yet cozy living space.
                The apartment also features a functional kitchen, perfect for preparing daily meals. The layout ensures optimal use of space with plenty of natural light and ventilation, creating a warm and inviting atmosphere throughout the home Service charge  - 3500€Located in a well-connected area, this apartment provides easy access to schools, shopping centers, and transportation, making daily commutes and errands hassle-free. It’s a perfect opportunity for families or individuals looking for a comfortable home in a great location.Contact us today to schedule a viewing and make this lovely Khilgaon apartment your new residence!.
            </p>
            <div className='flex'>
                <img className='w-400 mt-3' src={nvai1} alt="" />
                <img className='w-400 mt-3' src={nvai} alt="" />
            </div>

        </div>

    );
};

export default BackImg;