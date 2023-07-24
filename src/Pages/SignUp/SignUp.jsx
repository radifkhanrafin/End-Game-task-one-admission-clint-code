import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import SocalLogin from '../../Component/SocalLogin/SocalLogin';
import signupanimation from "../../../public/animation_lke04xi2.json";
import { AuthContext } from '../../AuthProvaider/AuthProvaider';
const SignUp = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                updateUserProfile(name, photo)
                    .then(result => {
                        navigate('/')
                        console.log(result.user)
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                console.log(error)
            })


    }

    return (
        <div className=''>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className=" flex-shrink-0  py-16 max-w-xl shadow-2xl  bg-base-500 px-10  rounded-lg">
                        <form onSubmit={handleSignUp} className="w-auto lg:w-[500px] space-y-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg"> Photo URL</span>
                                </label>
                                <input type="url" placeholder="Profile Photo URL" name='photo' className="input input-bordered " />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className='btn btn-outline' value="Sign Up" />
                            </div>
                        </form>


                        <div className="divider">OR</div>
                        <SocalLogin></SocalLogin>
                        <div className="divider">OR</div>
                        <p className='text-center text-lg link'> <Link to='/login'>Already Have An Account</Link></p>
                    </div>
                    <div className="text-center lg:text-left">
                        <Lottie animationData={signupanimation} className='w-auto lg:w-[500px]'></Lottie>
                    </div>
                </div>
            </div>


        </div>
    )


};

export default SignUp;