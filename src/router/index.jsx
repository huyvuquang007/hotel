import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home/Home";
import Facilities from "../pages/facilities/Facilities";
import Rooms from "../pages/rooms/Rooms";
import Contact from "../pages/contact/Contact";
import Layout from "../layout/Layout";
import RoomDetail from "../pages/roomDetail/RoomDetail";
import Booking from "../pages/booking/Booking";
import SignUp from "../pages/login/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },

            {
                path: "facilities",
                element: <Facilities />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "rooms",
                element: <Rooms />,
            },
            {
                path: "rooms/:id",
                element: <RoomDetail />,
            },
            {
                path: "booking",
                element: <Booking />,
            },
        ],
    },
    {
        path: "/sign-up",
        element: <SignUp />,
    },
]);

export default router;
