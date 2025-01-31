import React from 'react';
import cat from '../../assets/1.png'
import { Link } from 'react-router-dom';

const HousePrice = () => {
    return (
        <div className='grid grid-cols-2'>
            <div className=''>
                <img className='h-[334px]' src={cat} alt="" />
                <h1 className='text-bold text-2xl'>Allée Robert Desnos:</h1>
                <p className='text-xl'> Rent: 580.00€ per month, includes bills, needs a deposit.</p>
                <Link to='/housedetails'><button className='btn btn-neutral mt-3'>House details</button></Link>
            </div>
            <div className=''>
                <img className='h-[334px]' src={cat} alt="" />
                <h1 className='text-bold text-2xl'>Allée Robert Desnos:</h1>
                <p className='text-xl'> Rent: 775.00€ per month, includes bills, needs a deposit.</p>
                <Link to='/housedetails'><button className='btn btn-neutral mt-3'>House details</button></Link>
            </div>
            <div className=''>
                <img className='h-[334px]' src={cat} alt="" />
                <h1 className='text-bold text-2xl'>Allée Robert Desnos:</h1>
                <p className='text-xl'> Rent: 1150.00€ per month, includes bills, needs a deposit.</p>
                <Link to='/housedetails'><button className='btn btn-neutral mt-3'>House details</button></Link>
            </div>
            <div className=''>
                <img className='h-[334px]' src={cat} alt="" />
                <h1 className='text-bold text-2xl'>Allée Robert Desnos:</h1>
                <p className='text-xl'> Rent: 555.00€ per month, includes bills, needs a deposit.</p>
                <Link to='/housedetails'><button className='btn btn-neutral mt-3'>House details</button></Link>
            </div>
            <div className=''>
                <img className='h-[334px]' src={cat} alt="" />
                <h1 className='text-bold text-2xl'>Allée Robert Desnos:</h1>
                <p className='text-xl'> Rent: 1050.00€ per month, includes bills, needs a deposit.</p>
                <Link to='/housedetails'><button className='btn btn-neutral mt-3'>House details</button></Link>
            </div>
            <div className=''>
                <img className='h-[334px]' src={cat} alt="" />
                <h1 className='text-bold text-2xl'>Allée Robert Desnos:</h1>
                <p className='text-xl'> Rent: 254.00€ per month, includes bills, needs a deposit.</p>
                <Link to='/housedetails'><button className='btn btn-neutral mt-3'>House details</button></Link>
            </div>
            <div className=''>
                <img className='h-[334px]' src={cat} alt="" />
                <h1 className='text-bold text-2xl'>Allée Robert Desnos:</h1>
                <p className='text-xl'> Rent: 580.00€ per month, includes bills, needs a deposit.</p>
                <Link to='/housedetails'><button className='btn btn-neutral mt-3'>House details</button></Link>
            </div>
            <div className=''>
                <img className='h-[334px]' src={cat} alt="" />
                <h1 className='text-bold text-2xl'>Allée Robert Desnos:</h1>
                <p className='text-xl'> Rent: 475.00€ per month, includes bills, needs a deposit.</p>
                <Link to='/housedetails'><button className='btn btn-neutral mt-3'>House details</button></Link>
            </div>
            <div className=''>
                <img className='h-[334px]' src={cat} alt="" />
                <h1 className='text-bold text-2xl'>Allée Robert Desnos:</h1>
                <p className='text-xl'> Rent: 350.00€ per month, includes bills, needs a deposit.</p>
                <Link to='/housedetails'><button className='btn btn-neutral mt-3'>House details</button></Link>
            </div>
            <div className=''>
                <img className='h-[334px]' src={cat} alt="" />
                <h1 className='text-bold text-2xl'>Allée Robert Desnos:</h1>
                <p className='text-xl'> Rent: 600.00€ per month, includes bills, needs a deposit.</p>
                <Link to='/housedetails'><button className='btn btn-neutral mt-3'>House details</button></Link>
            </div>
            <div className=''>
                <img className='h-[334px]' src={cat} alt="" />
                <h1 className='text-bold text-2xl'>Allée Robert Desnos:</h1>
                <p className='text-xl'> Rent: 450.00€ per month, includes bills, needs a deposit.</p>
                <Link to='/housedetails'><button className='btn btn-neutral mt-3'>House details</button></Link>
            </div>
            <div className=''>
                <img className='h-[334px]' src={cat} alt="" />
                <h1 className='text-bold text-2xl'>Allée Robert Desnos:</h1>
                <p className='text-xl'> Rent: 590.00€ per month, includes bills, needs a deposit.</p>
                <Link to='/housedetails'><button className='btn btn-neutral mt-3'>House details</button></Link>
            </div>
        </div>
    );
};

export default HousePrice;