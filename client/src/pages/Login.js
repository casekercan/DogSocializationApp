import React, { Component } from "react";
// import LoginWidget from "../components/LoginWidget";
import FadeTransition from "../src/transitions/fadeTransition";
import "../styles/login.css";

class Login extends Component {
    render() {
        return (
            <div>
                <h1> Login page </h1>
                <LoginWidget />
            </div>
        )
    }
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

