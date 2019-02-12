import React, { Component } from "react";
import "../../styles/style.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import AddEditStaff from "../components/AddEditStaff";


class VolunteerList extends Component {

    state = {
        voteers: [],
        modalShow: false,
        inactive: false
    };


    componentDidMount() {
        API.getAllStaff()
            .then(res => this.setState({
                voteers: res.data
            }, () => {
                this.setState({
                    inactive: false
                })
            })).catch(err => console.log(err));
    };


    findAllStaff = () => {
        API.getAllStaff()
            .then(res => this.setState({
                voteers: res.data
            }, () => {
                this.setState({
                    inactive: false
                })
            })).catch(err => console.log(err));
    };

    findInactiveStaff = () => {
        API.getInactiveStaff()
            .then(res => this.setState({
                voteers: res.data
            }, () => {
                this.setState({
                    inactive: true
                })
            })).catch(err => console.log(err));
    };

    loadModal = () => {
        this.setState({ modalShow: true })
    }



    render() {
        let modalClose = () => this.setState({ modalShow: false }, () => {
            window.location.reload();
        });

        const isInactive = this.state.inactive;
        let button;

        if (isInactive) {
            button = <Button className="btn btn-lg" variant="primary" onClick={() => this.findAllStaff()}>View Active</Button>;
        } else {
            button = <Button className="btn btn-lg" variant="primary" onClick={() => this.findInactiveStaff()}>View Inactive</Button>;
        }

        return (
            <div className="container">
                <div className="buttonSpace">
                    <Button
                        variant="primary"
                        className="btn btn-lg newStaffBtn"
                        onClick={() => this.loadModal()}>New Staff</Button>
                    <AddEditStaff show={this.state.modalShow} onHide={modalClose} />
                    {button}
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col" className="headings">Volunteer</th>
                            <th scope="col" className="headings">E-mail</th>
                            <th scope="col" className="headings">Mobile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.voteers.map(voteer => (
                            <tr key={voteer._id}>
                                <th>{voteer.name}</th>
                                <th>{voteer.email}</th>
                                <th>{voteer.mobile}</th>
                                <th>  <Link to={"/staff/" + voteer._id} >More</Link> </th>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        )
    }

}

export default VolunteerList;