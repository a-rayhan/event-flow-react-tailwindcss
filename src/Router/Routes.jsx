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
                path: '/events',
                element: <Events />
            },
            {
                path: '/schedules',
                element: <Schedules />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/tickets',
                element: <Tickets />
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