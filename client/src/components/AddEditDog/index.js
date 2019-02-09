import React, { Component } from "react";
import "./style.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import DogForm from "../DogForm";
import API from "../../utils/API";


class AddEditDog extends Component {
    updateDog = () => {
        API.editDog()
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err));
    }


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
                    <DogForm dog={this.props.props} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Add Dog</Button>
                    <Button onClick={this.props.onHide} >Edit Dog</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default AddEditDog;