import React, { Component } from "react";
import StaffListWidget from "../components/StaffListWidget";
import "../styles/style.css";
import Button from "react-bootstrap/Button";
import AddEditStaff from "../components/AddEditStaff";

class StaffList extends Component {

    constructor(props){
        super(props)
        this.state={
            staff:{}
        }
    }

    loadModal = (staff) => {
        this.setState({modalInfo: staff})
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
                            <AddEditStaff show={this.state.modalShow} onHide={modalClose} props={this.state.modalInfo} />
                    <button className="btn btn-lg allStaffBtn">View Inactive</button>
                </div>
                <StaffListWidget />
            </div>
        )
    }
}

export default StaffList;