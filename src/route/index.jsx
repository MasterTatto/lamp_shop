import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../components/c2-home";
import Catalog from "../components/c3-catalog";
import Info from "../components/c4-info";
import Garant from "../components/c5-garant";
import Contact from "../components/c6-contact";
import CatalogItem from "../components/c3-catalog/catalogItem";
import {cardItems} from "../components/c3-catalog/data";
import Basket from "../components/c8-basket";

const Routers = ({basket, setBasket}) => {
    const addedBasket = (data) => {
        setBasket([...basket, data])
    }

    const removeBasket = (id) => {
        const data = basket.filter((el) => el.id !== id)
        setBasket([...data])
    }

    console.log(basket)
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/catalog" element={<Catalog/>}/>
            <Route path="/catalog/:title" element={<CatalogItem data={cardItems} addedItem={addedBasket}/>}/>
            <Route path="/info" element={<Info/>}/>
            <Route path="/garant" element={<Garant/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/basket" element={<Basket data={basket} removeBasket={removeBasket}/>}/>
        </Routes>
    );
};

export default Routers;
