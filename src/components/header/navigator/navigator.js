import React from 'react'
import styles from './navigator.module.css'

const Navigator = () => {
    return (
        <div className={styles.navigator}>
            <div>
                Главная
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