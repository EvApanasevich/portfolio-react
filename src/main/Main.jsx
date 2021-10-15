import React from 'react'
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import { Fade } from "react-reveal";
import ReactTypingEffect from 'react-typing-effect';
import Particles from "react-particles-js";

export const Main = () => {

   const particlesOption = {
      'particles': {
         'number': {
            'value': 80,
            'density': {
               'enable': true,
               'value_area': 800
            },
         }
      }
   }

   return (
      <div id='home' className={style.mainBlock}>
         <div className={`${styleContainer.container} ${style.mainContainer}`}>
            <Particles className={style.particles} params={particlesOption} />
            <Fade>
                  <div className={style.greeting}>
                     <span>hello, i am</span>
                     <h1>Evgeny<br /> Apanasevich</h1>
                     <div className={style.typing}>
                        <p>Front-end developer</p>
                        <ReactTypingEffect eraseDelay={3000} typingDelay={1500} speed={150} text='BASED IN #MINSK' />
                     </div>
                  </div>
                  <div className={style.photo}>
                     <div className={style.image}>
                     </div>
                  </div>
            </Fade>
         </div>
      </div>
   )
}