import React from 'react'
import styles from './navigator.module.css'
import {NavLink} from "react-router-dom";

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