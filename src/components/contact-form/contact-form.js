import React from 'react'

let ContactForm = (props) => {

    let newEmail = React.createRef()

    let addClient = () => {
        props.dispatch ({type: 'ADD-CLIENT'})
    }

    let onEmailChange = () => {
        let text = newEmail.current.value
        props.dispatch({type: 'UPDATE-EMAIL', text: text})
    }

    return (
        <div className="contactForm">
            <div>
                <textarea placeholder="Имя" />
            </div>
            <div>
                <textarea ref={newEmail} value={props.clients.newEmailText} onChange={onEmailChange} />
            </div>
            <div>
                <textarea placeholder="Телефон" />
            </div>
            <div>
                <button onClick={addClient}>Отправить</button>
            </div>
        </div>
    )
}

export default ContactForm