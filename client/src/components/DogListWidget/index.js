import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import CheckoutDog from "../CheckoutDog";



class DogListWidget extends Component {
    constructor() {
        super();
        this.state = {
            dogs: [],
            modalShow: false,
            modalInfo: {
                socialization: []
            }
        };
    }

    componentDidMount() {
        this.findalldogs();
    };


    findalldogs = () => {
        API.getDogs().then(res => this.setState({ dogs: res.data })).catch(err => console.log(err));
    };

    loadModal = (dog) => {
        this.setState({ modalInfo: dog });
        this.setState({ modalShow: true })
    }

    render() {
        let modalClose = () => this.setState({ modalShow: false });
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
                                {dog.socialization.map((soc,i) => (
                                    <Button
                                        variant="primary"
                                        onClick={() => this.loadModal(dog)}
                                        className="socEvent badge badge-primary text-wrap"
                                        name={i}
                                    >{soc.name}/{soc.duration}/{soc.ampm}</Button>
                                ))}
                                <CheckoutDog show={this.state.modalShow} onHide={modalClose} props={this.state.modalInfo} />
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

