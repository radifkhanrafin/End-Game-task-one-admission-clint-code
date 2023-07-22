
import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Collage from "../Pages/Collage/Collage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        // errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Collage></Collage>
            }
        ]
    },
]);

export default router;