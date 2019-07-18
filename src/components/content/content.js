import React from 'react'
import styles from './content.module.css'
import Main from './main/main'

import { Route } from "react-router-dom";


const Content = () => {
    return (
        <div className={styles.Content}>
            <Route path='/main' render={ () => <Main /> } />
            {/*<Route path='/tours' render={ () => <Tours /> } />*/}
            {/*<Route path='/hire' render={ () => <Hire /> } />*/}
        </div>
    )
}

export default Content