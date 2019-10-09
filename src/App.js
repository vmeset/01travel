import React from 'react';
import styles from './App.module.css';
import Head from './components/header/head'
import Main from './components/main/main'
import Tours from './components/tours/tours'
import Hire from './components/hire/hire'
import { Route } from "react-router-dom";

function App(props) {

      return (
            <div className={styles.App}>
              <Head />
              <div className=''>
                <Route path='/main' render={ () => <Main td={props.td} dispatch={props.dispatch} 
                                                            clients={props.clients} /> } />
                <Route path='/tours' render={ () => <Tours td={props.td} /> } />
                <Route path='/hire' render={ () => <Hire /> } />
              </div>
              
            </div>
      );
}

export default App;
