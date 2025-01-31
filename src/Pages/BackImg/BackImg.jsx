import React from 'react';
import backig from '../../assets/houserent.png'
import { Link } from 'react-router-dom';

const BackImg = () => {
    return (
        
            <div className=" max-w-7xl mx-auto">
                <img className='w-400 mt-3' src={backig} alt="" />
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                   <Link to='/houses'> <h1 className="text-blue-400 text-5xl font-bold">Click here to Rent</h1></Link>
                        <p className="text-neutral text-bold">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">We provide best budget house for you</button>
                    </div>
                </div>
            </div>
    
    );
};

export default BackImg;