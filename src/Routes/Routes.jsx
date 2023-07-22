
import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Collage from "../Pages/Collage/Collage";
import CollageDetails from "../Pages/Collage/CollageDetails/CollageDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        // errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Collage></Collage>
            },
            {
                path: '/collage-details',
                element: <CollageDetails></CollageDetails>
            },
        ]
    },
]);

export default router;