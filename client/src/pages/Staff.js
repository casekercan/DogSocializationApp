import React, { Component } from "react";
import VolunteerList from "../components/VolunteerList";
import "../styles/style.css";

class Staff extends Component {


    render() {
        return (
            <div className="container">
                <VolunteerList />
            </div>
        )
    }
}

export default Staff;