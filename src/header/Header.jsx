import React from 'react'
import style from './Header.module.scss'
import {Navigation} from "../navigation/Navigation";
import {Fade} from "react-reveal";
import styleContainer from "../common/styles/Container.module.css";

export const Header = () => {
    return (
        <div className={style.headerBlock}>
                <div className={`${styleContainer.container} ${style.headerContainer}`}>
                    <Navigation/>
                </div>
        </div>
    )
}

