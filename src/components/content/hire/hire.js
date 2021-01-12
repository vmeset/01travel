import React from 'react'

import s from './hire.module.css'

import TourCard from "../tours/tourCard/itemCard";
import cat_a from "../../../img/category_a.jpg";
import cat_b from "../../../img/category_b.jpg";
import cat_c from "../../../img/category_c.jpg";
import offer1 from "../../../img/hire_offer.jpg";
import offer2 from "../../../img/hire_offer2.jpg";

const Hire = (props) => {

    // let items = props.state.allItems.map(e => {
    //     return e.cat
    // })
    // let uniqueItems = [...new Set(items)]
    // console.log(uniqueItems)

    const onlyHireItems = props.state.allItems.filter(items =>
        items.id < 100 || !items.id)

    // let hireItems = onlyHireItems.map(e =>
    //     <TourCard id={e.id} name={e.name} img={e.img} group={e.group}
    //               season={e.season} price={e.price}/>)
    return (
        <div className={s.hireBlock}>
            <div className={s.hireCat}>
                <img src={cat_a}/>
                <button>
                    отдых
                </button>
            </div>
            <div className={s.hireCat}>
                <img src={cat_b}/>
                <button>
                    снаряга
                </button>
            </div>
            <div className={s.hireCat}>
                <img src={cat_c}/>
                <button>
                    категория
                </button>
            </div>
            <div className={s.offer}>
                <img src={offer1} />
            </div>
            <div className={s.offer2}>
                <img src={offer2} />
            </div>
        </div>
    )
}

export default Hire