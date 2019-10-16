const ADD_CLIENT = 'ADD-CLIENT'
const UPDATE_EMAIL = 'UPDATE-EMAIL'
const ADD_COMMENT = 'ADD-COMMENT'
const UPDATE_COMMENT = 'UPDATE-COMMENT'


let store = {
    _state: {
        toursData: {
            places: [
                {id: 1, header: 'Fisht', difficulty: 'hard', season: 'summer'},
                {id: 2, header: 'Oshten', difficulty: 'medium', season: 'winter'},
                {id: 3, header: 'Tchach', difficulty: 'easy', season: 'spring'}
            ]
        },
        clients: {
            clientsData: [
                {id: 1, name: 'AA', Email: 'aa@aa.aa', phone: '7602'}
            ],
            newEmailText: 'email@email'
        },
        comments: [
            {id: 1, user: 'Mr. X', comment: 'that\'s good' }
            ],
            newCommentText: ''
    },
    getState () {
        return this._state
    },
    _callSubscriber () {
        console.log('ch')
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },
    dispatch (action) {
        if (action.type === ADD_CLIENT) {
            let newClient = {
                id: 2, name: 'Mike', Email: this._state.clients.newEmailText, phone: '3234'
            }
            this._state.clients.clientsData.push(newClient)
            this._state.clients.newEmailText = ''
            this._callSubscriber(this._state)
            console.log(this._state.clients)
        }
        else if (action.type === UPDATE_EMAIL) {
            this._state.clients.newEmailText = action.text
            this._callSubscriber(this._state)
        }
        else if (action.type === ADD_COMMENT) {
            let newComment = {
                id: 2, user: 'User', comment: this._state.comments.newCommentText
            }
            this._state.comments.push(newComment)
            this._state.comments.newCommentText = ''
            this._callSubscriber(this._state)
        }
        else if (action.type === UPDATE_COMMENT) {
            this._state.comments.newCommentText = action.inputText
            this._callSubscriber(this._state)
        }
    }
}

export const addClientActionCreator = () => {
    return {
        type: ADD_CLIENT
    }
}
export const updateEmailActionCreator = (text) => {
    return {
        type: UPDATE_EMAIL,
        text: text
    }
}

export const updateCommentActionCreator = (inputText) => {
    return {
        type: UPDATE_COMMENT,
        inputText: inputText
    }
}

export const addCommentActionCreator = () => {
    return {
        type: ADD_COMMENT
    }
}

export default store