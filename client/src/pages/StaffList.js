import React, { Component } from "react";
import StaffListWidget from "../components/StaffListWidget";
import "../styles/style.css";
import Button from "react-bootstrap/Button";
import AddEditStaff from "../components/AddEditStaff";
import API from "../utils/API";

class StaffList extends Component {
    state={
        modalShow:false,
        inactive:false,
        voteers:[]
    }

    findAllStaff = () => {
        API.getAllStaff().then(res => this.setState({ voteers: res.data })).catch(err => console.log(err));
    };

    loadModal = () => {
        this.setState({ modalShow: true })
    }

    findInactiveStaff = () => {
        API.getInactiveStaff()
            .then(res => this.setState({
                voteers: res.data
            }, () => {
                this.setState({
                    inactive: true
                })
            }))
            .catch(err => console.log(err));
    }

    render() {
        let modalClose = ()=> this.setState({modalShow:false},()=>{
            window.location.reload();
        });
        const isInactive = this.state.inactive;
        let iButton;

        if (isInactive) {
            iButton = <Button className="btn btn-lg allStaffBtn" variant="primary" onClick={() => this.findAllStaff()}>View Active</Button>;
        } else {
            iButton = <Button className="btn btn-lg allStaffBtn" variant="primary" onClick={() => this.findInactiveStaff()}>View Inactive</Button>;
        }

        return (
            <div className="container">
                <div className="buttonSpace">
                    <Button 
                            variant="primary"
                            className="btn btn-lg newStaffBtn"
                            onClick={()=>this.loadModal()}>New Staff</Button>
                            <AddEditStaff show={this.state.modalShow} onHide={modalClose} />
                    {iButton}
                </div>
                <StaffListWidget />
            </div>
        )
    }
}

export default StaffList;