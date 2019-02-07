import React, { Component } from "react";
import "./style.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "../Form";

class AddEditDog extends Component {


    render() {
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
                    <Form dog={this.props.props} />
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