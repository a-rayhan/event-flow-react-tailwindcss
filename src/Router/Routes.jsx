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

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/services/details',
                element: <PrivateRoute><ServicesDetails /></PrivateRoute>
            },
            {
                path: '/events',
                element: <Events />
            },
            {
                path: '/schedules',
                element: <PrivateRoute><Schedules /></PrivateRoute>
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/tickets',
                element: <PrivateRoute><Tickets /></PrivateRoute>
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