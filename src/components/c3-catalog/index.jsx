import React, {useState} from 'react';
import s from './style.module.scss'
import {Card} from "react-bootstrap";
import {cardItems} from "./data";
import {NavLink, useParams} from "react-router-dom";

const Catalog = () => {
    const cardItem = cardItems.map((el) => {
        return (
            <NavLink to={`/catalog/${el.title}`}>
                <Card style={{width: '18rem'}} key={el.id} className={s.items}>

                    <Card.Img className={s.items_img} variant="top" src={el.img}/>
                    <Card.Body className={s.items_body}>
                        <Card.Title>{el.title}</Card.Title>
                    </Card.Body>

                </Card>
            </NavLink>
        )
    })

    return (
        <div className={s.catalog}>
            <span className={s.category_title}>категории</span>
            <div className={s.items_container}>
                {cardItem}
            </div>
        </div>
    )
        ;
};

export default Catalog;
