
import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Collage from "../Pages/Collage/Collage";
import CollageDetails from "../Pages/Collage/CollageDetails/CollageDetails";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Admission from "../Pages/Admission/Admission";
import AdmissionForm from "../Component/AdmissionForm/AdmissionForm";
import MyCollage from "../Pages/My_collage/MyCollage";
import MyCollageData from "../Pages/My_collage/MyCollageData/MyCollageData";
import Home from "../Pages/Home/Home";
import DetailsAdmisson from "../Component/DetailsAdmisson/DetailsAdmisson";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        // errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/collage',
                element: <Collage></Collage>
            },
            {
                path: '/admission',
                element: <Admission></Admission>
            },
            {
                path: '/detailsadmisson',
                element: <DetailsAdmisson></DetailsAdmisson>
            },
            {
                path: '/admissionform',
                element: <AdmissionForm></AdmissionForm>
            },
            {
                path: '/collage-details',
                element: <CollageDetails></CollageDetails>
            },
            {
                path: '/mycollage',
                element: <MyCollage></MyCollage>
            },
            {
                path: '/mycollagedata',
                element: <MyCollageData></MyCollageData>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    },
]);

export default router;