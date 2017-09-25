import React, { Component } from 'react'
import MessageList from '../MessageList'

class Main extends Component {
    constructor () {
        super()
        this.state = {
            messages: [{
                text: 'Mensaje del Tweet',
                picture: 'https://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg',
                displayName: 'Carlos Rodriguez',
                username: 'carlosrodriguez',
                date: Date.now() - 180000
            },
            {
                text: 'Este es un nuevo mensaje',
                picture: 'https://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg',
                displayName: 'Carlos Rodriguez',
                username: 'carlosrodriguez',
                date: Date.now() - 1800000
            }
            ]
        }
    }
    render() { 
        return (
            <MessageList messages={this.state.messages} />
        )
    }
}

export default Main