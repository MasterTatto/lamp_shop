import React from 'react';
import s from './style.module.scss'
import {Button, Card} from "react-bootstrap";
import {cardItems} from "./data";
import Container from "../../common/container/container";

const Catalog = () => {
    const cardItem = cardItems.map((el) => {
        return (
            <Card style={{width: '18rem'}} key={el.id} className={s.items}>
                <Card.Img className={s.items_img} variant="top" src={el.img}/>
                <Card.Body className={s.items_body}>
                    <Card.Title>{el.title}</Card.Title>
                </Card.Body>
            </Card>
        )
    })

    return (
        <div className={s.catalog}>
            <h1>Выберите подходящую для вас категорию</h1>
            <div className={s.items_container}>
                {cardItem}
            </div>
        </div>
    );
};

export default Catalog;
