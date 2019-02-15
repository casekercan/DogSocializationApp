import React, { Component } from 'react'
import API from "../utils/API";



class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',
			confirmPassword: '',

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
		console.log('sign-up-form, email: ');
		console.log(this.state.email);
		//request to server here

		API.signup(this.state.email, this.state.password).then(res => {
			console.log(res)
			if (!res.data.errmsg) {
				console.log('successful signup')
				this.setState({ //redirect to login page
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

		return (
			<div className="SignupForm">

				<form className="form-horizontal">
					<div className="form-group">
						<div className="col-1 col-ml-auto">
							<label className="form-label" htmlFor="email">E-mail</label>
						</div>
						<div className="col-3 col-mr-auto">
							<input className="form-input"
								type="text"
								id="email"
								name="email"
								placeholder="E-mail"
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

						<button className="btn btn-primary col-1 col-mr-auto" onClick={this.handleSubmit}>Sign up</button>


					</div>
				</form>
			</div>

		)
	}
}

export default SignupForm