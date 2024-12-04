import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import HomePage from "../pages/HomePage";
import AuthenticationPage from "../pages/Authentication";
import Login from "../components/Login";
import Registration from "../components/Registration";
import ErrorPage from "../pages/ErrorPage";
import VisaDetailsPage from "../pages/VisaDetailsPage";
import AddVisaPage from "../pages/AddVisaPage";
import AllVisasPage from "../pages/AllVisasPage";
import PrivateRoutes from "./PrivateRoutes";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/all_visas",
                element: <AllVisasPage></AllVisasPage>
            },
            {
                path: "/add_visa",
                element: <PrivateRoutes><AddVisaPage></AddVisaPage></PrivateRoutes>
            },
            {
                path: "/my_added_visas"
            },
            {
                path: "/my_visa_application"
            },
            {
                path: "/visa_details/:id",
                element: <VisaDetailsPage></VisaDetailsPage>
            },
            {
                path: "/authentication",
                element: <AuthenticationPage></AuthenticationPage>,
                children: [
                    {
                        path: "/authentication",
                        element: <Login></Login>
                    },
                    {
                        path: "/authentication/register",
                        element: <Registration></Registration>
                    }
                ]
            }
        ]
    },
]);

export default router;