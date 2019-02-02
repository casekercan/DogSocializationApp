import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";


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
                            <th>
                                {dog.socialization.map(soc => (
                                    <span className="socEvent badge badge-primary text-wrap">{soc[0]}/{soc[1]}/{soc[2]}</span>
                                ))}
                            </th>
                            <th>  <Link to={"/dog/" + dog._id} >More</Link> </th>
                        </tr>
                    ))}
                </tbody>
            </table>

        )
    }

}

export default DogListWidget;

