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
                        <Skill icon={devIcon} title={'Development'} tool={'React, Redux, Axios etc'}/>
                        <Skill icon={briefcaseIcon} title={'Foundation'} tool={'JavaScript, TypeScript, HTML5, CSS3(scss)'}/>
                        <Skill icon={clipboardIcon} title={'Testing'} tool={'Unit Tests, Storybook'}/>
                        <Skill icon={diamondIcon} title={'Design'} tool={'Material UI, Ant-Design etc'}/>
                    </div>
                </Fade>
            </div>
        </div>
    )
}