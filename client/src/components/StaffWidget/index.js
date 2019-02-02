import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";


class StaffListWidget extends Component {
    constructor(props) {
        super(props)
        this.state = {
            staff: {}
        };
    };

    componentDidMount() {
        API.getStaff(this.props.props)
            .then(res => this.setState({ staff: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            
            <div className="container" >
                <div className="row">
                    <div class="col infoContainer">
                        <button className="btn btn-lg signoutBtn">Start Shift</button>
                        <button className="btn btn-lg returnBtn">End Shift</button>
                        <hr/>
                        <div className="d-flex">
                            <img src={this.state.staff.pic} alt="staff pic" class="img-thumbnail" />
                            <div>
                                <h3>
                                    <span name="staffName"><bold>{this.state.staff.name}</bold></span>
                                </h3>
                                <h5>
                                    <span name="emailLabel">ID: </span><span name="ID">{this.state.staff.email}</span>
                                </h5>
                                <h5>
                                    <span name="mobileLabel">ID: </span><span name="ID">{this.state.staff.mobile}</span>
                                </h5>
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                            <div>
                                <h3 name="notesLabel">Notes:</h3>
                            </div>
                            <div>
                                <h5 name="notes" className="notes">{this.state.staff.notes}</h5>
                            </div>
                            <div>
                            <button className="btn btn-lg editBtn">Edit Staff</button>
                            </div>
                        </div>
                    </div>
                    <div class="col socContainer">
                        <h3 name="shiftsLabel">Shifts</h3>
                        
                        <table name="shifts" className="table table-sm">
                            <thead>
                            <tr>
                                <th scope="col" >Date</th>
                                <th scope="col" >Hours</th>
                            </tr>
                            </thead>
                            {/*Map through array of shifts*/}
                            <tbody>
                            <tr key={this.state.staff._id} className="table-active">
                                <td>Jan 29, 2019</td>
                                <td>4</td>
                            </tr>
                            {/*Empty row to add new shift*/}
                            <tr className="table-info">
                                <td>
                                    <div className="col">
                                    <input className="form-control form-control-sm" type="text"/>
                                    </div>
                                </td>
                                <td>
                                    <div className="col">
                                    <input className="form-control form-control-sm" type="text"/>
                                    </div>
                                </td>
                                <div className="col">
                                    <button className="btn btn-sm" name="addSocPlan">Add</button>
                                </div>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }


}

export default StaffListWidget;

