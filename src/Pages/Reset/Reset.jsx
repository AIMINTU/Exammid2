import React, { useRef, useState } from 'react';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from '../../../Firebase/Firebase.config';
const Reset = () => {
    const [values,setvalues]=useState(null)
    const auth = getAuth(app);
    const emailRef=useRef(null)
    const [error,setError]=useState(null)


    const handleClick=(e)=>{
        e.preventDefault()
        const email=emailRef.current.value
        setvalues(null)
        setError(null)
        if(!email){
            setError('Please enter an email')
            return;

        }
        else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
            setError('please give a valid email')
            return;
        }
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            setvalues('reset password link has been sent')

        })
        .catch(err=>{
            console.log(err.message)
        })



        
    }
    return (
        <div className='max-w-7xl mx-auto'>
            <h1>This reset component</h1>
            <form  onSubmit={handleClick}>
                <input ref={emailRef} type="email" placeholder="Type here" name="email"className="input input-bordered input-primary w-full max-w-xs" /><br/>
                <button className='btn btn-neutral'>Summit</button>
            </form>
            <p className='text-xl text-red-500'>{values}</p>
            <p className='text-xl text-red-500'>{error}</p>

            
        </div>
    );
};

export default Reset;