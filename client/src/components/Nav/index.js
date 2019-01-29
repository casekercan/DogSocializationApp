import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">


            <a className="navbar-brand" href="/"> HOME</a>


            <ul className="navbar-nav mt-2 mt-lg-0">
                <li className="nav-item">
                    <a className="nav-link" href="/dog">Dog</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/doglist">All Dogs</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/volunteer">Volunteer</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/login">Login/Logout</a>
                </li>




            </ul>
        </nav>
    );
}


export default Nav;


