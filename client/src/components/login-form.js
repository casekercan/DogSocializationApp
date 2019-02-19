import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import API from "../utils/API";
import {Card,Button,InputGroup,FormControl} from "react-bootstrap";

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
                    <br/>
                    <Card bg="dark" className="text-white">
                            <Card.Title style={{fontSize:'24px',textAlign:'center'}}>Login</Card.Title>
                            <form className="form-horizontal">
                                <div className="form-group">
                                    <div className="col-1 col-ml-auto">
                                        <label className="form-label" htmlFor="email">Email</label>
                                    </div>
                                    <div >
                                    <InputGroup className="col-9 col-mr-auto">
                                        <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-lg">E-mail</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl 
                                            aria-label="Default" 
                                            aria-describedby="inputGroup-sizing-lg" 
                                            className="form-input"
                                            type="text"
                                            id="email"
                                            name="email"
                                            placeholder="someone@domain.com"
                                            value={this.state.email}
                                            onChange={this.handleChange} />
                                    </InputGroup>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-1 col-ml-auto">
                                        <label className="form-label" htmlFor="password">Password: </label>
                                    </div>
                                    <div>
                                    <InputGroup className="col-9 col-mr-auto">
                                        <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-lg">Password</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl 
                                            aria-label="Default" 
                                            aria-describedby="inputGroup-sizing-lg" 
                                            className="form-input"
                                            type="password"
                                            id="email"
                                            name="password"
                                            placeholder="password"
                                            value={this.state.password}
                                            onChange={this.handleChange} />
                                    </InputGroup>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <Button
                                        className="btn col-2 col-mr-auto"
                                        style={{backgroundColor:'rgb(14,166,197)',margin:'20px', textAlign:'center'}}
                                        onClick={this.handleSubmit}
                                        type="submit">Login</Button>
                                    <Link to="/signup"> Sign up</Link>
                                </div>
                            </form>
                        </Card>
                </div>

            )
        }
    }
}

export default LoginForm
