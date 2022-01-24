import React, {useState} from 'react';
import s from './style.module.scss'
import {Button, Radio, RadioGroup, TextField} from "@mui/material";

const PayPage = ({baskItem}) => {
    const [dopPrice, setDopPrice] = useState(0)
    let allPrice = baskItem?.reduce((acc, curr) => +acc + (+curr.price * +curr.count), 0);

    const items = baskItem.map((el) => {
        return (
            <div key={el.id} className={s.item}>
                <div className={s.img} style={{backgroundImage: `url(${el.img})`}}/>
                <p>{el.title}</p>
                <div className={s.price}><span>{el.count}</span> x <p>{el.price} Br</p></div>
            </div>
        )
    })

    return (
        <div className={s.pay_page}>

            <div className={s.content}>
                <div className={s.content_left}>
                    <h1>Оформление заказа</h1>
                    <form action="submit">

                        <div className={s.modile_container}>
                            <div className={s.modile}>
                                <TextField className={s.input} id="standard-basic"
                                           label="Ваш мобильный номер *"
                                           variant="filled"/>

                            </div>
                            <div className={s.modile}>
                                <TextField className={s.input} id="standard-basic" label="Ваша почта *"
                                           variant="filled"/>
                            </div>
                            <div className={s.modile}>
                                <TextField className={s.input} id="standard-basic" label="ФИО *"
                                           variant="filled"/>
                            </div>
                        </div>


                        <div className={s.dostavka}>
                            <h3>Доставка</h3>
                            <RadioGroup>
                                <div className={s.info_select}>
                                    <Radio className={s.radio} type="radio" id="contactChoice1"
                                           name="contact" value="email" onClick={() => setDopPrice(0)}/>

                                    <h4>Самовывоз с тркторного завода</h4>
                                    <p>+ 0 Br</p>
                                </div>
                                <div className={s.info_select}>
                                    <Radio className={s.radio} type="radio" id="contactChoice2"
                                           name="contact" value="phone" onClick={() => setDopPrice(5)}/>

                                    <h4>Доставка заказа курьером </h4>
                                    <p>+ 5 Br</p>
                                </div>
                                <div className={s.info_select}>
                                    <Radio className={s.radio} type="radio" id="contactChoice3"
                                           name="contact" value="mail" onClick={() => setDopPrice(5)}/>

                                    <h4>Почтой Беларуси</h4>
                                    <p>+ 5 Br</p>
                                </div>
                            </RadioGroup>
                        </div>

                        <Button color={'success'} variant={'contained'} style={{padding: '10px 20px'}}>Подтвердить
                            заказ</Button>
                    </form>
                </div>
                <div className={s.content_right}>
                    {items}

                    <div className={s.counter_container}>
                        <div className={s.counter_box}>
                            <p>Сумма по товарам</p>
                            <h3>{allPrice} Br</h3>
                        </div>
                        <div className={s.counter_box}>
                            <p>Стоимость доставки</p>
                            <h3>{dopPrice} Br</h3>
                        </div>
                        <div className={s.counter_box}>
                            <p>Итого</p>
                            <h3>{allPrice + dopPrice} Br</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PayPage;
