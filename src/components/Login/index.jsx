import React, { PropTypes } from 'react'
import styles from './login.css'

const propTypes = {
    onAuth: PropTypes.func.isRequired
}

function Login({ onAuth }) {
    return (
        <div className={styles.root}>
            <p className={styles.text}>
                Necesitamos que inicies sesion con tu cuenta de Github para que puedas leer y escribir mensjae.
            </p>
            <button
                onClick={onAuth}
                className={styles.button}
            >
                <span className='fa fa-github'></span>Login on Github 
            </button>
        </div>
    )
}
Login.propTypes = propTypes

 export default Login