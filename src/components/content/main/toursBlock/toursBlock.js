import React from 'react'
import styles from './toursBlock.module.css'
import Tour from './tour/tour'

const ToursBlock = () => {

    let toursData = {
        places: [
            {id: 1, header: 'Fisht', difficulty: 'hard', season: 'summer'},
            {id: 2, header: 'Oshten', difficulty: 'medium', season: 'winter'},
            {id: 3, header: 'Tchach', difficulty: 'easy', season: 'spring'}
        ]
    }

    let toursInfo = toursData.places.map ( ti => (<Tour id={ti.id} header={ti.header} difficulty={ti.difficulty} season={ti.season} />) )

    return (
        <div className={styles.toursBlock}>
            {toursInfo}
        </div>
    )
}

export default ToursBlock