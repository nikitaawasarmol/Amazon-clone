
import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';
import "./Login.css";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const login = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            // logged in, redirect ot homepage
            history.push('/');
        })
        .catch(e => alert(e.message));
    };
    const register = (event) => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push('/');

        })
        .catch((e) => alert(e.message));
    };
    return (
        <div className = "login">
            <Link to = "/">
                <img
                className = "login__logo"
                src = "https://logodownload.org/wp-content/uploads/2014/04/amazon-logo-12.png"
                alt = ""
                />
            </Link>
            <div className = "login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value = {email} onChange = {event => setEmail(event.target.value)} type = "email">
                    </input>
                    <h5>Password</h5>
                    <input value = {password} onChange = {event => setPassword(event.target.value)}type = "password" />
                    <button onClick =  {login} type = "submit">Sign in</button>
                </form>
                <p>By continuing, you agree to Amazon's <a href = "#">Conditions of Use</a> and <a href = "#">Privacy Notice.</a></p>
                <h5> <a href = "#">Need help?</a> </h5>
                <h5> New to Amazon?</h5>
                <button onClick = {register}>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login;
