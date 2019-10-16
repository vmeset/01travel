import React from 'react'
import styles from './toursBlock.module.css'
import Tour from './tour/tour'

const ToursBlock = (props) => {

    let toursInfo = props.state.toursData.places.map ( td => (<Tour id={td.id} header={td.header} difficulty={td.difficulty} season={td.season} />) )

    return (
        <div className={styles.toursBlock}>
            {toursInfo}
        </div>
    )
}

export default ToursBlock