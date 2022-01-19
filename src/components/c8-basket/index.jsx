import React from 'react';
import s from './style.module.scss'
import {Button} from "react-bootstrap";

const Basket = ({data, removeBasket}) => {
    let allPrice = data.reduce((acc, curr) => +acc + +curr.price, 0);

    const basketItem = data?.map((el) => {

        return (
            <div className={s.item} key={el.id}>
                <img src={el.img} alt=""/>
                <p>{el.title}</p>
                <p>{el.price} Br</p>
                <p>1</p>
                <p>{el.price} Br</p>
                <div onClick={() => removeBasket(el.id)}>X</div>
            </div>
        )
    })
    return (
        <div className={s.basket}>
            <h1>Ваша корзина</h1>

            <div className={s.basket_items}>
                {basketItem}
            </div>

            <div className={s.accept}>
                <div className={s.accept_box}>
                    <p>Общая стоимость {allPrice} Br</p>
                    <Button>Оформить заказ</Button>
                </div>

            </div>
        </div>
    );
};

export default Basket;
