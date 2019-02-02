import React, { Component } from "react";
import StaffWidget from "../components/StaffWidget";
import "../styles/style.css";

class Staff extends Component {


    render() {
        return (
            <div className="container">
                <StaffWidget />
            </div>
        )
    }
}

export default Staff;

