import React from 'react'
import styles from './toursBlock.module.css'
import Tour from './tour/tour'

const ToursBlock = () => {
    return (
        <div className={styles.toursBlock}>
            <Tour />
            <Tour />
            <Tour />
        </div>
    )
}

export default ToursBlock