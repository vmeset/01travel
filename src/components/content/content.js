import React from 'react'
import styles from './content.module.css'
import Main from './main/main'
import Tours from './tours/tours'
import Hire from './hire/hire'
import { Route } from "react-router-dom";


const Content = (props) => {

    return (
        <div className={styles.contentBlock}>
            <Route path='/main' render={ () => <Main td={props.td}/> } />
            <Route path='/tours' render={ () => <Tours td={props.td} /> } />
            <Route path='/hire' render={ () => <Hire /> } />
        </div>
    )
}

export default Content