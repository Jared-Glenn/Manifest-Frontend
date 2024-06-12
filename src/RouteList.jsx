import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Kinships from "./Kinships";
import KinshipDetails from "./KinshipDetails";

function RouteList() {

    return (
        <BrowserRouter >
            <Navbar />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/kinships" element={ <Kinships /> } />
                <Route path="/kinships/:name" element={ <KinshipDetails /> } />
            </Routes>
        </BrowserRouter>
    )
}
    

export default RouteList;