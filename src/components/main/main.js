import React from 'react'
import styles from './main.module.css'
import ToursBlock from './toursBlock/toursBlock'
import ContactForm from '../contact-form/contact-form'

const Main = (props) => {

    return (
        <div className={styles.mainBlock}>
            <ContactForm dispatch={props.dispatch} state={props.state} />
            <ToursBlock state={props.state} />
        </div>
    )
}

export default Main