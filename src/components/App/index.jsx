import React, { Component } from 'react'
import 'normalize-css'

import styles from './app.css'
import Header from '../Header'
import Main from '../Main'

class App extends Component {
    constructor() {
        super()

        this.state = {
            user: {
                photoURL: 'https://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg',
                email: 'carlosrodriguez@gmail.com',
                onOpenText: false
            }
        }
    }
    render () {
        return (
            <div>
                <Header />
                <Main user={this.state.user} />
            </div>
        )
    }
}

export default App