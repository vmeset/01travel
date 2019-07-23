import React from 'react'
import style from './card.module.css'
import Slider from "./slider/slider";

const Card = () => {
    return (
        <div className={style.card}>
            <Slider />
            <div className={style.info}>

            </div>
        </div>
    )
}

export default Card