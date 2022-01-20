import React from 'react';
import s from './style.module.scss'
import {Button, Card} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {addedToBasketAC} from "../c8-basket/basketReducer";
import {removeLikeItemAC} from "../c3-catalog/catalogItem/cardiItemsreducer";

const Liked = ({liked, catalogID}) => {
    const dispatch = useDispatch();
    const addedToBasket = (data) => {
        dispatch(addedToBasketAC(data))
    }

    const toggleLike = (itemID) => {
        dispatch(removeLikeItemAC(itemID,catalogID))
    }

    const likedItem = liked?.filter(f => f.like).map((el) =>
        <Card style={{width: '18rem'}} className={s.items} key={el.id}>

            <Card.Img className={s.items_img} variant="top" src={el.img}/>
            <Card.Body className={s.items_body}>
                <div className={`${s.like} ${el.like && s.press}`}
                     onClick={() => {
                         console.log(el)
                         toggleLike(el.id)
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
