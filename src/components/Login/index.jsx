import Rect, { Component } from 'react'
import styles from './login.css'

class Login extends Component {
    render ()
    {
        return (
            <div className={styles.root}>
                <p className={styles.text}>
                    Necesitamos que inicies sesion con tu cuenta de Github para que puedas leer y escribir mensjae.
                </p>
                <button
                    onClick={this.props.onAuth}
                    className={styles.button}
                >
                    Login on Github 
                </button>
            </div>
        )
    }
 }

 export class Login