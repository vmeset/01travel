import React from 'react'
import s from './tours.module.css'
import TourCard from "./tourCard/itemCard";

const Tours = (props) => {

    const onlyToursItems = props.state.allItems.filter(items =>
        items.id < 400 && items.id > 300)

    const tourItems = onlyToursItems.map(e =>
        <TourCard id={e.id} name={e.name} img={e.img} group={e.group}
                  season={e.season} cost={e.cost} level={e.level} />)

    return (
        <div className={s.toursList}>
            {tourItems}
        </div>
    )
}

export default Tours