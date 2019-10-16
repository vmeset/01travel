import React from 'react'
import styles from './tours.module.css'
import Card from "./card/card";

const Tours = (props) => {
    return (
        <div className={styles.toursBlock}>
            <Card state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}

export default Tours