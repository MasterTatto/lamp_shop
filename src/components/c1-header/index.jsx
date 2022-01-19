import React, {useState} from 'react';
import s from './style.module.scss'
import Container from "../../common/container/container";
import {ReactComponent as Lamp} from '../../assets/svg/logo.svg'
import {ReactComponent as Basket} from '../../assets/svg/basket.svg'
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const Header = ({navigate, setNavigate, lengthBasket}) => {

    const backHome = useNavigate()

    return (
        <div className={s.header}>
            <Container>
                <div className={s.header_container}>
                    <div className={s.logo_container} onClick={() => backHome('/')}>
                        {/*<Lamp style={{height: '100%', width: '100%'}}/>*/}
                        Lamp Shop
                    </div>
                    <div className={s.panel_container}>
                        <ul className={s.ul}>
                            <NavLink to={'/'} onClick={() => setNavigate('/')} className={navigate === '/' && s.active}>
                                <li>главная</li>
                            </NavLink>
                            <NavLink to={'/catalog'} onClick={() => setNavigate('/catalog')}
                                     className={navigate === '/catalog' && s.active}>
                                <li>Каталог</li>
                            </NavLink>
                            <NavLink to={'/info'} onClick={() => setNavigate('/info')}
                                     className={navigate === '/info' && s.active}>
                                <li>доставка и оплата</li>
                            </NavLink>
                            <NavLink to={'/garant'} onClick={() => setNavigate('/garant')}
                                     className={navigate === '/garant' && s.active}>
                                <li>гарантия</li>
                            </NavLink>
                            <NavLink to={'/contact'} onClick={() => setNavigate('/contact')}
                                     className={navigate === '/contact' && s.active}>
                                <li>контакты</li>
                            </NavLink>
                        </ul>
                    </div>
                    <div className={s.log_shop_container}>
                        <NavLink to={'/basket'} className={s.basket_container}>
                            <Basket className={s.basket}/>
                            <div className={s.count}>{lengthBasket}</div>
                        </NavLink>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;
