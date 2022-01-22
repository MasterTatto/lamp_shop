import React, {useCallback, useMemo, useState} from 'react';
import s from './style.module.scss'
import {NavLink, useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
import Specifications from "./specifications";
import Description from "./decription";
import Similar from "./similar";
import {logDOM} from "@testing-library/react";
import {useDispatch} from "react-redux";
import {addedToBasketAC} from "../c8-basket/basketReducer";
import {addedToLikedAC, removeLikeItemAC, toggleLikeAC} from "../c3-catalog/catalogItem/cardiItemsreducer";

const Info = ({cardItems}) => {
    const [showNavigate, setShowNavigate] = useState(1)
    const dispatch = useDispatch()
    const {title} = useParams()
    const {name} = useParams()
    const item = cardItems?.items?.find(f => f.title === name)
    console.log(cardItems)
    const addedItemToBasket = (data) => {
        dispatch(addedToBasketAC(data))
    }

    const toggleLike = (itemID) => {

        if (item.like === true) {
            dispatch(removeLikeItemAC(itemID))
        } else {
            dispatch(addedToLikedAC(cardItems.cardID, itemID))
        }
        dispatch(toggleLikeAC(cardItems.cardID, itemID))
    }

    let getArrayElements = (arr, n = 4) => {
        let resultArray = [];
        let array = arr.slice();
        n = n > array.length ? array.length : n

        for (let i = 0; i < n; i += 1) {
            resultArray.push(array.splice(Math.floor(Math.random() * array.length), 1)[0]);
        }
        return resultArray;
    }

    const randomItems = getArrayElements(cardItems.items, 4)


    return (
        <div className={s.info}>
            <NavLink to={'/catalog'} className={s.category_title}>категории</NavLink>
            <> / <NavLink to={`/catalog/${title}`} className={`${s.category_title}`}>  {title} </NavLink> / <span
                className={`${s.category_title} ${s.active}`}>{item.title}</span></>
            <div className={s.item}>
                <div className={s.top_block}>
                    <div className={s.img} style={{backgroundImage: `url(${item.img})`}}/>
                    <div className={s.info_item}>
                        <div>
                            <h2>{item.title}</h2>
                            <div><span className={s.name_price}>Цена</span> <span
                                className={s.price}>{item.price} Br</span>
                            </div>
                            <div className={s.right_top_info_item}>
                                <Button onClick={() => addedItemToBasket(item)}>Купить</Button>
                                <div className={`${s.like} ${item.like ? s.press : s.div}`}
                                     onClick={() => toggleLike(item.id)}>
                                    <i/>
                                </div>
                            </div>
                        </div>
                        <div className={s.info_dostavka}>
                            <div className={s.info_dostavka_item}><p>Доставка в
                                г Минск
                            </p></div>
                            <div className={s.info_dostavka_item}><p>Курьерская доставка</p><span>5 Br</span></div>
                            <div className={s.info_dostavka_item}><p>Доставка в Пункты выдачи </p>
                                <span>Бесплатно</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.middle_block}>
                    <div className={s.navigate}>
                        <h3 onClick={() => setShowNavigate(1)}
                            className={`${showNavigate === 1 && s.activeNav}`}>Описание</h3>
                        <h3 onClick={() => setShowNavigate(2)}
                            className={`${showNavigate === 2 && s.activeNav}`}>Характеристики</h3>
                    </div>
                    {showNavigate === 1 && <Description/>}
                    {showNavigate === 2 && <Specifications/>}
                </div>
                <Similar randomItems={randomItems} title={title}/>
            </div>
        </div>);
};

export default Info;
