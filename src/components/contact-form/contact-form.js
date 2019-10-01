import React from 'react'

let ContactForm = () => {

    let onSendForm = () => {
        alert('!')
    }

    let newName = () => {

    }

    return (
        <div className="contactForm">
            <div>
                <textarea placeholder="Имя" value={newName} onChange={newName} />
            </div>
            <div>
                <textarea placeholder="Email" />
            </div>
            <div>
                <textarea placeholder="Телефон" />
            </div>
            <div>
                <button onClick={onSendForm}>Отправить</button>
            </div>
        </div>
    )
}

export default ContactForm