import React from 'react'
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css';
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import socialImg from '../assets/images/social-network.jpg'
import todoImg from '../assets/images/todoList.jpg'
import counterImg from '../assets/images/counter.jpg'
import {Fade} from "react-reveal";

export const Projects = () => {

    const socialStyle = {
        backgroundImage: `url(${socialImg})`,
    };
    const todoStyle = {
        backgroundImage: `url(${todoImg})`,
    };
    const counterStyle = {
        backgroundImage: `url(${counterImg})`,
    };

    return (
        <div id='projects' className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                    <Title title={'My projects'}/>
                <Fade>
                    <div className={style.projects}>
                        <Project styleImg={socialStyle} title={'Social-network'}
                                 description={'ghdhg fgjghj '}/>
                        <Project styleImg={todoStyle} title={'Todo-List'} description={'j ghjghjhg jghjytjhg'}/>
                        <Project styleImg={counterStyle} title={'Counter'}
                                 description={'ghdhg fgjghj ghjg '}/>
                    </div>
                </Fade>
            </div>
        </div>
    )
}