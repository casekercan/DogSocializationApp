import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import Button from "react-bootstrap/Button";
import AddEditStaff from "../AddEditStaff";


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

    loadModal = (staff) => {
        this.setState({ modalInfo: staff });
        this.setState({ modalShow: true })
    }

    render() {
        let modalClose = ()=> this.setState({modalShow:false});
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
                                    <span name="mobileLabel">Mobile: </span><span name="ID">{this.state.staff.mobile}</span>
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
                            <Button 
                            variant="primary"
                            className="btn btn-lg editBtn"
                            onClick={()=>this.loadModal(this.state.staff)}>Edit Staff</Button>
                            <AddEditStaff show={this.state.modalShow} onHide={modalClose} props={this.state.modalInfo} />
                            </div>
                        </div>
                    </div>
                    {/* <div class="col socContainer">
                        <h3 name="shiftsLabel">Shifts</h3>
                        
                        <table name="shifts" className="table table-sm">
                            <thead>
                            <tr>
                                <th scope="col" >Date</th>
                                <th scope="col" >Hours</th>
                            </tr>
                            </thead>
                            {/*Map through array of shifts*/}
                            {/* <tbody>
                                {this.state.staff.worked.map(item=>
                                    <tr key={this.state.staff._id} className="table-active">
                                        <td>{moment(item[0]).format("MM DD YYYY")}</td>
                                        <td>{item[1]}</td>
                                    </tr>
                                )} */}
                            {/*Empty row to add new shift*/}
                            {/* <tr className="table-info">
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
                    </div> */}
                </div>
            </div>
        )
    }


}

export default StaffListWidget;

