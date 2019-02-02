import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";


class StaffListWidget extends Component {
    constructor(props) {
        super(props)
        this.state = {
            staff: {}
        };
    };

    componentDidMount() {
        API.getStaff(this.props.props)
            .then(res => this.setState({ staff: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <h1>STAFF Name: {this.state.staff.name}</h1>
        )
    }


}

export default StaffListWidget;

