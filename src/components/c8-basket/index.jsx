import React, {useReducer, useState} from 'react';
import s from './style.module.scss'
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {decrementItem, removeItemFromBasket} from "./basketReducer";

const Basket = ({basket, basketLength, forceUpdateHelper}) => {
    const dispatch = useDispatch()


    const removeItemBasket = (id) => {
        dispatch(removeItemFromBasket(id))
    }

    let allPrice = basket?.reduce((acc, curr) => +acc + +curr.price, 0);


    let baskItem = basket.reduce((acc, curr) => {
        let finder = acc.findIndex((f) => f.id === curr.id)
        const candidate = acc[finder]

        if (!candidate) {
            const item = {...curr, count: 1}
            return acc.concat([item])
        } else {
            candidate.count++
            return acc
        }
    }, [])


    const basketItem = baskItem?.map((el) => {

        const countInc = (id) => {

            if (el.id === id) {
                basket.push(el)
            }

            forceUpdateHelper()
        }

        const countDec = (id) => {

            // const count = basket.filter(f => f.id === id)
            // if (count.length >= 15) return
            const currentCount = basket.filter(f => f.id === id)
            const otherCount = basket.filter(f => f.id !== id)
            // basket = currentCount.concat([...otherCount])
            console.log(basket)
            //
            if (el.id === id) {
                basket.pop()
            }

            forceUpdateHelper()

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
                <Button>Оформить заказ</Button>
            </div>
        </div>}
    </div>);
};

export default Basket;
