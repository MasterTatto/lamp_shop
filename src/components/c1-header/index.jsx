import React from 'react';
import s from './style.module.scss'
import Container from "../../common/container/container";
import {ReactComponent as Basket} from '../../assets/svg/basket.svg'
import {ReactComponent as Like} from '../../assets/svg/like.svg'
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const Header = ({navigate, setNavigate, lengthBasket, lengthLiked}) => {

    const backHome = useNavigate()

    return (
        <div className={s.header}>
            <Container>
                <div className={s.header_container}>
                    <div className={s.logo_container} onClick={() => backHome('/')}>
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
                            <NavLink to={'/pay-info'} onClick={() => setNavigate('/pay-info')}
                                     className={navigate === '/pay-info' && s.active}>
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

                        <NavLink to={'/liked'} className={s.basket_container}>
                            <Like className={s.like} onClick={() => setNavigate('/liked')}
                                  style={{fill: navigate === '/liked' && '#FA6585'}}/>
                            {lengthLiked > 0 && <div className={s.count}>{lengthLiked}</div>}
                        </NavLink>

                        <NavLink to={'/basket'} className={`${s.basket_container} ${s.like_container}`}>
                            <Basket className={s.basket} onClick={() => setNavigate('/basket')}
                                    style={{fill: navigate === '/basket' && '#FA6585'}}/>
                            {lengthBasket > 0 && <div className={s.count}>{lengthBasket}</div>}
                        </NavLink>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;
