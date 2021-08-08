import React from 'react'
import style from './Skill.module.scss'

export const Skill = (props) => {
    const {
        title,
        description,
        tool,
        icon
    } = props

    return (
        <div className={style.skill}>
            <div className={style.icon} style={icon}>
            </div>
            <div className={style.skillInfo}>
                <h5>development</h5>
                <h6>React, Redux</h6>
                <p>development react app with state management redux</p>
            </div>
        </div>
    )
}