import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import API from "../utils/API"

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        let loginstaff = {
            username: this.state.email,
            password: this.state.password
        }
        API.login(loginstaff).then(res => {
            console.log("login response: ")
            console.log(res)
            if (res.status === 200) {
                //call function to mark staff as active/available
                this.updateUserActive(res.data.id)
                sessionStorage.setItem("admin", res.data.admin);
                sessionStorage.setItem("id", res.data.id)
                // update App.js state
                this.props.updateStaff({
                    loggedIn: true,
                    username: res.data.email,
                    id: res.data.id
                })
                this.setState({
                    redirectTo: "/"
                })

            }
        }).catch(error => {
            console.log('login error: ')
            console.log(error);
        })
    }


    updateUserActive = (id) => {
        API.updateStaffLogin(id).then().catch(err => console.log(err));
    }

    signupButton = () => {
        this.setState({
            redirectTo: "/signup"
        })
    }


    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className="container">
                    <h4>Login</h4>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="email">Email</label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="password">Password: </label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className="col-7"></div>
                            <button
                                className="btn btn-primary col-1 col-mr-auto"
                                onClick={this.handleSubmit}
                                type="submit">Login</button>
                            <Link to="/signup"> Sign up</Link>
                        </div>
                    </form>
                </div>

            )
        }
    }
}

export default LoginForm
