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
        }
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
        if (action.type === 'ADD-CLIENT') {
            let newClient = {
                id: 2, name: 'Mike', Email: this._state.clients.newEmailText, phone: '3234'
            }
            this._state.clients.clientsData.push(newClient)
            this._state.clients.newEmailText = ''
            this._callSubscriber(this._state)
            console.log(this._state.clients)
        }
        else if (action.type === 'UPDATE-EMAIL') {
            this._state.clients.newEmailText = action.text
            this._callSubscriber(this._state)
        }
    }
}

export default store