import React, { Component } from 'react'
import uuid from 'uuid'
import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'  

class Main extends Component {
    constructor () {
        super()
        this.state = {
            openText: false,
            messages: [{
                id: uuid.v4(),
                text: 'Mensaje del Tweet',
                picture: 'https://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg',
                displayName: 'Carlos Rodriguez',
                username: 'carlosrodriguez',
                date: Date.now() - 180000,
                retweets: 0,
                favorites: 0
            },
            {
                id: uuid.v4(),
                text: 'Este es un nuevo mensaje',
                picture: 'https://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg',
                displayName: 'Carlos Rodriguez',
                username: 'carlosrodriguez',
                date: Date.now() - 1800000,
                retweets: 0,
                favorites: 0
            }]
        }
        this.handleSendTex = this.handleSendText.bind(this);
        this.handleCloseText = this.handleCloseText.bind(this);
        this.handleOpenText = this.handleOpenText.bind(this);
    }
    handleSendText (event) {
        event.preventDefault();
        var newMessage = {
            id: uuid.v4(),
            username: this.props.user.email.split('@')[0],
            displayName: this.props.user.displayName,
            picture: this.props.user.photoURL,
            date: Date.now(),
            text: event.target.text.value
        }
        this.setState({
            messages: this.state.messages.concat([newMessage]),
            openText: false
        })
    }
    handleCloseText (event) {
        event.preventDefault();
        this.setState({ openText: false })
    }
    handleOpenText(event) {
        event.preventDefault()
        this.setState({ openText: true })
    }

    renderOpenText() {
        if (this.state.openText) {
            return (
                <InputText 
                    onSendText={this.handleSendTex}
                    onCloseText={this.handleCloseText}
                />
            )
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