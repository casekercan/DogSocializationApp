import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import Button from "react-bootstrap/Button";
import CheckoutDog from "../CheckoutDog";
import AddEditDog from "../AddEditDog";


class DogWidget extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dog: {
                socialization: []
            },
            modalShow: false,
            modalInfo: {
                socialization: []
            },
            modal2Show: false,
            modal2Info: {
                socialization: []
            }
        };
    }

    componentDidMount() {
        API.getDog(this.props.props)
            .then(res => this.setState({
                dog: res.data
            })).catch(err => console.log(err));
    }

    loadModal = (dog) => {
        this.setState({ modalInfo: dog });
        this.setState({ modalShow: true })
    }

    loadModal2 = (dog) => {
        this.setState({ modal2Info: dog });
        this.setState({ modal2Show: true })
    }

    render() {
        let modalClose = () => {
            this.setState({ modalShow: false }, () => {
                window.location.reload();
            });
        };

        let modal2Close = () => this.setState({ modal2Show: false }, () => {
            window.location.reload();
        });

        return (
            <div className="container" >
                <div className="row">
                    <div class="col infoContainer">
                        <Button
                            variant="primary"
                            className="btn btn-lg signoutBtn"
                            onClick={() => this.loadModal(this.state.dog)}>Signout Dog</Button>
                        <CheckoutDog show={this.state.modalShow} onHide={modalClose} props={this.state.modalInfo} />
                        <button className="btn btn-lg returnBtn">Kennel Return</button>
                        <hr />
                        <div className="d-flex">
                            <img src={this.state.dog.pic} alt="dog pic" class="img-thumbnail" />
                            <div>
                                <h3>
                                    <span name="dogName" className="labels">{this.state.dog.name}</span>
                                </h3>
                                <h3>
                                    <span name="kennelLabel" className="labels">Kennel: </span><span name="kennelNo">{this.state.dog.kennel}</span>
                                </h3>
                                <h5>
                                    <span name="IDLabel" className="labels">ID: </span><span name="ID"> {this.state.dog.shelterID}</span>
                                </h5>
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                            <div>
                                <h3 name="descriptionLabel" className="labels">Description:</h3>
                            </div>
                            <div>
                                <h5 name="description" className="notes">{this.state.dog.description}</h5>
                            </div>
                            <div>
                                <h3 name="notesLabel" className="labels">Notes:</h3>
                            </div>
                            <div>
                                <h5 name="notes" className="notes">{this.state.dog.notes}</h5>
                            </div>

                            <div>
                                <Button className="btn btn-lg editBtn"
                                    variant="primary"
                                    onClick={() => this.loadModal2(this.state.dog)}>Edit Dog</Button>
                                <AddEditDog show={this.state.modal2Show} onHide={modal2Close} props={this.state.modal2Info} />
                            </div>
                        </div>
                    </div>
                    <div class="col socContainer">
                        <h3 name="socLabel" className="labels">Socialization Plan</h3>
                        <p>
                            <thead>
                                <tr>
                                    {/* <th scope="col" className="cell">Select</th> */}
                                    <th scope="col" className="cell">Type</th>
                                    <th scope="col" className="cell">Duration</th>
                                    <th scope="col" className="cell">AM/PM</th>
                                </tr>
                            </thead>
                            {this.state.dog.socialization.map(soc =>
                                <tbody>
                                    <tr key={this.state.dog._id} className="table-active">
                                        <td className="cell">{soc.name}</td>
                                        <td className="cell">{soc.duration}</td>
                                        <td className="cell">{soc.ampm}</td>
                                    </tr>
                                </tbody>
                            )}
                        </p>

                        {/* <table name="socPlan" className="table table-sm">
                            <thead>
                                <tr>
                                    <th scope="col" >Type</th>
                                    <th scope="col" >Time</th>
                                    <th scope="col" >When</th>
                                    <th scope="col" className="col">Actions</th>
                                </tr>
                            </thead>
                            {/*Map through array of socialization plan*/}
                        {/* <tbody>

                                {this.state.dog.socialization.map(soc =>
                                    <tr key={this.state.dog._id} className="table-active">
                                        <td>{soc.name}</td>
                                        <td>{soc.duration}</td>
                                        <td>{soc.ampm}</td>
                                        <td>
                                            <button className="btn btn-sm">Edit</button>
                                            <button className="btn btn-sm">Delete</button>
                                        </td>
                                    </tr>
                                )}
                                {/*Empty row to add new plan*/}
                        {/* <tr className="table-info">
                                    <td>
                                        <div className="col">
                                            <input className="form-control form-control-sm" type="text" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="col">
                                            <input className="form-control form-control-sm" type="text" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="col">
                                            <input className="form-control form-control-sm" type="text" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="col">
                                            <button className="btn btn-sm" name="addSocPlan">Add</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table> */}
                    </div>
                </div>
            </div>
        )

    }

};

export default DogWidget;

