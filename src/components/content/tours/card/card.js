import React from 'react'
import style from './card.module.css'
import Slider from "./slider/slider";
import Info from './info/info'

const Card = (props) => {

    let cardInfo =
        props.td.places.map ( ci => <Info header={ci.header} difficulty={ci.difficulty} season={ci.season} />)


    return (
        <div className={style.card}>
            <Slider />
            <div>
                {cardInfo}
            </div>

        </div>
    )
}

export default Card