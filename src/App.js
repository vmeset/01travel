import React from 'react';
import styles from './App.module.css';
import Head from './components/header/head'
import { BrowserRouter} from "react-router-dom";
import Content from './components/content/content'


function App() {
  return (
      <BrowserRouter>
        <div className={styles.App}>
          <Head />
          <Content />
        </div>
      </BrowserRouter>
  );
}

export default App;
