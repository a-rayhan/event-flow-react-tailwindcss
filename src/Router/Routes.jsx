import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Events from "../Pages/Events/Events";
import Schedules from "../Pages/Schedules/Schedules";
import About from "../Pages/About/About";
import Tickets from "../Pages/Tickets/Tickets";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import ServicesDetails from "../Pages/ServicesDetails/ServicesDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('../services.json')
            },
            {
                path: '/services',
                element: <Services />,
                loader: () => fetch('../services.json')
            },
            {
                path: '/services/:detailsId',
                element: <PrivateRoute><ServicesDetails /></PrivateRoute>,
                loader: () => fetch('../services.json')
            },
            {
                path: '/events',
                element: <Events />
            },
            {
                path: '/schedules',
                element: <PrivateRoute><Schedules /></PrivateRoute>,
                loader: () => fetch('../schedules.json')
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/tickets',
                element: <PrivateRoute><Tickets /></PrivateRoute>,
                loader: () => fetch('../tickets.json')
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])

export default router;