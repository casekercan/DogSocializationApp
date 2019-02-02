import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";


class DogWidget extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dog: {
                socialization: []
            },
        };
    }

    componentDidMount() {
        API.getDog(this.props.props)
            .then(res => this.setState({
                dog: res.data
            })).catch(err => console.log(err));
    }


    createTable = () => {

    }


    render() {
        return (
            <div className="container" >
                <div className="row">
                    <div class="col infoContainer">
                        <button className="btn btn-lg signoutBtn">Signout Dog</button>
                        <button className="btn btn-lg returnBtn">Return Dog</button>
                        <hr />
                        <div className="d-flex">
                            <img src={this.state.dog.pic} alt="dog pic" class="img-thumbnail" />
                            <div>
                                <h3>
                                    <span name="dogName"><bold>{this.state.dog.name}</bold></span>
                                </h3>
                                <h3>
                                    <span name="kennelLabel">Kennel: </span><span name="kennelNo">{this.state.dog.kennel}</span>
                                </h3>
                                <h5>
                                    <span name="IDLabel">ID: </span><span name="ID"> {this.state.dog.shelterID}</span>
                                </h5>
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                            <div>
                                <h3 name="notesLabel">Notes:</h3>
                            </div>
                            <div>
                                <h5 name="notes" className="notes">{this.state.dog.notes}</h5>
                            </div>
                            <div>
                                <button className="btn btn-lg editBtn">Edit Dog</button>
                            </div>
                        </div>
                    </div>
                    <div class="col socContainer">
                        <h3 name="socLabel">Socialization</h3>

                        <table name="socPlan" className="table table-sm">
                            <thead>
                                <tr>
                                    <th scope="col" >Type</th>
                                    <th scope="col" >Time</th>
                                    <th scope="col" >When</th>
                                    <th scope="col" className="col">Actions</th>
                                </tr>
                            </thead>
                            {/*Map through array of socialization plan*/}
                            <tbody>

                                {this.state.dog.socialization.map(item =>
                                    <tr key={this.state.dog._id} className="table-active">
                                        <td>{item[0]}</td>
                                        <td>{item[1]}</td>
                                        <td>{item[2]}</td>
                                        <td>
                                            <button className="btn btn-sm">Edit</button>
                                            <button className="btn btn-sm">Delete</button>
                                        </td>
                                    </tr>
                                )}
                                {/*Empty row to add new plan*/}
                                <tr className="table-info">
                                    <td>
                                        <div className="col">
                                            <input className="form-control form-control-sm" type="text" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="col">
                                            <input className="form-control form-control-sm" type="text" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="col">
                                            <input className="form-control form-control-sm" type="text" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="col">
                                            <button className="btn btn-sm" name="addSocPlan">Add</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )

    }

};

export default DogWidget;

