import React from 'react';
import styles from './head.module.css'
import Navigator from './navigator/navigator'
import Contact from "./contact/contact";

const Head = () => {
    return (
        <div className={styles.headerClass}>
            <div className={styles.headWrapper}>
                <div className={styles.logo}>
                    <img src='https://static.wixstatic.com/media/f315df_e94b6f0b55e740b5bb5649d4772fef12~mv2.png/v1/fill/w_280,h_98,al_c,lg_1,q_80/logo200x72.webp' />
                </div>
                <Navigator />
                {/*<Contact />*/}
            </div>
        </div>
    )
}

export default Head;