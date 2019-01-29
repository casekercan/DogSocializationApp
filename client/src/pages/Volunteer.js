import React, { Component } from "react";
import VolunteerWidget from "../components/VolunteerWidget";
import "../styles/style.css";

class Volunteer extends Component {


    render() {
        return (
            <div className="container">
                <h1> Volunteer Info </h1>
                <VolunteerWidget />
            </div>
        )
    }
}

export default Volunteer;

