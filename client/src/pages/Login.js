import React, { Component } from "react";
import LoginWidget from "../components/LoginWidget";

import "../styles/style.css";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoginOpen: true,
            isRegisterOpen: false
        };
    }

    showRegisterBox() {
        this.state({isRegisterOpen: true, isLoginOpen: false});
    }


    render() {
        return (
            <div className="root-container">
                <div className="box-controller">
                    <div className={"controller " + (this.state.isLoginOpen ? "selected-controller": "")} onClick={this.showLoginBox.bind(this)}>Login</div>

                    <div className={"controller " + (this.state.isRegisterOpen ? "selected-controller": "")} onClick={this.showRegisterBox.bind(this)}>Register</div>
            </div>

            <FadeTransition isOpen={this.state.isLoginOpen} duration={500}>
                <div className="box-container">
                    <LoginBox/>
                </div>
            </FadeTransition>

            <FadeTransition isOpen={this.state.isRegisterOpen} duration={500}>
                <div className="box-container">
                    <RegisterBox/>
                </div>
            </FadeTransition>


            </div>
        );
    }
}

class LoginBox extends React.Component{

    constructor(props) {
        super(props);
        this.state = {};
    }

    submitLogin(e) {}

    render() {
        return (
            <div className="inner-container">
                <div className="header">
                 Login
                </div>

                    <div className="box">

                        <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            className="login-input"
                            placeholder="Username"/>
                        </div>

                        <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="login-input"
                            placeholder="Password"/>
                        </div>

                        <button
                        type="button"
                        className="login-btn"
                        onClick={this
                        .submitLogin
                        .bind(this)}>Login</button>

                        </div>
            </div>
        );
    }
}

function pop(props) {
    return
}

class RegisterBox extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "";
            errors:
        }
    }

}

export default Login;

