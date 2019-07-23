import React from 'react'
import styles from './main.module.css'
import ToursBlock from './toursBlock/toursBlock'

const Main = (props) => {

    return (
        <div className={styles.mainBlock}>
            <ToursBlock td={props.td} />
        </div>
    )
}

export default Main