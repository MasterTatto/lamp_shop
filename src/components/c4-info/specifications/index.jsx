import React from 'react';
import s from "./style.module.scss";

const Specifications = () => {
    return (
        <div className={s.spec}>
            <div><p>Производитель</p> <p>LampShop.by</p></div>

            <div><p>Вес</p> <p>0.5 кг</p></div>

            <div><p>Гарантия</p> <p>1 год</p></div>

            <div><p>Тип товара</p>  <p>Ночник</p></div>


            <div><p>Страна-изготовитель:</p>  <p>Беларусь - Китай</p>
            </div>

            <div><p>Упаковка</p> <p>Подарочная упаковка.</p>
            </div>
        </div>
    );
};

export default Specifications;
