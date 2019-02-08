import React, { Component } from "react";
import StaffListWidget from "../components/StaffListWidget";
import "../styles/style.css";
import Button from "react-bootstrap/Button";
import AddEditStaff from "../components/AddEditStaff";

class StaffList extends Component {
    state={
        modalShow:false
    }

    loadModal = () => {
        this.setState({ modalShow: true })
    }

    render() {
        let modalClose = ()=> this.setState({modalShow:false});
        return (
            <div className="container">
                <div className="buttonSpace">
                    <Button 
                            variant="primary"
                            className="btn btn-lg newStaffBtn"
                            onClick={()=>this.loadModal()}>New Staff</Button>
                            <AddEditStaff show={this.state.modalShow} onHide={modalClose} />
                    <button className="btn btn-lg allStaffBtn">View Inactive</button>
                </div>
                <StaffListWidget />
            </div>
        )
    }
}

export default StaffList;