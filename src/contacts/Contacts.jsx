import React from 'react'
import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";
import {Fade} from "react-reveal";

export const Contacts = () => {
    return (
        <div id='contacts' className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'GET IN TOUCH'}/>
                <Fade>
                    <form className={style.form}>
                        <div className={style.nameEmail}>
                            <div className={style.name}>
                                <input placeholder={'Your Name...'}/>
                            </div>
                            <div className={style.email}>
                                <input placeholder={'Your Email...'}/>
                            </div>
                        </div>
                        <div className={style.message}>
                            <div className={style.textMessage}>
                                <textarea placeholder={'Your message...'}></textarea>
                            </div>
                        </div>
                        <div className={style.send}>
                            <button type='submit'>Send</button>
                        </div>
                    </form>
                </Fade>
            </div>
        </div>
    )
}