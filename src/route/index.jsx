import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../components/c2-home";
import Catalog from "../components/c3-catalog";
import Info from "../components/c4-info";
import Garant from "../components/c5-garant";
import Contact from "../components/c6-contact";
import CatalogItem from "../components/c3-catalog/catalogItem";
import Basket from "../components/c8-basket";
import {useSelector} from "react-redux";
import Liked from "../components/c8-liked";
import PayInfo from "../components/c9-pay_info";
import PayPage from "../components/c9-pay_page";

const Routers = ({basket, liked, forceUpdateHelper}) => {
    const [catalogID, setCatalogID] = useState()
    const card = useSelector((state) => state.card)
    const cardItems = useSelector((state) => state.cardItems.cards)

    let baskItem = basket.reduce((acc, curr) => {
        let finder = acc.findIndex((f) => f.id === curr.id)
        const candidate = acc[finder]

        if (!candidate) {
            const item = {...curr, count: 1}
            return acc.concat([item])
        } else {
            candidate.count++
            return acc
        }
    }, [])

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/catalog" element={<Catalog setCatalogID={setCatalogID} card={card}/>}/>
            <Route path="/catalog/:title"
                   element={<CatalogItem cardItems={cardItems[catalogID]} catalogID={catalogID}/>}/>
            <Route path="/catalog/:title/:name" element={<Info cardItems={cardItems[catalogID]}/>}/>
            <Route path="/garant" element={<Garant/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/basket" element={<Basket catalogID={catalogID} basket={basket} basketLength={basket.length}
                                                   forceUpdateHelper={forceUpdateHelper}/>}/>
            <Route path="/liked" element={<Liked liked={liked} catalogID={catalogID}/>}/>
            <Route path="/pay-info" element={<PayInfo/>}/>
            <Route path="/pay-page" element={<PayPage baskItem={baskItem}/>}/>

        </Routes>);
};

export default Routers;
