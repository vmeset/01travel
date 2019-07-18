import React from 'react';
import styles from './App.module.css';
import Head from './components/header/head'
import { BrowserRouter} from "react-router-dom";
import Main from "./components/content/main/main";

function App() {
  return (
      <BrowserRouter>
        <div className={styles.App}>
          <Head />
          <Main />
        </div>
      </BrowserRouter>
  );
}

export default App;
