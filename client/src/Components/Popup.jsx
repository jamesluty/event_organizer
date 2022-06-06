import React, { useState } from 'react'
import styles from './styles.module.css'

const Popup = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    
    const handleSubmit = () => {
        const fullName = `${firstName} ${lastName}`
        props.getName(fullName)
        props.togglePopup(false)
    }

    return (
        <div className={styles.popupBox} onClick={props.handleClose}>
            <div className={styles.box}>
                <span className={styles.closeIcon}>x</span>
                <h3>Please enter your name:</h3>
                <form onSubmit={handleSubmit}>
                    <label>First Name: </label>
                    <input onChange={(e) => setFirstName(e.target.value)} value={firstName}/><br/>
                    <label>Last Name:</label>
                    <input onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                </form>
            </div>
        </div>
    )
}

export default Popup