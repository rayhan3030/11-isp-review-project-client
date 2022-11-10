import { createBrowserRouter } from "react-router-dom";
import AddService from "../HomePage/Add Service/AddService";
import Blog from "../HomePage/Blog/Blog";
import Home from "../HomePage/Header/Home/Home";
import Login from "../HomePage/Login/Login";
import Register from "../HomePage/Register/Register";
import Reviews from "../HomePage/Reviews/Reviews";
import ReviewsAll from "../HomePage/Reviews/ReviewsAll";
import ServicesAll from "../HomePage/Services/ServicesAll";

import ServicesCardDetails from "../HomePage/Services/ServicesCardDetails";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services/:id',
                element: <ServicesCardDetails></ServicesCardDetails>,
                loader: ({ params }) => fetch(`https://isp-service-server.vercel.app/services/${params.id}`)
            },
            //-----------------------------------------------------------------------------------------------------------
            {
                path: '/reviewsall',
                element: <ReviewsAll></ReviewsAll>,
                loader: fetch('https://isp-service-server.vercel.app/reviews')
            },
            //-----------------------------------------------------------------------------------------------------------
            {
                path: '/services/:id',
                element: <ServicesCardDetails></ServicesCardDetails>,
                loader: ({ params }) => fetch(`https://isp-service-server.vercel.app/services3/${params.id}`)
            },
            {
                path: '/services',
                element: <ServicesAll></ServicesAll>
            },
            {
                path: '/reviews',
                element: <PrivateRoute><Reviews></Reviews></PrivateRoute>
            },
            {
                path: '/addservices',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>,
                loader: ({ params }) => fetch('https://isp-service-server.vercel.app/services/')

            }

        ]
    }
]);

export default router;