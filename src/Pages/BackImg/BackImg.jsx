import React from 'react';
import backig from '../../assets/houserent.png'

const BackImg = () => {
    return (
        
            <div className=" max-w-7xl mx-auto">
                <img className='w-400 mt-3' src={backig} alt="" />
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Click here to Rent</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
    
    );
};

export default BackImg;