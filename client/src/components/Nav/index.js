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
                // <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                //     <Link className="navbar-brand" to="/"> HOME</Link>
                //     <ul className="navbar-nav mt-2 mt-lg-0">
                //         <li className="nav-item">
                //             <Link className="nav-link" to="/doglist">All Dogs</Link>
                //         </li>
                //         <li className="nav-item">
                //             <Link className="nav-link" to="/stafflist">All Staff</Link>
                //         </li>
                //         <li className="nav-item" >
                //             <Link to="#" className="btn btn-link text-light" onClick={this.logout}>Logout</Link>
                //         </li>
                //     </ul>
                // </nav>
            )
        } else {
            return (
                <Navbar bg="dark" variant="dark">
                    {/* previously in navbar className="navbar navbar-expand-lg navbar-dark bg-primary" */}
                    {/* <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item" >
                            <Link to="/login" className="nav-link" variant="primary" >Login</Link>
                        </li>
                        <li className="nav-item" >
                            <Link to="/signup" variant="primary" className="nav-link" >Signup</Link>
                        </li>
                    </ul> */}
                <span style={{textColor:'red'}}>Please <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link> to use the SSPA-Socialization App</span>
                </Navbar>
            );
        }
    }
}




export default NavB;


