import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import CheckoutDog from "./CheckoutDog";


class DogListWidget extends Component {
    state = {
        dogs: [],
        show:false
    };

    componentDidMount() {
        this.findalldogs();
    };


    findalldogs = () => {
        API.getDogs().then(res => this.setState({ dogs: res.data })).catch(err => console.log(err));
    };

    showModal = () => {
        this.setState({show:true})
    }

    hideModal = () => {
        this.setState({show:false})
    }


    render() {
        return (
            <table className="table table-striped">
                <CheckoutDog show={this.state.show} handleClose={this.hideModal}>
                    <p>Modal</p>
                    <p>Data</p>
                </CheckoutDog>
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
                                    <span type="button" onClick={this.showModal} className="socEvent badge badge-primary text-wrap">{soc[0]}/{soc[1]}/{soc[2]}</span>
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

