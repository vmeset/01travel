import React from 'react';
import styles from './App.module.css';
import { Route } from "react-router-dom";

import Head from './components/header/head'
import Main from './components/content/main/main'
import Tours from './components/content/tours/tours'
import Hire from './components/content/hire/hire'
import Jeeping from "./components/content/jeeping/jeeping";
import Item from "./components/content/item/item";
import Category from "./components/content/category/category";
import Footer from "./components/footer/footer";

function App(props) {

      return (
            <div className={styles.App}>
              <Head />
              <div className={styles.content} className={styles.grid}>
                <Route path='/main' render={ () => <Main state={props.state} /> } />
                <Route path='/tours' render={ () => <Tours state={props.state.items} /> } />
                <Route path='/hire' render={ () => <Hire state={props.state.items} /> } />
                <Route path='/jeeping' render={ () => <Jeeping state={props.state.items} /> } />
                <Route path='/category/:id?' render={ () => <Category state={props.state.items} /> } />
                <Route path='/item/:id?' render={ () => <Item state={props.state} /> } />
              </div>
                <Footer />
            </div>
      );
}

export default App;