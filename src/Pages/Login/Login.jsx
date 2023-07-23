import React from 'react';
import Lottie from "lottie-react";
import loginanimation from "../../../public/login animation.json";
import SocalLogin from '../../Component/SocalLogin/SocalLogin';
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className=''>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className=" flex-shrink-0  py-16 max-w-xl shadow-2xl  bg-base-500 px-10  rounded-lg">
                        <form className="w-auto lg:w-[500px] space-y-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="divider">OR</div>

                        <SocalLogin></SocalLogin>
                        <div className="divider">OR</div>
                        <p className='text-center text-lg link'> <Link to='/signup'>Create a New Account</Link></p>


                    </div>
                    <div className="text-center lg:text-left">
                        <Lottie animationData={loginanimation} className='w-auto lg:w-[500px]'></Lottie>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;