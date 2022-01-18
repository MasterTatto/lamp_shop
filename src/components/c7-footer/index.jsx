import React from 'react';
import s from './style.module.scss'
import Container from "../../common/container/container";
import {ReactComponent as Vk} from "../../assets/svg/vk.svg";
import {ReactComponent as Telegramm} from "../../assets/svg/telegramm.svg";

const Footer = () => {
    return (
        <div className={s.footer}>
            <Container>
                <div className={s.footer_container}>
                    <div className={s.contact}>
                        <p>+375(25)926-42-49</p>
                        <p>gromvolk97@gmail.com</p>
                    </div>
                    <div className={s.icons}>
                        <Vk className={s.icon}/>
                        <Telegramm className={s.icon}/>
                    </div>
                    <div className={s.desc}>
                        <p>Create by MasterTatoo</p>
                    </div>
                </div>
            </Container>
        </div>);
};

export default Footer;
