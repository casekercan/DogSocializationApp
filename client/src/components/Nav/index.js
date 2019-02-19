import React, { Component } from "react";
import { Link } from 'react-router-dom';
import API from "../../utils/API";
import{Navbar,Nav, NavItem} from "react-bootstrap";


class NavB extends Component {
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
                sessionStorage.clear();
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
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"> 
                    <Navbar.Brand><Link to="/" style={{Color:'rgb(14,166,197)',marginRight:'5px'}}>sspa Socialization</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto" >
                        <NavItem style={{marginRight:'10px'}}><Link to="/doglist">All Dogs</Link></NavItem>
                        <NavItem style={{marginRight:'10px'}}><Link to="/stafflist">All Staff</Link></NavItem>
                        <NavItem style={{marginRight:'10px'}}><Link onClick={this.logout} to="#">Logout</Link></NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
            )
        } else {
            return (
                <Navbar bg="dark" variant="dark">
                    <span className="introLogin">Please <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link> to use the SSPA-Socialization App</span>
                </Navbar>
            );
        }
    }
}




export default NavB;


