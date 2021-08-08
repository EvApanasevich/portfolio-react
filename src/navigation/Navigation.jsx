import React from 'react'
import style from './Navigation.module.scss'
import {Link, animateScroll as scroll} from "react-scroll";

export const Navigation = () => {
    return (
        <div className={style.nav}>
            <ul>
                <li>
                    <Link
                        activeClass={style.active}
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                    >home</Link>
                </li>
                <li>
                    <Link
                        activeClass={style.active}
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                    >Skills</Link>
                </li>
                <li>
                    <Link
                        activeClass={style.active}
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                    >Projects</Link>

                </li>
                <li>
                    <Link
                        activeClass={style.active}
                        to="contacts"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                    >Contact</Link>
                </li>
            </ul>
        </div>
    )
}