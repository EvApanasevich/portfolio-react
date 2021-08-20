import React from 'react'
import styleContainer from "../common/styles/Container.module.css";
import style from './Footer.module.scss'
import tel from '../assets/images/tel.png'
import email from '../assets/images/email.png'
import telega from '../assets/images/telega.png'
import {Fade} from "react-reveal";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Fade top>
                    <h2 className={style.fullName}>Evgeny Apanasevich</h2>
                </Fade>

                <div className={style.messengerContainer}>
                    <Fade>
                        <div className={style.mobEmail}>
                            <img src={tel}/>
                            <div>+375 29 872-37-54</div>
                        </div>
                        <div className={style.mobEmail}>
                            <img src={email}/>
                            <div>EvApanasevich@yandex.ru</div>
                        </div>
                        <a href='https://t.me/zhekaDev' className={style.mobEmail}>
                            <img src={telega}/>
                            <div>Telegram</div>
                        </a>
                    </Fade>
                </div>
                <h3 className={style.rights}>© 2021, All Rights Reserved.</h3>
            </div>
        </div>
    )
}