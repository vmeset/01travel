import React from 'react'
import styles from './main.module.css'
import ToursBlock from './toursBlock/toursBlock'
import ContactForm from '../contact-form/contact-form'

const Main = (props) => {

    return (
        <div className={styles.mainBlock}>
            <ContactForm dispatch={props.dispatch} clients={props.clients} />
            <ToursBlock td={props.td} />
        </div>
    )
}

export default Main