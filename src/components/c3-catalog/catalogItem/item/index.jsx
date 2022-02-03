import React, {useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {Button, Card} from "react-bootstrap";
import s from "../style.module.scss";
import {ReactComponent as Like} from "../../../../assets/svg/likeItem.svg";
import {useDispatch} from "react-redux";

import {
    addedToBasketAC,
    addedToLikedAC, removeBasketItemAC,
    removeLikeItemAC,
    toggleBasketAC,
    toggleLikeAC
} from "../cardiItemsreducer";


const Item = ({el, catalogID}) => {
    const {title} = useParams()
    const dispatch = useDispatch()
    const addedToBasket = (el) => {
        dispatch(toggleBasketAC(catalogID, el.id))
        dispatch(addedToBasketAC(catalogID, el.id))
    }
    const toggleLike = (itemID) => {

        if (el.like === true) {
            dispatch(removeLikeItemAC(itemID))
        } else {
            dispatch(addedToLikedAC(catalogID, itemID))
        }
        dispatch(toggleLikeAC(catalogID, itemID))
    }

    const toggleBasket = (itemID) => {

        if (el.isBuy === true) {
            dispatch(removeBasketItemAC(itemID))
        } else {
            dispatch(addedToBasketAC(catalogID, itemID))
        }
        dispatch(toggleBasketAC(catalogID, itemID))
    }

    console.log(el)
    return (

        <Card style={{width: '18rem'}} className={s.items}>

            <Card.Img className={s.items_img} variant="top" src={el.img}/>
            <Card.Body className={s.items_body}>
                <div className={`${s.like} ${el.like ? s.press : s.div}`} onClick={() => toggleLike(el.id)}>
                    <i/>
                </div>

                <h3>{el.price} Br</h3>
                <Card.Title>{el.title}</Card.Title>
                <div className={s.btn_box}>

                    <Button variant={el.isBuy ? "danger" : "primary"} className={s.btn}
                            onClick={() => toggleBasket(el.id)}>{el.isBuy ? 'Убрать с корзины' : 'Добавить в корзину'}</Button>

                    <NavLink
                        to={`/catalog/${title}/${el.title}`}>
                        <Button variant="success" className={s.btn}> Детали</Button> </NavLink>
                </div>
            </Card.Body>

        </Card>

    )

}


export default Item;
