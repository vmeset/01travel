import React from 'react'
import styles from './contact.module.css'

const Contact = () => {
    return (
        <div className={styles.contact}>
            <div>
                <img src='https://static.wixstatic.com/media/f315df_6d7d074122f74fe4ad67188f7ead91aa~mv2.png/v1/fill/w_100,h_100,al_c,q_80/phone.webp' />
            </div>
            <div className={styles.number}>
                +7 (928) 469-00-85
            </div>
            <div>
                <button>
                    Заказать тур
                </button>
            </div>

        </div>
    )
}

export default Contact