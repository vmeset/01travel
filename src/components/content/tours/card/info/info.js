import React from "react"
import style from './info.module.css'

const Info = (props) => {

    return (
        <div className={style.info}>
            <div className={style.infoBlock}>
                {props.header}
            </div>
            <div>
                {props.difficulty}
            </div>
            <div>
                {props.season}
            </div>
        </div>
    )
}

export default Info