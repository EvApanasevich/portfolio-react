import React from 'react'
import style from './Project.module.scss'

export const Project = (props) => {
    const {
        title,
        description,
        styleImg,
        src
    } = props

    return (
        <div className={style.project}>
            <div className={style.imgContainer} style={styleImg}>
                <a href={src} className={style.linkBtn}>
                    View project
                </a>
            </div>
            <div className={style.infoText}>
                <p className={style.description}>
                    {description}
                </p>
                <p className={style.title}>
                    {title}
                </p>
            </div>
        </div>
    )
}
