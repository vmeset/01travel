import React from 'react'

import styles from './category.module.css'

import {useParams} from 'react-router-dom'

import cat_a from '../../../img/category_a.jpg';
import cat_b from '../../../img/category_b.jpg';
import cat_c from '../../../img/category_c.jpg';
import s from "../item/item.module.css";


const Category = (props) => {

    let itemID = useParams()
    let currentItem = props.state.items.allItems.find( item => item.id == itemID.id )

    return (
        <div className={s.item} id={currentItem.id}>
            <div className={s.itemHeader}>
                {currentItem.name}
            </div>
            <div className={s.itemImg}>
                <img src="" alt=""/>
            </div>
            {/*<div className={styles.banner}>*/}
            {/*    <img src={cat_a}/>*/}
            {/*</div>*/}
            {/*<div className={styles.banner}>*/}
            {/*    <img src={cat_b}/>*/}
            {/*</div>*/}
            {/*<div className={styles.banner}>*/}
            {/*    <img src={cat_c}/>*/}
            {/*</div>*/}
        </div>
    )


    return (
        <div className={styles.category}>
            <div className={styles.banner}>
                <img src={cat_a}/>
            </div>
            <div className={styles.banner}>
                <img src={cat_b}/>
            </div>
            <div className={styles.banner}>
                <img src={cat_c}/>
            </div>
        </div>
    )
}

export default Category