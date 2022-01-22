import React from 'react';
import {NavLink, useParams} from "react-router-dom";
import s from "./style.module.scss";
import Item from "./item";


const CatalogItem = ({cardItems, catalogID}) => {

    const {title} = useParams()

    const item = cardItems?.items?.map((el) => <Item key={el.id}
                                                     title={title} el={el} catalogID={cardItems.cardID}/>)

    return (
        <div className={s.catalog}>
            <NavLink to={'/catalog'} className={s.category_title}>категории</NavLink>
            <> / <span className={`${s.category_title} ${s.active}`}>  {title} </span></>
            <div className={s.items_container}>
                {item}
            </div>
        </div>);
};

export default CatalogItem;
