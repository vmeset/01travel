import React from 'react'
import style from './card.module.css'
import Slider from "./slider/slider";
import Info from './info/info'
import Comment from '../card/comment/comment'

const Card = (props) => {

    let cardInfo =
        props.td.places.map ( ci => <Info header={ci.header} difficulty={ci.difficulty} season={ci.season} />)


    return (
        <div className={style.card}>
            <Slider />
            <div>
                {cardInfo}
            </div>
            <Comment />
        </div>
    )
}

export default Card