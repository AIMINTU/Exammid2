import React, { useState } from 'react';
import app from '../../../Firebase/Firebase.config';

import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { Link } from 'react-router-dom';

import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
const Login = () => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [showpass,setShowpass]=useState(true)

    const provider = new GoogleAuthProvider()
    const auth = getAuth(app)
    const loginWithGoogle = () => {


        signInWithPopup(auth, provider)
            .then(result => {

                const SignInUser = result.user;
                setUser(SignInUser)
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    const handleSign = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        setError(null)
        setSuccess(null)
        signInWithEmailAndPassword(auth, email, password)
        console.log(email, password)
            .then(result => {
                if(!result.user.emailVerified){
                    alert('firstly verify you email.otherwise no service')
                    setError('age verify koro')
                    return;
                }
                               
                setSuccess("User login successfully")
                console.log(result.user)
        
            })
            .catch(err => {
                if (err.message == 'Firebase: Error (auth/invalid-Credential).') {
                    setError("Your email is wrong")


                }
                else {
                    setError(err.message)
                }

                console.log(err.message)
            })
    }
    const Logout = () => {
        signOut(auth)
            .then(() => {
                setUser(null)
                console.log("signout successfully")
            })
            .catch(err => {
                setError(err.message)
                console.log(err.message)
            })
    }
    const HideShow=()=>{
        setShowpass(!showpass)
    }

    const loginWithGithub = () => {
        const provider = new GithubAuthProvider();
        const auth = getAuth()
        signInWithPopup(auth, provider)
            .then(result => {
                const githubuser = result.user;
                setUser(githubuser)
                console.log(githubuser)
            })
            .catch(err => {
                console.log(err.message)
            })

    }
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className='text-5xl font-bold'>Login now!</h1>
                        
                        {
                            user && <div>
                                <p className="py-6">
                                    UserName:{user.displayName}
                                </p>
                                <p>
                                    Email:{user.email}
                                </p>
                                <div>
                                    <img src={user.photoURL} alt="picture" />
                                </div>
                            </div>
                        }

                    </div>
                    <div className=" md:w-[700px] bg-base-100 max-w-sm  shadow-2xl">
                        <form className="card-body w-full" onSubmit={handleSign}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='flex items-center'>
                                    <input type={showpass?"password":"text"} placeholder="password" name="password" className="input input-bordered w-full" required />
                                    
                                    {
                                        showpass?<FaEyeSlash className='text-xl relative right-7' onClick={HideShow}></FaEyeSlash>:<FaEye onClick={HideShow} className='text-xl relative right-7' ></FaEye>
                                    }
                                </div>
                                <label className="label">
                                    <Link to='/reset' className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <span>Are you new here?<Link to='/register' className='text-bold text-blue-500 text-xl'>Click to register</Link></span>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>

                            </div>
                            <p className='text-green-600'>{success}</p>
                            <p className='text-red-600'>{error}</p>
                            <button>Verify your email</button>
                        </form>
                        {
                            user ? <button className="btn btn-primary mt-10" onClick={Logout}>LogOut</button> : <div><button className="btn btn-primary mt-10" onClick={loginWithGoogle}>Google Login</button>
                                <button className="btn btn-primary mt-10" onClick={loginWithGithub}>Github Login</button>

                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;