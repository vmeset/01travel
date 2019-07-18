import React from 'react';
import styles from './App.module.css';
import Head from './components/header/head'
import { BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div className={styles.App}>
          <Head />
        </div>
      </BrowserRouter>
  );
}

export default App;
