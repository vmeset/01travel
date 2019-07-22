import React from 'react'
import styles from './main.module.css'
import ToursBlock from './toursBlock/toursBlock'

const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <ToursBlock />
        </div>
    )
}

export default Main