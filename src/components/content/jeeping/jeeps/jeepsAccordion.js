import React from 'react'
import styled from './jeepsAccordion.module.css'
import vjeep from '../../../../img/jeeps/075.jpg'
import ujeep from '../../../../img/jeeps/510.jpg'
import sjeep from '../../../../img/jeeps/225.png'

const JeepsAccordion = () => {

    return (
            <div className={styled.accordion}>
                <ul>
                    <li>
                        <img src={sjeep} />
                        <a>Вездеход</a>
                    </li>
                    <li>
                        <img src={vjeep} />
                        <a>Следопыт</a>
                    </li>
                    <li>
                        <img src={ujeep} />
                        <a>Экстрим</a>
                    </li>
                </ul>
            </div>
        )
}

export default JeepsAccordion