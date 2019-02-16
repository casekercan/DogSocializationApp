import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import CheckoutDog from "../CheckoutDog";
import AddEditDog from "../AddEditDog";
import "../../styles/style.css"


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
        this.findalldogs();
    };
    findalldogs = () => {
        API.getDogs()
            .then(res => this.setState({
                dogs: res.data
            }, () => {
                this.setState({
                    inactive: false
                })
            }))
            .catch(err => console.log(err));
    }

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

    checkprogress = (soc) => {
        if (soc.done && !soc.inprogress) {
            return "btn-sm btn-success"
        } else if (!soc.done && !soc.inprogress) {
            return "btn-sm btn-danger"
        } else {
            return "btn-sm btn-warning"
        }
    }

    render() {
        let modalClose = () => this.setState({ modalShow: false });
        let modalClose2 = () => {
            this.setState({ modalShow2: false }, () => {
                this.findalldogs();
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
                                            key={i}
                                            onClick={() => this.loadModal(dog)}
                                            className={this.checkprogress(soc)}
                                            name={i}
                                        ><Badge>{soc.name}/{soc.duration}/{soc.ampm}</Badge></Button>
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

