import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../components/c2-home";
import Catalog from "../components/c3-catalog";
import Info from "../components/c4-info";
import Garant from "../components/c5-garant";
import Contact from "../components/c6-contact";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/catalog" element={<Catalog/>}/>
            <Route path="/info" element={<Info/>}/>
            <Route path="/garant" element={<Garant/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    );
};

export default Routers;
