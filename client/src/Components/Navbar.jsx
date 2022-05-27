import React, { useState } from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useCookies} from 'react-cookie'

const Navbar = (props) => {
    const [cookie, setCookie, removeCookie] = useCookies()
    const [searchEvents, setSearchEvents] = useState("");
    const [searchLocation, setSearchLocation] = useState("");
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login/user")
    }

    const account = (id) => {
        navigate(`/account/`)
    }

    const goToCreate = () => {
        navigate("/create/event")
    }

    const logout = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/users/logout")
            .then(res => console.log(res))
            .catch(err => console.log(err))
        removeCookie('usertoken')
        navigate("/")
    }

    return (
        <div className={styles.navbarWrapper}>
            <div className={styles.navbar}>
                <div className={styles.siteName}>
                    <h1>Event Organizer</h1>
                </div>
                <form className={styles.searchForm}>
                    <input placeholder='Search Events' onChange={(e) => setSearchEvents(e.target.value)} value={searchEvents} />
                    <input placeholder='Search Location' onChange={(e) => setSearchLocation(e.target.value)} value={searchLocation} />
                    <button className={styles.searchBtn}>Search</button>
                </form>
            </div>
            {cookie.usertoken ? (
                <div>
                    {!props.account ? <button className={styles.loginBtn} onClick={account}>My Account</button> : <button className={styles.loginBtn} onClick={goToCreate}>Create Event</button>}
                    <button className={styles.loginBtn} onClick={logout}>Logout</button>
                </div>
                ) : <button onClick={goToLogin} className={styles.loginBtn}>Login</button>}
        </div>
    )
}

export default Navbar