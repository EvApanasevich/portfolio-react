import React from 'react'
import style from './Title.module.scss'
import {Fade} from "react-reveal";

export const Title = (props) => {
    return (
        <Fade top>
            <div className={style.title}>
                <h2>{props.title}</h2>
            </div>
        </Fade>
    )
}