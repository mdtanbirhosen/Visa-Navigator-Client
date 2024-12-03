import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import HomePage from "../pages/HomePage";
import AuthenticationPage from "../pages/Authentication";
import Login from "../components/Login";
import Registration from "../components/Registration";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/authentication",
                element: <AuthenticationPage></AuthenticationPage>,
                children:[
                    {
                        path:"/authentication",
                        element:<Login></Login>
                    },
                    {
                        path:"/authentication/register",
                        element:<Registration></Registration>
                    }
                ]
            }
        ]
    },
]);

export default router;