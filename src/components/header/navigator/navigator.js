import React from 'react'
import styles from './navigator.module.css'
import {NavLink, Route} from "react-router-dom";
import Main from "../../content/main/main";

const Navigator = () => {
    return (
        <div className={styles.navigator}>
            <div>
                <NavLink to='/main'>Главная</NavLink>
            </div>
            <div>
                <NavLink to='/tours'>Туры</NavLink>
            </div>
            <div>
                <NavLink to='/hire'>Прокат</NavLink>
            </div>
        </div>
    )
}

export default Navigator