import React from 'react'
import s from "./item.module.css";
import {useParams} from 'react-router-dom'

const Item = (props) => {
    let itemID = useParams()
    let currentItem = props.state.items.allItems.find( item => item.id == itemID.id )

    return (
        <div className={s.itemBlock} id={currentItem.id}>
            <div className={s.itemImg}>
                <img src={currentItem.img} />
            </div>
            <div className={s.itemInfo}>
                <div className={s.itemHeader}>{currentItem.name}</div>

                <div className={s.itemLength}>Протяженность маршрута</div>
                <div className={s.itemLengthVal}>{currentItem.length}</div>

                <div className={s.itemLevel}>Сложность</div>
                <div className={s.itemLevelVal}><img src={currentItem.level} /></div>

                <div className={s.itemSeason}>Сезон</div>
                <div className={s.itemSeasonVal}>
                    <img src={currentItem.season[0]} />
                    <img src={currentItem.season[1]} />
                    <img src={currentItem.season[2]} />
                    <img src={currentItem.season[3]} />
                </div>
            </div>
            <div className={s.itemDescription}>
                <h3>{currentItem.description}</h3>
            </div>
            <div className={s.itemDescription}>
                <h3>{currentItem.day1}</h3>
            </div>
            <div className={s.itemDescription}  >
                <h3>{currentItem.day2}</h3>
            </div>
            {/*<div className={s.itemGallery}>*/}
            {/*    <Gallery />*/}
            {/*</div>*/}

        </div>
    )
}

export default Item