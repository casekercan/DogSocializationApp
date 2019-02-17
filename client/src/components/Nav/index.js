import React, { Component } from "react";
import { Link } from 'react-router-dom';
import API from "../../utils/API";


class Nav extends Component {
    constructor() {
        super()
        this.state = {
            modal1Show: false,
            modal2Show: false,

        }
    };

    loadModal1 = () => {
        this.setState({ modal1Show: true })
    };

    loadModal2 = () => {
        this.setState({ modal2Show: true })
    }

    logout = (event) => {
        event.preventDefault()
        API.logout().then(res => {
            console.log(res.data)
            if (res.status === 200) {
                this.updateUserLogout(this.props.id)
                this.props.updateStaff({
                    loggedIn: false,
                    username: null,
                    id: null
                })
            }
        }).catch(error => {
            console.log('Logout error...' + error)
        })
    }

    updateUserLogout = (id) => {
        API.updateStaffLogout(id).then().catch(err => console.log(err));
    }



    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);

        if (loggedIn === true) {
            return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <Link className="navbar-brand" to="/"> HOME</Link>

                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/doglist">All Dogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/stafflist">All Staff</Link>
                        </li>
                        <li className="nav-item" >
                            <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>Logout</Link>
                        </li>
                    </ul>
                </nav>
            )
        } else {
            return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item" >
                            <Link to="/login" className="nav-link" variant="primary" >Login</Link>
                        </li>
                        <li className="nav-item" >
                            <Link to="/signup" variant="primary" className="nav-link" >Signup</Link>
                        </li>
                    </ul>
                </nav>
            );
        }
    }
}




export default Nav;


