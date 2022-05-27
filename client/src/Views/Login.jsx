import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Info from '../Components/Info';
import styles from '../Components/styles.module.css';
import { useCookies } from 'react-cookie';

const Login = (props) => {
    const [cookies, setCookie] = useCookies('usertoken');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const loginUser = (e) => {
        e.preventDefault();
        const user = {
            email: email,
            password: password
        }
        fetch("http://localhost:8000/api/users/login", {credentials: 'include', method: 'POST', mode: 'cors', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(user)})
            .then(res => {
                res.json()
            })
            .then(res => navigate("/"))
            .catch(err => console.log(err))
        
        props.email(email)
    }

    return (
        <div>
            <Navbar />
            <h1 className={styles.formHeader}>Login</h1>
            <div className={styles.loginWrapper}>
                <div className={styles.loginFormDiv}>
                    <form className={styles.loginForm} onSubmit={loginUser}>
                        <div className={styles.loginLeft}>
                            <label>Email: </label>
                            <input onChange={e => setEmail(e.target.value)} value={email} />
                        </div>
                        <div className={styles.loginRight}>
                            <label>Password: </label>
                            <input onChange={e => setPassword(e.target.value)} value={password} />
                        </div>
                        <div className={styles.loginFormBtnsWrapper}>
                            <button className={styles.loginFormBtn}>Login</button>
                            <Link to='/signup/user'>Sign-up</Link>
                        </div>
                    </form>
                </div>
            </div>
            <Info />
        </div>
    )
}

export default Login