import React, { Component } from 'react'
import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'  

class Main extends Component {
    constructor () {
        super()
        this.state = {
            openText: false,
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
    handleOpenText(event) {
        event.preventDefault()
        this.setState({ onOpenText: true })
    }

    renderOpenText() {
        if (this.state.openText) {
            return <InputText />
        }
    }
    render() { 
        return (
            <div>
                <ProfileBar 
                    picture={this.props.user.photoURL}
                    username={this.props.user.email.split('@')[0]}
                    onOpenText={this.handleOpenText}
                />
                {this.renderOpenText()}
                <MessageList messages={this.state.messages} />
            </div>
        )
    }
}

export default Main