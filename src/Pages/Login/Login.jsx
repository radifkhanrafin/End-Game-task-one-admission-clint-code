import React, { useContext, useState } from 'react';
import Lottie from "lottie-react";
import loginanimation from "../../../public/login animation.json";
import SocalLogin from '../../Component/SocalLogin/SocalLogin';
import { Link, useNavigate } from "react-router-dom";
import { FaMinus } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvaider/AuthProvaider';
import Swal from 'sweetalert2';

const Login = () => {
    const [modal, setModal] = useState(false);
    const { login, resetYourPass } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleUserLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        console.log(form)
        const email = form.email.value
        const password = form.password.value;
        console.log(email, password)
        login(email, password)
            .then(result => {

                console.log(result.user)
                const user = result.user;
                const userinfo = { name: user.displayName, email: user.email, userProfile: user.photoURL };
                console.log(userinfo)
                fetch('http://localhost:5000/users', {
                    // fetch('https://collage-admission-server-psi.vercel.app/user', {
                    method: "POST",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(userinfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            console.log('data', data)
                            Swal.fire('User Added Successfull')
                        }

                    })
                navigate('/')
            })
            .catch(error => console.log(error))
    }


    const resetPass = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        console.log(email)
        resetYourPass(email)
            .then(result => {
                console.log(result)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className=''>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className=" flex-shrink-0  py-16 max-w-xl shadow-2xl  bg-base-500 px-10  rounded-lg">
                        <form onSubmit={handleUserLogin} className="w-auto lg:w-[500px] space-y-6">

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
                            </div>

                            <div className="form-control mt-6">
                                <input type="submit" className='btn btn-outline' value="Login" />
                            </div>
                        </form>
                        <button onClick={() => { setModal(true) }} className="pl-4 text-start underline">Forget Password</button>
                        <div className="divider">OR</div>
                        {modal &&
                            <div className="absolute top-32  right-56 w-[550px] text-center  text-white h-[70vh]  overflow-x-auto bg-black  rounded-md ">
                                <button
                                    onClick={() => { setModal(false) }}
                                    className="absolute top-28 right-1/2 bg-error p-3 rounded-full">
                                    <FaMinus />
                                </button>
                                <div className="mt-16 px-8">
                                    <form onSubmit={resetPass} className='mt-36' >
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-lg text-white">Email : </span>
                                            </label>
                                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                                        </div>
                                        <input type="submit" className='btn btn-outline w-full text-white mt-8' value="Send Verification Code" />
                                    </form>
                                </div>

                            </div>
                        }

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