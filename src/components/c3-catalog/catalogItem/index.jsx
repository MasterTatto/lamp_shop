import React from 'react';
import {NavLink, useParams} from "react-router-dom";
import s from "./style.module.scss";
import {cardItems} from "../data";
import {Button, Card} from "react-bootstrap";

const CatalogItem = ({data, addedItem}) => {
    const {title} = useParams()

    const cardItem = data.find(el => el.title === title).items.map((el) => {
        return (
            <NavLink to={`/catalog/${title}`} key={el.id}>
                <Card style={{width: '18rem'}} key={el.id} className={s.items}>

                    <Card.Img className={s.items_img} variant="top" src={el.img}/>
                    <Card.Body className={s.items_body}>
                        <h3>{el.price} Br</h3>
                        <Card.Title>{el.title}</Card.Title>
                        <Button color={'primary'} onClick={() => addedItem(el)}>Добавить в корзину</Button>
                    </Card.Body>

                </Card>
            </NavLink>)
    })
    return (
        <div className={s.catalog}>
            <NavLink to={'/catalog'} className={s.category_title}>категории</NavLink>
            <> / <span className={`${s.category_title} ${s.active}`}>  {title} </span></>
            <div className={s.items_container}>
                {cardItem}
            </div>
        </div>);
};

export default CatalogItem;
