import React from 'react'
import styles from './tours.module.css'
import Card from "./card/card";

const Tours = () => {
    return (
        <div className={styles.toursBlock}>
            <Card />
        </div>
    )
}

export default Tours