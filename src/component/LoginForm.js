import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.scss";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("logged in successfully");
        console.log(email);
        console.log(password);
    };
    return (
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Email </label>
                    <input type="email" name="email" value={email} onChange={(event) => { setEmail(event.target.value) }} required />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" value={password} onChange={(event) => { setPassword(event.target.value) }} required />
                    <div>
                        <Link className="sign-up" to="/signup">Sign Up</Link>
                        <Link className="forget-password" to="/forgotpassword">Forgot Password</Link>
                    </div>
                </div>
                <div className="button-container">
                    <input type="submit" value="Log In" />
                </div>
            </form>
        </div>
    );
}
export default LoginForm;