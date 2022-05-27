import React, { useState } from 'react';
import axios from 'axios';
import Info from '../Components/Info';
import Navbar from '../Components/Navbar';
import styles from '../Components/styles.module.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const registerUser = (e) => {
        e.preventDefault();
        const newUser = {
            username: username,
            firstName: firstName,
            lastName: lastName,
            address: street,
            city: city,
            state: state,
            zipcode: zipcode,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }
        console.log(newUser)
        axios.post("http://localhost:8000/api/users/register", newUser)
            .then(res => {
                console.log(res)
                navigate("/login")
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Navbar/>
            <h1 className={styles.formHeader}>Sign-Up</h1>
            <div className={styles.signupWrapper}>
                <div className={styles.signupFormDiv}>
                    <form className={styles.signupForm} onSubmit={registerUser}>
                        <div className={styles.signupFormSubDiv}>
                            <label>Username: </label>
                            <input onChange={e => setUsername(e.target.value)} value={username} />
                        </div>
                        <div className={styles.signupFormSubDiv}>
                            <label>First Name: </label>
                            <input onChange={e => setFirstName(e.target.value)} value={firstName} />
                        </div>
                        <div className={styles.signupFormSubDiv}>
                            <label>Last Name: </label>
                            <input onChange={e => setLastName(e.target.value)} value={lastName} />
                        </div>
                        <div className={styles.signupFormSubDiv}>
                            <label>Address: </label>
                            <input onChange={e => setStreet(e.target.value)} value={street} />
                        </div>
                        <div className={styles.signupFormSubDiv}>
                            <label>City: </label>
                            <input onChange={e => setCity(e.target.value)} value={city} />
                        </div>
                        <div className={styles.signupFormSubDiv}>
                            <label>State: </label>
                            <input onChange={e => setState(e.target.value)} value={state} />
                        </div>
                        <div className={styles.signupFormSubDiv}>
                            <label>Zipcode: </label>
                            <input onChange={e => setZipcode(e.target.value)} value={zipcode} />
                        </div>
                        <div className={styles.signupFormSubDiv}>
                            <label>Email: </label>
                            <input onChange={e => setEmail(e.target.value)} value={email} />
                        </div>
                        <div className={styles.signupFormSubDiv}>
                            <label>Password: </label>
                            <input type='password' onChange={e => setPassword(e.target.value)} value={password} />
                        </div>
                        <div className={styles.signupFormSubDiv}>
                            <label>Confirm Password: </label>
                            <input type='password' onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} />
                        </div>
                        <div className={styles.loginFormBtnsWrapper}>
                            <button className={styles.loginFormBtn}>Sign-Up</button>
                        </div>
                    </form>
                </div>
            </div>
            <Info/>
        </div>
    )
}

export default Signup