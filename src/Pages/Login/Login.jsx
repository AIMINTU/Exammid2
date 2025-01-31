import React, { useState } from 'react';
import app from '../../../Firebase/Firebase.config';

import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
const Login = () => {
    const [user, setUser] = useState(null)


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
    const Logout=()=>{
        signOut(auth)
        .then(()=>{
            setUser(null)
            console.log("signout successfully")
        })
        .catch(err=>{
            console.log(err.message)
        })
    }

    const loginWithGithub=()=>{
        const provider=new GithubAuthProvider();
        const auth=getAuth()
        signInWithPopup(auth,provider)
        .then(result=>{
            const githubuser=result.user;
            setUser(githubuser)
            console.log(githubuser)
        })
        .catch(err=>{
            console.log(err.message)
        })

    }
    return (
        <div className='max-w-7xl mx-auto'>
            this is login page
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        {
                            user && <div>
                                <p className="py-6">
                                    UserName:{user.displayName}
                                </p>
                                <p>
                                    Email:{user.email}
                                </p>
                                <div>
                                    <img src={user.photoURL} alt="" />
                                </div>
                            </div>
                        }

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>

                            </div>
                        </form>
                        {
                            user ?<button className="btn btn-primary mt-10" onClick={Logout}>LogOut</button>:<div><button className="btn btn-primary mt-10" onClick={loginWithGoogle}>Google Login</button>
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