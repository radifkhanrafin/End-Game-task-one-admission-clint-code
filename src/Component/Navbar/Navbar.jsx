import { useContext, useState } from "react";
import { FaBars, FaMinus } from "react-icons/fa";
import Menu from "./Menu";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvaider/AuthProvaider";
const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const [menu, setMenu] = useState(false);
    const navigate=useNavigate();
    // console.log(user)
    const handleLogOut = () => {
        logOut()
        navigate('/login')
        console.log('logout')
    }

    return (
        <div className='bg-slate-300 '>
            <div className='flex justify-between items-center max-w-[1250px] container mx-auto h-16 px-16 lg:px-0'>


                <div className=''>
                    <img className="w-14" src="https://i.ibb.co/qYwCnZZ/logo.png" alt="" />
                </div>


                <div className='hidden md:flex items-center gap-6'>
                    <Menu
                        handleLogOut={handleLogOut}
                    ></Menu>

                </div>

                {
                    menu &&
                    <div className=" lg:hidden absolute top-[70px] right-0 text-xl flex flex-col gap-3 right-5py-5 px-16 z-40">
                        <Menu
                         handleLogOut={handleLogOut}
                        ></Menu>
                    </div>
                }


                <div className=''>
                    {
                        user ?
                            <button onClick={handleLogOut} className="hidden  md:flex  btn btn-outline">Log Out</button> :
                            <Link to='/login' className="hidden  md:flex text-lg btn btn-outline">Login</Link>
                    }

                    {
                        menu ? <button
                            onClick={() => { setMenu(!menu) }}
                            className="flex md:hidden">
                            <FaMinus className="text-2xl" />
                        </button>
                            :
                            <>
                                <button
                                    onClick={() => { setMenu(!menu) }}
                                    className="flex md:hidden">
                                    <FaBars className="text-2xl " />
                                </button>

                            </>

                    }



                </div>
            </div>
        </div>

    );
};

export default Navbar;