import React, { Component } from "react";
import DogListWidget from "../components/DogListWidget";
import "../styles/style.css";



class DogList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            staffid: this.props.staffid
        }
    };

    render() {

        return (

            <div className="container">
                <DogListWidget staffid={this.state.staffid} />
            </div>
        )
    }
}

export default DogList;

