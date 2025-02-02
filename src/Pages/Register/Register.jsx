import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import app from '../../../Firebase/Firebase.config'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const Register = () => {
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    const handleRegister = (event) => {
        event.preventDefault()

        const form = event.target;
        
        const userName = form.userName.value;
        const photo=form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        setError(null)
        setSuccess(null)

        if (password.length < 8) {
            setError('password is too short,its should be at least 6 characters.');
            return;
        }
        else if (!/^(?=.*[A-Z])(?=.*\d).+$/.test(password)) {
            setError("give at least one upper case letter and one number")
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const newUser = result.user;
                updateProfile(newUser,{
                    displayName:userName,
                    photoURL:photo
                })
                .then(()=>{
                    console.log("userupdated")
                    toast('registration successflly')
                })
                .catch(err=>{
                    console.log(err.message)
                })
                sendEmailVerification(newUser)
                    .then(() => {
                        alert('verify your from your email')
                        setUser(newUser)
                        setSuccess("You registered successfully")
                    })

                console.log(newUser)
            })
            .catch(err => {
                console.log(err.message)
                if (err.message == "Firebase: Error (auth/email-already-in-use).") {
                    setError("This email is already used in the database")
                }
                else if (err.message == 'Firebase: password should be at least 6 characters (auth/weak-password).') {
                    setError('password is too short,password should be at least 6 characters')
                }

            })
    }
    return (
        <div className='max-w-7xl mx-auto'>

            <h1 className='text-center font-bold text-3xl mt-20'>Please register</h1>
            <div className='mt-10 max-w-3xl mx-auto'>
                <form onSubmit={handleRegister} className=''>
                    <label className="input input-bordered flex items-center gap-2 mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input type="text" className="grow" name='userName' placeholder="Username" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input type="text" className="grow" name='photo' placeholder="PhotoUrl" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="email" className="grow" name='email' placeholder="Email" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input type="password" className="grow" name='password' />
                    </label>
                    <div>
                        {
                            error && <p style={{ color: 'red' }}>{error}</p>
                        }
                        {
                            user && <p style={{ color: 'green' }}>{success && user.email}{success}</p>
                        }
                    </div>
                    <span>account? if yes <Link to='/login' className='text-bold text-xl text-blue-500'>Please Login</Link></span><br />
                    
                    <button className="btn btn-accent mt-3 w-36">Register please</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;