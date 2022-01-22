import React, {useEffect} from 'react';
import s from './style.module.scss'
import {Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Similar = ({randomItems, title}) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [randomItems])

    return (
        <>
            <h2 className={s.title}>Похожие товары</h2>

            <div className={s.similar}>

                {randomItems.map((el) => {
                    return (
                        <div className={s.item} key={el.id}>
                            <div className={s.img} style={{backgroundImage: `url(${el.img})`}}/>
                            <p>{el.title}</p>
                            <div className={s.item_bottom}>
                                <p>{el.price} Br</p>
                                <NavLink to={`/catalog/${title}/${el.title}`}><Button>Смотреть</Button></NavLink>
                            </div>

                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default Similar;
