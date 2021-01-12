import React from 'react'
import styled from './footer.module.css'
import sn from '../../img/sn.png'

const Footer = () => {
    return (
        <div className={styled.footer}>
            <div>
                <h3>Наш адрес</h3>
            </div>
            <div>
                <h3>Свяжитесь с нами</h3>
            </div>
            <div>
                <h3>Мы принимаем</h3>
            </div>
            <div>
                <h3>Присоединяйтесь</h3>
            </div>
            <div>
                Ул. Пушкина, 181, Майкоп
                <br/>
                385000, Россия
            </div>
            <div>
                TEЛ.: + 7 (928) 469-00-85
                <br/>
                EMAIL: contact01travel@gmail.com
            </div>
            <div>
                <img src="https://www.energosbyt.ru/upload/medialibrary/a2d/a2d4a834f47193e3ad2f249f1610a22f.png" />
            </div>
            <div>
                <img src={sn} />
            </div>
        </div>
    )
}

export default Footer