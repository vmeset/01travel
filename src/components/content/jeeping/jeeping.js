import React from 'react'
import banner from '../../../img/jeeping_banner2.jpg';
import styles from './jeeping.module.css'
import commonStyle from '../../../App.module.css'
import TourCard from "../tours/tourCard/itemCard";
import JeepsAccordion from "./jeeps/jeepsAccordion";

const Jeeping = (props) => {
    // let onlyJeepTours = []
    // for (let i = 0; i < props.state.items.length; i++) {
    //     if (props.state.items[i].id >= 100 &&
    //         props.state.items[i].id < 200) {
    //         onlyJeepTours.push(props.state.items[i])
    //     }
    // }

    const onlyJeepTours = props.state.allItems.filter(jeeps =>
        jeeps.id >= 200 && jeeps.id < 300)

    let jeepTours = onlyJeepTours.map(e =>
        <TourCard id={e.id} name={e.name} img={e.img} group={e.group}
                  season={e.season} price={e.price}/>)

    return (
        <div className={styles.jeeping}>
            <div className={styles.banner}>
                <img src={banner}/>
            </div>
            <JeepsAccordion />
            <div className={commonStyle.toursBlock}>
                {jeepTours}
            </div>
        </div>
    )
}

export default Jeeping