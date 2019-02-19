import React, { Component } from 'react';
import { Redirect,Link } from 'react-router-dom';
import API from "../utils/API";
import {Card,InputGroup,FormControl,Button} from "react-bootstrap";



class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',
			confirmPassword: '',
			redirectTo: ""
		}
	}

	handleChange=(event)=> {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit=(event)=> {
		event.preventDefault()

		let signupstaff = {
			email: this.state.email,
			password: this.state.password
		}

		API.signup(signupstaff).then(res => {
			if (!res.data.errmsg) {
				this.setState({
					//redirect to login page
					redirectTo: '/login'
				})
			} else {
				console.log('email already taken')
			}
		}).catch(error => {
			console.log('signup error: ')
			console.log(error)
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
                            <Card.Title>Sign-Up</Card.Title>
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
                                        style={{backgroundColor:'rgb(14,166,197)'}}
                                        onClick={this.handleSubmit}
                                        type="submit">Sign-Up</Button>
                                    <Link to="/login">Login</Link>
                                </div>
                            </form>
                        </Card>
				</div>
			)
		}
	}
}

export default SignupForm