
import {
    createBrowserRouter,
  } from "react-router-dom";
import App from '../App';
import Login from '../Pages/Login/Login';
import SignIn from '../Pages/SignIn/SignIn';
import Home from '../Pages/Home/Home';
import Add_toys from '../Pages/Add_toys/Add_toys';
import My_toys from '../Pages/My_toys/My_toys';
import Blog from '../Pages/Blog/Blog';
import All_toys from '../Pages/All_Toys/All_toys';
import Modal_Data from '../Component/Modal/Modal_Data';
import UpdateData from '../Pages/UpdateData/UpdateData';
import Details from '../Component/Details/Details';
import PrivateRoutes from './PrivateRoutes';
import ErrorPage from '../Pages/Error_Page/ErrorPage';
const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signIn',
                element: <SignIn></SignIn>
            },
            {
                path:'/addtoy',
                element: <PrivateRoutes><Add_toys></Add_toys></PrivateRoutes>
            },
            {
                path:'/mytoys',
                element: <PrivateRoutes><My_toys></My_toys></PrivateRoutes>
            },
            {
                path:'/allToys',
                element: <All_toys></All_toys>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/updateData/:id',
                element: <UpdateData></UpdateData>,
                loader : ({params})=> fetch(`https://b7a11-toy-marketplace-server-side-radifkhanrafin-6yl9.vercel.app/toys/${params.id}`)
            },
            {
                path:'/toysDetails/:id',
                element: <PrivateRoutes><Details></Details></PrivateRoutes>,
                loader : ({params})=> fetch(`https://b7a11-toy-marketplace-server-side-radifkhanrafin-6yl9.vercel.app/toys/${params.id}`)
            },
        ]
    },
]);

export default router;