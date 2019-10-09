import React from 'react'
import {addClientActionCreator} from '../../state/state'
import {updateEmailActionCreator} from '../../state/state'

let ContactForm = (props) => {

    let newEmail = React.createRef()

    let addClient = () => {
        props.dispatch (addClientActionCreator())
    }

    let onEmailChange = () => {
        let text = newEmail.current.value
        props.dispatch(updateEmailActionCreator(text))
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