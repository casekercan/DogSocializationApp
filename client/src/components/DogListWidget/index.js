import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import CheckoutDog from "../CheckoutDog";
import AddEditDog from "../AddEditDog";



class DogListWidget extends Component {
    constructor() {
        super();
        this.state = {
            dogs: [],
            modalShow: false,
            modalShow2: false,
            modalInfo: {
                socialization: []
            },
            inactive: false
        };
    }

    componentDidMount() {
        API.getDogs()
            .then(res => this.setState({
                dogs: res.data
            }, () => {
                this.setState({
                    inactive: false
                })
            }))
            .catch(err => console.log(err));
    };

    findInactive = () => {
        API.getInactiveDogs()
            .then(res => this.setState({
                dogs: res.data
            }, () => {
                this.setState({
                    inactive: true
                })
            }))
            .catch(err => console.log(err));
    }

    loadModal = (dog) => {
        this.setState({ modalInfo: dog });
        this.setState({ modalShow: true })
    }

    loadModal2 = () => {
        this.setState({ modalShow2: true });
    }


    render() {
        let modalClose = () => this.setState({ modalShow: false });
        let modalClose2 = () => {
            this.setState({ modalShow2: false }, () => {
                window.location.reload();
            });
        };
        const isInactive = this.state.inactive;
        let button;


        if (isInactive) {
            button = <Button className="btn btn-lg allDogsBtn" variant="primary" onClick={() => this.findalldogs()}>View Active</Button>;
        } else {
            button = <Button className="btn btn-lg allDogsBtn" variant="primary" onClick={() => this.findInactive()}>View Inactive</Button>;
        }

        return (
            <div className="container">
                <div className="buttonSpace">
                    <Button className="btn btn-lg newDogBtn" variant="primary" onClick={() => this.loadModal2()}>New Dog</Button>
                    <AddEditDog show={this.state.modalShow2} onHide={modalClose2} />

                    {button}

                </div>

                <table className="table table-striped">

                    <thead>
                        <tr>
                            <th scope="col" className="headings">Dog Name</th>
                            <th scope="col" className="headings">Kennel #</th>
                            <th scope="col" className="headings">Socialization Program</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.dogs.map(dog => (
                            <tr key={dog._id}>
                                <th>{dog.name}</th>
                                <th>{dog.kennel}</th>
                                <th>
                                    {dog.socialization.map((soc, i) => (
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
            </div>
        )
    }

}

export default DogListWidget;

