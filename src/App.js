import React from 'react';
import styles from './App.module.css';
import Head from './components/header/head'
import { BrowserRouter} from "react-router-dom";
import Content from './components/content/content'


function App(props) {

      return (
          <BrowserRouter>
            <div className={styles.App}>
              <Head />
              <Content td={props.td}/>
            </div>
          </BrowserRouter>
      );
}

export default App;
