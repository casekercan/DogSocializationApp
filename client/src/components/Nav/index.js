import React, { Component } from "react";
import { Link } from 'react-router-dom';
import API from "../../utils/API";


class Nav extends Component {
    constructor() {
        super()
        this.state = {
            modal1Show: false,
            modal2Show: false
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

        // let modal1Close = () => this.setState({ modal1Show: false }, () => {
        //     window.location.reload();
        // });

        // let modal2Close = () => this.setState({ modal2Show: false }, () => {
        //     window.location.reload();
        // });


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
                        <Link
                            to="/login"
                            className="nav-link"
                            variant="primary"
                            onClick={() => this.loadModal2()}>Login</Link>
                    </li>
                    <li className="nav-item" >
                        <Link
                            to="/signup"
                            variant="primary"
                            className="nav-link"
                            onClick={() => this.loadModal1()}>Signup</Link>
                    </li>
                </ul>
        }

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="/"> HOME</a>

                <ul className="navbar-nav mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/doglist">All Dogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/stafflist">All Staff</Link>
                    </li>

                    {newbuttons}


                </ul>
            </nav>
        );




    }
}




export default Nav;


