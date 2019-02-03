import React, { Component } from "react";
import DogListWidget from "../components/DogListWidget";
import "../styles/style.css";

class DogList extends Component {


    render() {
        return (
            <div className="container">
                <div className="buttonSpace">
                    <button className="btn btn-lg newDogBtn">New Dog</button>
                    <button className="btn btn-lg allDogsBtn">View Inactive</button>
                </div>
                <DogListWidget />
            </div>
        )
    }
}

export default DogList;

