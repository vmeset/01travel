import React from 'react'
import styles from './toursBlock.module.css'
import Tour from './tour/tour'

const ToursBlock = (props) => {

    let toursInfo = props.td.places.map ( ti => (<Tour id={ti.id} header={ti.header} difficulty={ti.difficulty} season={ti.season} />) )

    return (
        <div className={styles.toursBlock}>
            {toursInfo}
        </div>
    )
}

export default ToursBlock