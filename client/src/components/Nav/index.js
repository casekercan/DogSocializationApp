import React, { Component } from "react";
import { Link } from 'react-router-dom';
import API from "../../utils/API";




class Nav extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        API.logout().then(res => {
            console.log(res.data)
            if (res.status === 200) {
                this.props.updateStaff({
                    loggedIn: false,
                    username: null
                })
            }
        }).catch(error => {
            console.log('Logout error...' + error)
        })
    }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        let newbuttons;

        if (loggedIn === true) {
            newbuttons =
                <li className="nav-item" >
                    <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>Logout</Link>
                </li>
        } else {
            newbuttons =
                <ul>
                    <li className="nav-item" >
                        <a className="nav-link" href="/login">login</a>
                    </li>
                    <li className="nav-item" >
                        <a className="nav-link" href="/signup">sign up</a>
                    </li>
                </ul>
        }

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="/"> HOME</a>

                <ul className="navbar-nav mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="/doglist">All Dogs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/stafflist">All Staff</a>
                    </li>

                    {newbuttons}


                </ul>
            </nav>
        );




    }
}




export default Nav;


