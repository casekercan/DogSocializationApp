import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";



class Locations extends Component {
    state = {
        dogsAll: []
    }
    componentDidMount() {
        this.pullcurrentLocation();
    };

    pullcurrentLocation = () => {
        API.getDogs()
            .then(res =>
                this.setState({ dogs: res.data })
            )
            .catch(err => console.log(err));

    }

    render() {
        return (
            <h1> All Dog List Component</h1>
        )
    }

}

export default Locations;

