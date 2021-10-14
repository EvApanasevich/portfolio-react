import React, { useState } from 'react'
import style from './BurgerNav.module.scss'
import { Link } from "react-scroll";

export const BurgerNav = () => {

   const [burgerIsOpen, setBurgerIsOpen] = useState(false)

   const toggleBurger = () => {
      setBurgerIsOpen(!burgerIsOpen)
   }

   return (
      <div className={style.burgerNav}>
         <div className={burgerIsOpen ? `${style.burgerNavItem} ${style.show}` : style.burgerNavItem}>
            <div className={style.link}>
               <Link
                  activeClass={style.active}
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  onClick={toggleBurger}
               >home</Link>
            </div>
            <div className={style.link}>
               <Link
                  activeClass={style.active}
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  onClick={toggleBurger}
               >Skills</Link>
            </div>

            <div className={style.link}>
               <Link
                  activeClass={style.active}
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  onClick={toggleBurger}
               >Projects</Link>
            </div>
            <div className={style.link}>
               <Link
                  activeClass={style.active}
                  to="contacts"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  onClick={toggleBurger}
               >Contact</Link>
            </div>
         </div>
         <div onClick={toggleBurger} className={burgerIsOpen ? `${style.burgerBtn} ${style.activeBtn}` : style.burgerBtn}>
            <span></span>
         </div>
      </div>
   )
}