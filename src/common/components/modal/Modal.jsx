import React from 'react'
import style from './Modal.module.scss'

export const Modal = (props) => {

    const {active, setActive, text} = props

    return (
        <div className={active ? style.modal + ' ' + style.active : style.modal} onClick={() => setActive(false)}>
            <div className={style.modal_content} onClick={(e) => e.stopPropagation()}>
                {text}
            </div>
        </div>
    )
}
