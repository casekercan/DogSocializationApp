import React, { Component } from "react";
import DogWidget from "../components/DogWidget";
import "../styles/style.css";

class Dog extends Component {


    render() {
        return (
            <div className="container">
                <h1> Single Dog info Page</h1>
                <DogWidget />
            </div>
        )
    }
}

export default Dog;

