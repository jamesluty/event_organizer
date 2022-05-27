import axios from 'axios'
import Navbar from '../Components/Navbar';
import Info from '../Components/Info';
import styles from '../Components/styles.module.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Account = (props) => {
    const [user, setUser] = useState("");

    useEffect(() => {
        let email = props.email
        axios.get(`http://localhost:8000/api/users/${email}`)
            .then(res => setUser(res.data.email))
            .catch(err => console.log(err))
    }, [props.email])

    return (
        <div>
            <Navbar account='true'/>
            <h1 className={styles.formHeader}>Account</h1>
            <div className={styles.accountWrapper}>
                <div className={styles.accountDiv}>
                    <div className={styles.accountLeft}>
                        <h3>Account Information</h3>
                        <hr />
                        <p><span>Username:</span> {user.username}</p>
                        <p><span>Name:</span> {user.firstName} {user.lastName}</p>
                        <div className={styles.addressDiv}>
                            <p><span>Address:</span> {user.address}, </p>
                            <p>{user.city}, {user.state} {user.zipcode}</p>
                        </div>
                        <button className={styles.editBtn}>Edit Account Info</button>
                    </div>
                    <hr />
                    <div className={styles.accountRight}>
                        <h3>Login Information</h3>
                        <hr />
                        <p><span>Email:</span> {user.email}</p>
                        <p><span>Password:</span> ********</p>
                    </div>
                </div>
            </div>
            <div className={styles.linkHome}>
                <Link to="/"><h3>Home</h3></Link>
            </div>
            <Info />
        </div>
    )
}

export default Account