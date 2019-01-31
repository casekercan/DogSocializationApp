import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";




class DogListWidget extends Component {
    state = {
        dogs: []
    };

    componentDidMount() {
        this.findalldogs();
    };


    findalldogs = () => {
        API.getDogs().then(res => this.setState({ dogs: res.data })).catch(err => console.log(err));
    };

    viewdog = (id) => {

    }

    render() {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Dog Name</th>
                        <th scope="col">Kennel #</th>
                        <th scope="col">Socialization Progress</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.dogs.map(dog => (
                        <tr key={dog._id}>
                            <th>{dog.name}</th>
                            <th>{dog.kennel}</th>
                            <th>{dog.socialization} Need to add data</th>
                            <th><button className="btn btn-primary" onClick={() => this.viewdog(dog._id)}>View More</button></th>
                        </tr>
                    ))}
                </tbody>
            </table>

        )
    }

}

export default DogListWidget;

