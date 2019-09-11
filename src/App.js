import React from 'react';
import styles from './App.module.css';
import Head from './components/header/head'
import Content from './components/content/content'


function App(props) {

      return (
            <div className={styles.App}>
              <Head />
              <Content td={props.td} ci={props.ci} />
            </div>
      );
}

export default App;
