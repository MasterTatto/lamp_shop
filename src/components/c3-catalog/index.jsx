import React from 'react';
import s from './style.module.scss'
import {Card} from "react-bootstrap";
import {NavLink} from "react-router-dom";


const Catalog = ({setCatalogID, card}) => {

    const cardItem = card.map((el) => {
        return (
            <NavLink to={`/catalog/${el.title}`} key={el.id} onClick={() => setCatalogID(el.id)}>
                <Card style={{width: '18rem'}} className={s.items}>

                    <Card.Img className={s.items_img} variant="top" src={el.img}/>
                    <Card.Body className={s.items_body}>
                        <Card.Title>{el.title}</Card.Title>
                    </Card.Body>

                </Card>
            </NavLink>
        )
    })

    return (
        <div className={s.catalog}>
            <span className={s.category_title}>категории</span>
            <div className={s.items_container}>
                {cardItem}
            </div>
        </div>
    )
        ;
};

export default Catalog;
