import React from 'react'
import styles from './main.module.css'


const Main = (props) => {

    // let toursInfo = props.tours.map ( td => (<div id={td.id}>{td.tourName} {td.difficulty} {td.season} </div> ) )

    return (
        <div className={styles.mainBlock}>
            <div>
                <select>
                    <option value="all">выберите сложность</option>
                    <option value="easy">легкая</option>
                    <option value="hard">сложная</option>
                    <option value="extreme">экстрим</option>
                </select>
            </div>
            <div className={styles.toursBlock}>
                {/*{toursInfo}*/}
            </div>
        </div>
    )
}

export default Main