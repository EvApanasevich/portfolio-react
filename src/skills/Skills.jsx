import React from 'react'
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill"
import {Title} from "../common/components/title/Title"
import clipboard from '../assets/images/clipboard.png'
import briefcase from '../assets/images/briefcase.png'
import dev from '../assets/images/dev.png'
import diamond from '../assets/images/diamond.png'
import {Fade} from "react-reveal";

export const Skills = () => {

    const devIcon = {
        backgroundImage: `url(${dev})`,
    };
    const briefcaseIcon = {
        backgroundImage: `url(${briefcase})`,
    };
    const clipboardIcon = {
        backgroundImage: `url(${clipboard})`,
    };
    const diamondIcon = {
        backgroundImage: `url(${diamond})`,
    };

    return (
        <div id='skills' className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                    <Title title={'My skills'}/>
                <Fade>
                    <div className={style.skills}>
                        <Skill icon={devIcon} title={'Java'} description={'jhdvc'} tool={'react'}/>
                        <Skill icon={briefcaseIcon} title={'Java'} description={'jhdvc'} tool={'react'}/>
                        <Skill icon={clipboardIcon} title={'Java'} description={'jhdvc'} tool={'react'}/>
                        <Skill icon={diamondIcon} title={'Java'} description={'jhdvc'} tool={'react'}/>
                    </div>
                </Fade>
            </div>
        </div>
    )
}