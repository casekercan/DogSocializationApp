import React, { Component } from "react";
import StaffListWidget from "../components/StaffListWidget";
import "../styles/style.css";

class StaffList extends Component {


    render() {
        return (
            <div className="container">
                <div className="buttonSpace">
                    <button className="btn btn-lg newStaffBtn">New Staff</button>
                    <button className="btn btn-lg allStaffBtn">View Inactive</button>
                </div>
                <StaffListWidget />
            </div>
        )
    }
}

export default StaffList;