import React from 'react'
import s from './navigator.module.css'
import {NavLink} from "react-router-dom";

const Navigator = () => {
    return (
        <div className={s.navigator}>
            <div>
                <NavLink to='/main'>Главная</NavLink>
            </div>
            <div>
                <NavLink to='/jeeping'>Джиппинг</NavLink>
            </div>
            <div>
                <NavLink to='/tours'>Походы</NavLink>
            </div>
            <div>
                <NavLink to='/hire'>Прокат</NavLink>
            </div>
            <div>
                <NavLink to='/park'>Парк</NavLink>
            </div>
            <div>
                <NavLink to='/contacts'>Контакты</NavLink>
            </div>
            {/*<div className={styles.number}>*/}
            <div>
                +7 (928) 469-00-85
            </div>
            <div className={s.orderButton}>
                Заказать тур
            </div>
        </div>
    )
}

export default Navigator