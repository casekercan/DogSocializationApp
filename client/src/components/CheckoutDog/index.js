import React, { Component } from "react";
import "../../styles/style.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
//import API from "../../utils/API";


class CheckoutDog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkoutActivity: "",
            checkoutLocation: "",
            staffid: sessionStorage.id,
        };
    }

    checkprogress = (done) => {
        if (!done) {
            return <span className="badge badge-danger">X</span>
        } else {
            return <span className="badge badge-success">✓</span>
        }

    }

    handleCheckout = (location) => {
        if (location === "Kennel") {
            console.log("GREAT! dog now checked out...")
        } else {
            console.log("Dog isn't in Kennel. Dog is located in: " + location)
        }

    }

    handleReturn = (location) => {
        if (location === "Kennel") {
            console.log("Please check out dog first. ")
        } else {
            console.log("GREAT! Thanks for returning dog")
        }
    }


    render() {
        let dog = this.props.props;

        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {dog.name} Signout/Kennel Return
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6 className="instructions">Check plan and location dog is moved to</h6>
                    <hr />
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col" className="cell">Select</th>
                                    <th scope="col" className="cell">Type</th>
                                    <th scope="col" className="cell">Duration</th>
                                    <th scope="col" className="cell">AM/PM</th>
                                    <th scope="col" className="cell">Finished?</th>
                                </tr>
                            </thead>
                            {dog.socialization.map((soc, idx) =>
                                <tbody key={idx}>
                                    <tr key={dog._id} className="table-active">
                                        <td className="cell">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name={idx} id="exampleRadios1" value={idx} />
                                            </div>
                                        </td>
                                        <td className="cell">{soc.name}</td>
                                        <td className="cell">{soc.duration}</td>
                                        <td className="cell">{soc.ampm}</td>
                                        <td className="cell">{this.checkprogress(soc.done)}</td>
                                    </tr>
                                </tbody>
                            )}
                        </table>
                        <hr />
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" >Locations</label>
                            </div>
                            <select className="custom-select" name="locationInput">
                                <option >Choose...</option>
                                <option value="1">Off-Campus</option>
                                <option value="2">The Track</option>
                                <option value="3">East Group Area</option>
                                <option value="4">North Group Area</option>
                                <option value="5">North Concrete Area</option>
                                <option value="6">The Dirt</option>
                                <option value="7">Grassy 1</option>
                                <option value="8">Grassy 2</option>
                                <option value="9">Grassy 3</option>
                                <option value="10">South Concrete Area</option>
                            </select>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => this.handleReturn(dog.location)}>Kennel Return</Button>
                    <Button onClick={() => this.handleCheckout(dog.location)}>Signout</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default CheckoutDog;
