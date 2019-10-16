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
                <Route path='/main' render={ () => <Main state={props.state} dispatch={props.dispatch} /> } />
                <Route path='/tours' render={ () => <Tours state={props.state} dispatch={props.dispatch} /> } />
                <Route path='/hire' render={ () => <Hire /> } />
              </div>
              
            </div>
      );
}

export default App;
