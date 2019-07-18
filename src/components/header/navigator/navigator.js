import React from 'react'
import styles from './navigator.module.css'
import {BrowserRouter} from "react-router-dom";

const Navigator = () => {
    return (
        <div className={styles.navigator}>
            <div>
                <a>Главная</a>
            </div>
            <div>
                Туры
            </div>
            <div>
                Прокат
            </div>
        </div>
    )
}

export default Navigator