import React from 'react';
import s from './style.module.scss'
import {cards} from "./data";
import Image from 'react-bootstrap/Image'
import {Carousel} from "react-bootstrap";
import {useSelector} from "react-redux";

const Home = () => {
    const slides = cards.map((el) => {
        return (
            <Carousel.Item className={s.carousel_item} key={el.id}>
                <div style={{backgroundImage: `url(${el.img})`}} className={s.img}/>
            </Carousel.Item>
        )
    })

    return (
        <div className={s.home}>

            <div className={s.info_container}>
                <h1> ДОБРО ПОЖАЛОВАТЬ В МАГАЗИН <span className={s.name}>3Д-СВЕТИЛЬНИКИ.РФ</span></h1>
                <Carousel className={s.carousel}>
                    {slides}
                </Carousel>
                <p className={s.before1}>Вашему вниманию предлагаются эксклюзивные 3D Светильники от Российского
                    производителя.Только у нас Вы
                    вседа сможете приобрести светильник,выполенный по индивидуальному дизайну,фото-светильник,а так же
                    любую
                    стандартную модель по самой выгодной цене.</p>
                <p className={s.before2}> Наш интернет-магазин специализируется на разработке,производстве и продаже
                    самых разных моделей 3D
                    Светильников. Именно поэтому у нас вы увидете самый большой ассортимент,лучшее качество,гарантию на
                    каждую модель,эффектную упаковку и конечно же низкую цену.</p>

                <p className={s.before3}> Магазин <span className={s.name}>3Д-СВЕТИЛЬНИКИ.РФ</span> осуществляет
                    доставку по всей территории
                    России а так же
                    странам СНГ любым
                    удобным для Вас способом.</p>


                <h2>Наши главные преимущества:</h2>

                <ul className={s.ul}>
                    <li> Низкие цены и лучшее качество (Мы-производитель)</li>
                    <li> Возможность изготовления светильника по Вашему дизайну</li>
                    <li> Всегда всё в наличии</li>
                    <li> Доставка по Москве в день заказа</li>
                    <li> Доставка заказов Почтой по всей стране за 3-15 дней</li>
                    <li> Гарантия на каждую модель</li>
                    <li> Бонусы и скидки для постоянных покупателей</li>
                </ul>
            </div>


        </div>
    );
};

export default Home;
