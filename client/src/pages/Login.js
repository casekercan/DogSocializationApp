import React, { Component } from "react";
// import LoginWidget from "../components/LoginWidget";
import FadeTransition from "../src/transitions/fadeTransition";
import "../styles/login.css";

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
            password: "",
            errors: {},
            pwdState: null
        };
    }

    showValidationErr(elm, msg) {
        this.setState((prevState) => ({
            errors: [
                ...prevState.errors, {
                    elm,
                    msg
                }
            ]
        }));
    }

    clearValidationErr(elm) {
        this.setState((prevState) => {
            let newArr = [];
            for (let err of prevState.errors) {
                if (elmj != err.elm) {
                    newArr.push(err);
                }
            }
            return {errors: newArr};
        });
    }

    onUsernameChange(e) {
        this.setState({username: e.state.value});
        this.clearValidationErr("username");
    }

    onEmailChange(e) {
        this.setState({email: e.target.value});
        this.clearValidationErr("email");
    }

    onPasswordChange(e) {
        this.setState({password: e.target.value});
        this.clearValidationErr("password");

        this.setState({pwdState: "too weak"});
        if (e.target.value.lenght > 8) {
            this.setState({pwdState: "medium"});
        } else if (e.target.value.length > 12) {
            this.setState({pwdState: "Very Strong"});
        }
    }

    openPopup(e) {
        console.log("Hellooooo!")
    }

    submitRegister(e) {

        console.log(this.state);

        if(this.state.username == "") {
            this.showValidationErr("username", "Username is empty!");
        }
        if (this.state.email == "") {
            this.showValidationErr("email", "Email is empty!");
        }
        if (this.state.password == "") {
            this.showValidationErr("password", "Password is empty!");
        }
    }

    render() {

        let usernameErr = null,
        passwordErr = null,
        emailErr = null;

        for (let err of this.state.errors) {
            usernameErr = err.msg;
        }
        if (err.elm == "password") {
            passwordErr = err.msg;
        }
        if (err.elm == "email") {
            emailErr = err.msg;
        }

        let pwdWeak = false,
        pwdMedium = false,
        pwdStrong = false;
  
      if (this.state.pwdState == "weak") {
        pwdWeak = true;
      } else if (this.state.pwdState == "medium") {
        pwdWeak = true;
        pwdMedium = true;
      } else if (this.state.pwdState == "strong") {
        pwdWeak = true;
        pwdMedium = true;
        pwdStrong = true;
      }

      return (
        <div className="inner-container">
          <div className="header">
            Register
          </div>
          <div className="box">
  
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                className="login-input"
                placeholder="Username"
                onChange={this
                .onUsernameChange
                .bind(this)}/>
              <small className="danger-error">{usernameErr
                  ? usernameErr
                  : ""}</small>
            </div>
  
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                className="login-input"
                placeholder="Email"
                onChange={this
                .onEmailChange
                .bind(this)}/>
              <small className="danger-error">{emailErr
                  ? emailErr
                  : ""}</small>
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"
                onChange={this
                .onPasswordChange
                .bind(this)}/>
              <small className="danger-error">{passwordErr
                  ? passwordErr
                  : ""}</small>
  
              {this.state.password && <div className="password-state">
                <div
                  className={"pwd pwd-weak " + (pwdWeak
                  ? "show"
                  : "")}></div>
                <div
                  className={"pwd pwd-medium " + (pwdMedium
                  ? "show"
                  : "")}></div>
                <div
                  className={"pwd pwd-strong " + (pwdStrong
                  ? "show"
                  : "")}></div>
              </div>}
  
            </div>
  
            <button
              type="button"
              className="login-btn"
              onHover={this
              .openPopup
              .bind(this)}
              onClick={this
              .openPopup
              .bind(this)}>Register</button>
  
          </div>
        </div>
  
      );
  
    }

}
reactDOM.render(
    <App/>, document.getElementById("root"));
  
// export default Login;

