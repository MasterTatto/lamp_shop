import React, {useReducer, useState} from 'react';
import s from './style.module.scss'
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {decrementItem, decrementItemAC} from "./basketReducer";
import {NavLink} from "react-router-dom";
import {
    addedToBasketAC, decrementBasketItemAC, incrementBasketItemAC,
    removeBasketItemAC,
    removeLikeItemAC, toggleBasketAC,
    toggleLikeAC
} from "../c3-catalog/catalogItem/cardiItemsreducer";

const Basket = ({basket, basketLength, forceUpdateHelper, catalogID}) => {
    const dispatch = useDispatch()

    console.log(basket)
    const removeItemBasket = (id) => {
        dispatch(removeBasketItemAC(id))
        dispatch(toggleBasketAC(catalogID, id))
    }

    // let allPrice = basket?.reduce((acc, curr) => (+acc + +curr.price) * curr.count, 0);
    let allPrice = basket?.reduce((acc, curr) => +acc + (+curr.price * curr.count), 0);

    const basketItem = basket?.map((el) => {

        const countInc = (id) => {
            dispatch(incrementBasketItemAC(id))
        }

        const countDec = (id) => {
            dispatch(decrementBasketItemAC(id))
        }

        return (<div className={s.item} key={el.id}>
            <img src={el.img} alt=""/>
            <div className={s.information}>
                <div className={s.info_container}>
                    <h4>Название</h4>
                    <h4>Цена</h4>
                    <h4>Колличество</h4>
                    <h4>Общая цена</h4>
                </div>
                <div className={s.info_container_item}>
                    <div className={s.p}>{el.title}</div>
                    <div className={s.p}>{el.price} Br</div>
                    <div className={s.p}>
                        <div>
                            <Button className={`${s.counter_btn}`} disabled={el.count <= 1}
                                    onClick={() => countDec(el.id)}>-</Button>
                            {el.count}
                            <Button className={`${s.counter_btn}`}
                                    onClick={() => countInc(el.id)}>+</Button>
                        </div>

                    </div>
                    <div className={s.p}>{(+el.count) * (+el.price)} Br</div>
                </div>
                <div className={s.btn_container}>
                    <Button variant="danger" className={s.btn}
                            onClick={() => removeItemBasket(el.id)}>Убрать</Button>
                </div>
            </div>


        </div>)
    })
    return (<div className={s.basket}>
        <h1>Ваша корзина {basketLength === 0 && 'пуста'}</h1>

        <div className={s.basket_items}>
            {basketItem}
        </div>

        {basketLength !== 0 && <div className={s.accept}>
            <div className={s.accept_box}>
                <p>Общая стоимость {allPrice} Br</p>
                <NavLink to={'/pay-page'}> <Button>Оформить заказ</Button></NavLink>
            </div>
        </div>}
    </div>);
};

export default Basket;
