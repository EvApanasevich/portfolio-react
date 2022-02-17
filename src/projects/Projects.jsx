import React from 'react'
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css';
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import socialImg from '../assets/images/social-network.png'
import todoImg from '../assets/images/todoList.jpg'
import counterImg from '../assets/images/counter.jpg'
import searchImg from '../assets/images/search.jpg'
import appNotesImg from '../assets/images/appNotes.png'
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
    const searchStyle = {
        backgroundImage: `url(${searchImg})`,
    };
    const appNotesStyle = {
        backgroundImage: `url(${appNotesImg})`,
    };

    return (
        <div id='projects' className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'My projects'}/>
                <Fade>
                    <div className={style.projects}>
                        <Project src={'https://evapanasevich.github.io/social-network/'}
                                 styleImg={socialStyle} title={'Social-network'}
                                 description={'Social network: research project, sharpening skills'}/>
                        <Project src={'https://mystifying-kalam-8f752c.netlify.app/'}
                                 styleImg={appNotesStyle} title={'Notes'}
                                 description={'Note-taking app with the ability to create tags. Recommended to watch)'}/>
                        <Project src={'https://evapanasevich.github.io/todolist/'}
                                 styleImg={todoStyle} title={'Todo-List'}
                                 description={'To do list for every day on the week'}/>
                        <Project src={'https://evapanasevich.github.io/search-users/'}
                                 styleImg={searchStyle} title={'Search-Users'}
                                 description={'Organization of filtering of users in the list'}/>
                        <Project src={'https://evapanasevich.github.io/counter/'}
                                 styleImg={counterStyle} title={'Counter'}
                                 description={'My first project with React. I left It here as a memory.'}/>

                    </div>
                </Fade>
            </div>
        </div>
    )
}