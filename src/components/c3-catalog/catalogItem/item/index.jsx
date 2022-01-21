import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {Button, Card} from "react-bootstrap";
import s from "../style.module.scss";
import {ReactComponent as Like} from "../../../../assets/svg/likeItem.svg";
import {useDispatch} from "react-redux";
import {addedToBasketAC} from "../../../c8-basket/basketReducer";
import {
    addedToLikedAC,
    removeLikedInCategory,
    removeLikeItemAC,
    removeToLikedAC,
    toggleLikeAC
} from "../cardiItemsreducer";


const Item = ({el, catalogID}) => {
    const dispatch = useDispatch()
    const addedToBasket = (data) => {
        dispatch(addedToBasketAC(data, el.id))
    }
    const toggleLike = (itemID) => {

        if (el.like === true) {
            dispatch(removeLikeItemAC(itemID))
        } else {
            dispatch(addedToLikedAC(catalogID, itemID))
        }
        dispatch(toggleLikeAC(catalogID, itemID))
    }

    return (

        <Card style={{width: '18rem'}} className={s.items}>

            <Card.Img className={s.items_img} variant="top" src={el.img}/>
            <Card.Body className={s.items_body}>
                <div className={`${s.like} ${el.like ? s.press : s.div}`} onClick={() => toggleLike(el.id)}>
                    <i/>
                </div>

                <h3>{el.price} Br</h3>
                <Card.Title>{el.title}</Card.Title>
                <Button variant="success" className={s.btn} onClick={() => addedToBasket(el)}>Добавить в
                    корзину</Button>

                <Button variant="primary" className={s.btn}><NavLink to={'/like'}> Детали </NavLink></Button>
            </Card.Body>

        </Card>

    )

}


export default Item;
