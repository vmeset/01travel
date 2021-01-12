import React from 'react'
import s from "./itemCard.module.css";
import {NavLink} from "react-router-dom";

const ToursCard = (props) => {
    return (
        <NavLink to={"/item/" + props.id}>
            <div className={s.itemCard} key={props.id}>
                <div className={s.itemCardImage}>
                    <img src={props.img} />
                </div>

                <h2 className={s.itemCardHeader}>
                    {props.name}
                </h2>
                <div className={s.itemCardDifficulty}>
                    Сложность:
                </div>
                <div className={s.itemCardDifficultyImg}>
                    <img src={props.level} />
                </div>
                <div className={s.itemCardSeason}>
                    Сезон:
                </div>
                <div className={s.itemCardSeasonImg}>
                    <img src={props.season[0]} />
                    <img src={props.season[1]} />
                    <img src={props.season[2]} />
                    <img src={props.season[3]} />
                </div>
                <div className={s.itemCardCost}>
                    Стоимость:
                </div>
                <div className={s.itemCardCostVal}>
                    {props.cost}
                </div>
                {/*<NavLink to={"/park"}>*/}
                <button>
                    Подробнее
                </button>
                {/*</NavLink>*/}
                {/*<div>*/}

                {/*</div>*/}

                {/*<div>*/}
                {/*        {props.diff}*/}
                {/*</div>*/}

                {/*<div>*/}
                {/*    {props.season}*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    {props.group}*/}

                {/*</div>*/}

                {/*<div>*/}
                {/*    <button>Подробнее</button>*/}
                {/*</div>*/}

            </div>
        </NavLink>
    )
}

export default ToursCard