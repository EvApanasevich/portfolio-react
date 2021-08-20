import React from 'react'
import style from './Skill.module.scss'

export const Skill = (props) => {
    const {
        title,
        tool,
        icon
    } = props

    return (
        <div className={style.skill}>
            <div className={style.icon} style={icon}>
            </div>
            <div className={style.skillInfo}>
                <h5>{title}</h5>
                <h6>{tool}</h6>
                <p>Developed a single page application using next technologies</p>
            </div>
        </div>
    )
}