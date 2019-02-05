import React, { Component } from "react";
import "./style.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


class CheckoutDog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dog: {}
        };
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
                        {dog.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{dog.name}</h4>
                    <p>
                        {dog.socialization.map(soc =>
                            <tr key={dog._id} className="table-active">
                                <td>{soc.name}</td>
                                <td>{soc.duration}</td>
                                <td>{soc.ampm}</td>
                                <td>
                                    <button className="btn btn-sm">Edit</button>
                                    <button className="btn btn-sm">Delete</button>
                                </td>
                            </tr>
                        )}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default CheckoutDog;
