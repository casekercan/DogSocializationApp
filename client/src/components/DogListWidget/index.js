import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class DogListWidget extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            dogs: []
        };
    }


    componentDidMount() {
        this.findalldogs();
    };


    findalldogs = () => {
        API.getDogs().then(res => this.setState({ dogs: res.data })).catch(err => console.log(err));
    };


    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }


    render() {
        return (
            <table className="table table-striped">

                <thead>
                    <tr>
                        <th scope="col">Dog Name</th>
                        <th scope="col">Kennel #</th>
                        <th scope="col">Socialization Program</th>
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
                                    <button className="socEvent badge badge-primary text-wrap" onClick={() => this.handleOpenModal()}>{soc.name}/{soc.duration}/{soc.ampm}</button>
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

