import React, { Component } from "react";
import "./style.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";


class AddEditDog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dog: {}
        };
    }

    render() {
        let dogg = this.props.props;
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add or Edit Dog
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Name</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                    </div>
                    <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">pic URL</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                    </div>
                    <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Kennel</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                    </div>
                    <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Shelter ID</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                    </div>
                    <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Intake Date</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                    </div>
                    <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Description</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                    </div>
                    <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Playstyle</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                    </div>
                    <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Notes</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                    </div>
                    <div>
                        <h4>Socialization Plan</h4>
                        <thead>
                            <tr>
                                <th scope="col" >Type</th>
                                <th scope="col" >Time</th>
                                <th scope="col" >When</th>
                                <th scope="col" className="col">Actions</th>
                            </tr>
                        </thead>
                        {dogg.socialization.map(soc =>
                        <tbody>
                            <tr key={dogg._id} className="table-active">
                                <td>{soc.name}</td>
                                <td>{soc.duration}</td>
                                <td>{soc.ampm}</td>
                                <td>
                                    <button className="btn btn-sm">Edit</button>
                                    <button className="btn btn-sm">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                        )}
                    </div>
                    <hr/>
                    <div>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        </InputGroup.Prepend>
                        ACTIVE
                    </InputGroup>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Add Dog</Button>
                    <Button onClick={this.props.onHide}>Edit Dog</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default AddEditDog;