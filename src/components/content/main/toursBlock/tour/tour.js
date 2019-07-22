import React from 'react'
import styles from './tour.module.css'

const Tour = () => {
    return (
        <div className={styles.tour}>
            <div className={styles.tourImg}>
                <img src='https://static.wixstatic.com/media/f315df_d61e2ca7c57a40f480ae017a5bfba90a~mv2.jpg/v1/fill/w_410,h_514,al_c,lg_1,q_80/bolshoyThachMain.webp' />
            </div>
            <div>
                <h3>Header</h3>
            </div>
            <div>
                <h4>Сложность</h4>
            </div>
            <div>
                <h4>Сезон</h4>
            </div>
            <div>
                5000
            </div>
            <div>
                <button>

                </button>
            </div>
        </div>
    )
}

export default Tour