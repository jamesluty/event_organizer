import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share'

const Info = () => {
    return (
        <div className={styles.siteMap}>
            <div className={styles.siteMapWrapper}>
                <h2 className={styles.siteInfo}>Site Map</h2>
                <hr />
                <div className={styles.siteMapBody}>
                    <div className={styles.siteMapDiv}>
                        <h3>Your Account</h3>
                        <div className={styles.siteMapLinks}>
                            <Link className={styles.siteLinks} to="/login">Login</Link>
                            <Link className={styles.siteLinks} to="/signup">Signup</Link>
                            <Link className={styles.siteLinks} to="/account">Account Page</Link>
                        </div>
                    </div>
                    <div className={styles.siteMapDiv}>
                        <h3>Event Organizer</h3>
                        <div className={styles.siteMapLinks}>
                            <Link className={styles.siteLinks} to="/">Events</Link>
                            <Link className={styles.siteLinks} to="/create/event">Create an event</Link>
                            <Link className={styles.siteLinks} to="/groups">Groups</Link>
                            <Link className={styles.siteLinks} to="/about">About</Link>
                        </div>
                    </div>
                    <div className={styles.siteMapDiv}>
                        <h3>Share with Friends</h3>
                        <div className={styles.siteMapShare}>
                            <TwitterShareButton url='http://google.com'>
                                <TwitterIcon size={50} round={true} />
                            </TwitterShareButton>
                            <FacebookShareButton url='http://google.com'>
                                <FacebookIcon size={50} round={true} />
                            </FacebookShareButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info