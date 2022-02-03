import React from 'react';
import s from './style.module.scss'
import {Button, Card} from "react-bootstrap";
import {useDispatch} from "react-redux";

import {addedToBasketAC, removeLikeItemAC, toggleLikeAC} from "../c3-catalog/catalogItem/cardiItemsreducer";

const Liked = ({liked, catalogID}) => {
    const dispatch = useDispatch();
    const addedToBasket = (data) => {
        dispatch(addedToBasketAC(data))
    }

    const removeLikeItem = (itemID) => {
        dispatch(removeLikeItemAC(itemID))
        dispatch(toggleLikeAC(catalogID, itemID))
    }

    const likedItem = liked?.map((el) =>
        <Card style={{width: '18rem'}} className={s.items} key={el.id}>

            <Card.Img className={s.items_img} variant="top" src={el.img}/>
            <Card.Body className={s.items_body}>
                <div className={`${s.like} ${s.press}`}
                     onClick={() => {
                         removeLikeItem(el.id)
                     }}>
                    <i/>
                </div>

                <h3>{el.price} Br</h3>
                <Card.Title>{el.title}</Card.Title>
                <Button variant="success" onClick={() => addedToBasket(el)} className={s.btn}>Добавить в
                    корзину</Button>
            </Card.Body>

        </Card>
    )
    return (
        <div className={s.basket}>
            <h1>Избранное</h1>
            <div className={s.items_container}>
                {likedItem}
            </div>
        </div>
    );
};

export default Liked;
