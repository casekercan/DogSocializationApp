import React, { Component } from "react";
import "./style.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import StaffForm from "../StaffForm";

class AddEditStaff extends Component {
    
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
                        Add or Edit Staff
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <StaffForm staff={this.props.props} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Add Staff</Button>
                    <Button onClick={this.props.onHide}>Edit Staff</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default AddEditStaff;