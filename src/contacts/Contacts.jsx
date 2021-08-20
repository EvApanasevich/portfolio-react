import React, {useState} from 'react'
import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";
import {Fade} from "react-reveal";
import {useFormik} from "formik";
import axios from 'axios'
import {Modal} from "../common/components/modal/Modal";

export const Contacts = () => {

    const [modalActive, setModalActive] = useState(false)
    const [disable, setDisable] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        onSubmit: values => {
            setDisable(true)
            axios.post('https://nodejs-server-sendler.herokuapp.com/send-message', {
                name: values.name,
                email: values.email,
                message: values.message
            })
                .then(() => {
                    setDisable(false)
                    formik.resetForm()
                    setModalActive(true)
                    setTimeout(() => setModalActive(false), 2500)

                })
        },
    })

    return (
        <div id='contacts' className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'GET IN TOUCH'}/>
                <Fade>
                    <form className={style.form} onSubmit={formik.handleSubmit}>
                        <div className={style.nameEmail}>
                            <div className={style.name}>
                                <input placeholder={'Your Name...'}
                                       {...formik.getFieldProps('name')}
                                />
                            </div>

                            <div className={style.email}>
                                <input placeholder={'Your Email...'}
                                       {...formik.getFieldProps('email')}
                                />
                            </div>
                        </div>
                        <div className={style.message}>
                            <div className={style.textMessage}>
                                <textarea placeholder={'Your message...'}
                                          {...formik.getFieldProps('message')}
                                ></textarea>
                            </div>
                        </div>
                        <div className={style.send}>
                            <button disabled={disable} type={'submit'}>Send</button>
                        </div>
                    </form>
                    <Modal active={modalActive} setActive={setModalActive} text={'Message has been sent!'}/>
                </Fade>
            </div>
        </div>
    )
}