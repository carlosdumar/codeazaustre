import React, { PropTypes } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import styles from './profile.css'

const propTypes = {
    picture: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    emailAddress: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired

}
function Profile ({ picture, displayName, username, emailAddress, location} ) {
    return (
        <div className={styles.root}>
            <img className={styles.avatar} src={picture} />
            <span className={styles.name}>{displayName}</span>
            <ul className={styles.data}>
                <Router>
                    <Switch>
                        <Route exact path='/profile'>
                            <figure>
                                <img className={styles.avatar} src={picture} />
                            </figure>
                        </Route>
                    </Switch>
                </Router>
                <li>
                    <span className='fa fa-user'></span> {username}
                </li>
                <li>
                    <span className='fa fa-envelope'></span> {emailAddress}
                </li>
                <li>
                    <span className='fa fa-map-market'></span> {location}
                </li>
            </ul>
        </div>
    )
}
Profile.propTypes = propTypes

export default Profile