import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvaider/AuthProvaider";

const Menu = ({ handleLogOut }) => {
    const { user } = useContext(AuthContext)
    return (
        <>
            <Link to='/' className=" bg-slate-300 font-semibold text-lg px-3 py-1 rounded-md">Home</Link>
            <Link to='/collage' className=" bg-slate-300 font-semibold text-lg px-3 py-1 rounded-md">Collage</Link>
            <Link to='/admission' className=" bg-slate-300 font-semibold text-lg px-3 py-1 rounded-md">Admission</Link>
            <Link to='/mycollage' className=" bg-slate-300 font-semibold text-lg px-3 py-1 rounded-md">My College</Link>
            <Link className=" bg-slate-300 font-semibold text-lg px-3 py-1 rounded-md"><img src={user?.photoURL} className="w-12 rounded-full" alt="" /></Link>

            {
                user ?
                    <button onClick={handleLogOut} className="bg-slate-300 font-semibold text-lg px-3 py-1 rounded-md lg:hidden">Log Out</button> :
                    <Link to='/login' className=" bg-slate-300 font-semibold text-lg px-3 py-1 rounded-md  lg:hidden">Login</Link>
            }
        </>
    );
};

export default Menu;