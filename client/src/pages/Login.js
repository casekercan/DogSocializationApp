import React, { Component } from "react";
import LoginWidget from "../components/LoginWidget";

import "../styles/style.css";

class Login extends Component {


    render() {
        return (
            <div className="container">
                <h1> Login Page</h1>
                <LoginWidget />
            </div>
        )
    }
}

export default Login;

