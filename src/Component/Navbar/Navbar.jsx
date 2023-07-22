import { useState } from "react";
import { FaBars, FaMinus } from "react-icons/fa";
import Menu from "./Menu";

const Navbar = () => {

    const [menu, setMenu] = useState(false);
    // console.log(menu)

    return (
        <div className='bg-slate-300 '>
            <div className='flex justify-between items-center max-w-[1250px] container mx-auto h-16 px-16 lg:px-0'>


                <div className=''>Logo</div>


                <div className='hidden md:flex gap-8'>
                    <Menu></Menu>

                </div>

                {
                    menu &&
                    <div className=" lg:hidden absolute top-[70px] right-0 text-xl flex flex-col gap-5 right-5py-5 px-16">
                        <Menu></Menu>
                    </div>
                }


                <div className=''>
                    <span className="hidden  md:flex"> Bar</span>
                    {
                        menu ? <button
                            onClick={() => { setMenu(!menu) }}
                            className="flex md:hidden">
                            <FaMinus  className="text-2xl"/>
                        </button>
                            :
                            <>
                            <button
                                onClick={() => { setMenu(!menu) }}
                                className="flex md:hidden">
                                <FaBars  className="text-2xl "/>
                            </button>

                            </>
                            
                    }



                </div>
            </div>
        </div>

    );
};

export default Navbar;