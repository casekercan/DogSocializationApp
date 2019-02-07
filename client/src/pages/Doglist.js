import React, { Component } from "react";
import DogListWidget from "../components/DogListWidget";
import "../styles/style.css";
import Button from "react-bootstrap/Button";
import AddEditDog from "../components/AddEditDog";



class DogList extends Component {
    state = {
        modalShow: false
    }

    loadModal = () => {
        this.setState({ modalShow: true })
    }

    render() {
        let modalClose = () => this.setState({ modalShow: false });
        return (
            <div className="container">
                <div className="buttonSpace">
                    <Button className="btn btn-lg newDogBtn" variant="primary" onClick={() => this.loadModal()}>New Dog</Button>
                    <AddEditDog show={this.state.modalShow} onHide={modalClose} />
                    <button className="btn btn-lg allDogsBtn">View Inactive</button>
                </div>
                <DogListWidget />
            </div>
        )
    }
}

export default DogList;

