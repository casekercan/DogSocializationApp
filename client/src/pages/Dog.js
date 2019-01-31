import React, { Component } from "react";
import DogWidget from "../components/DogWidget";
import "../styles/style.css";

class Dog extends Component {


    render() {
        return (
            <div className="container">
                <DogWidget />
            </div>
        )
    }
}

export default Dog;

