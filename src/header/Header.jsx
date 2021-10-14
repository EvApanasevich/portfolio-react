import React from 'react'
import style from './Header.module.scss'
import {Navigation} from "../navigation/Navigation";
import styleContainer from "../common/styles/Container.module.css";
import {BurgerNav} from "../burgerNav/BurgerNav";

export const Header = () => {
    return (
        <div className={style.headerBlock}>
                <div className={style.headerContainer}>
                    <Navigation />
                    <BurgerNav />
                </div>
        </div>
    )
}

