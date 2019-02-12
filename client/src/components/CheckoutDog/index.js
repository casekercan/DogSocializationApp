import React, { Component } from "react";
import "../../styles/style.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


class CheckoutDog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dog: {}
        };
    }

    checkprogress = (done) => {

        if (done === false) {
            return <span className="badge badge-danger">X</span>
        } else {
            return <span className="badge badge-success">✓</span>
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
                    <div d-flex>
                        <p>
                            <thead>
                                <tr>
                                    <th scope="col" className="cell">Select</th>
                                    <th scope="col" className="cell">Type</th>
                                    <th scope="col" className="cell">Duration</th>
                                    <th scope="col" className="cell">AM/PM</th>
                                    <th scope="col" className="cell">Finished?</th>
                                </tr>
                            </thead>
                            {dog.socialization.map(soc =>
                                <tbody>
                                    <tr key={dog._id} className="table-active">
                                        <td className="cell">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                            </div>
                                        </td>
                                        <td className="cell">{soc.name}</td>
                                        <td className="cell">{soc.duration}</td>
                                        <td className="cell">{soc.ampm}</td>
                                        <td className="cell">{this.checkprogress(soc.done)}</td>
                                    </tr>
                                </tbody>
                            )}
                        </p>
                        <p>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Locations</label>
                                </div>
                                <select class="custom-select" id="inputGroupSelect01">
                                    <option selected>Choose...</option>
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
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Kennel Return</Button>
                    <Button onClick={this.props.onHide}>Signout</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default CheckoutDog;
