import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import "./style.css";


class DogForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            socialization: [
                {
                    type: "",
                    duration: 0,
                    ampm: ""
                }
            ]
        };
    }

    componentDidMount() {
        this.loadState(this.props.dog)
    }

    loadState = data => {
        this.setState({ ...data })
    }
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    checkfordata = (data) => {
        if (data[0].type === "") {
            return false
        } else {
            return true
        }
    }

    render() {
        return (
            <div>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
                    </div>
                    <input name="name" value={this.state.name} onChange={this.handleInputChange} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">pic URL</span>
                    </div>
                    <input name="pic" value={this.state.pic} onChange={this.handleInputChange} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Kennel</span>
                    </div>
                    <input name="kennel" value={this.state.kennel} onChange={this.handleInputChange} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Shelter ID</span>
                    </div>
                    <input name="shelterID" value={this.state.shelterID} onChange={this.handleInputChange} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Intake Date</span>
                    </div>
                    <input name="intakeDate" value={this.state.intakeDate} onChange={this.handleInputChange} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Description</span>
                    </div>
                    <input name="description" value={this.state.description} onChange={this.handleInputChange} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Playstyle</span>
                    </div>
                    <input name="playStyle" value={this.state.playStyle} onChange={this.handleInputChange} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Notes</span>
                    </div>
                    <input name="notes" value={this.state.notes} onChange={this.handleInputChange} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div>
                    <h4>Socialization Plan</h4>
                    <thead>
                        <tr>
                            <th scope="col" >Type</th>
                            <th scope="col" >Time</th>
                            <th scope="col" >When</th>
                            <th scope="col" className="col">Actions</th>
                        </tr>
                    </thead>
                    {this.checkfordata(this.state.socialization) ?
                        this.state.socialization.map(soc =>
                            <tbody>
                                <tr key={this.state._id} className="table-active">
                                    <td>{soc.name}</td>
                                    <td>{soc.duration}</td>
                                    <td>{soc.ampm}</td>
                                    <td>
                                        <button className="btn btn-sm">Edit</button>
                                        <button className="btn btn-sm">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        ) :
                        <tbody id="socialization">
                            <tr className="table-active">
                                <td><input name="socialization.type" value={this.state.socialization.type} onChange={this.handleInputChange} type="text" className="form-control" /></td>
                                <td><input name="socialization.duration" value={this.state.socialization.duration} onChange={this.handleInputChange} type="number" className="form-control" /></td>
                                <td><input name="socialization.ampm" value={this.state.socialization.ampm} onChange={this.handleInputChange} type="text" className="form-control" />
                                </td>
                                <td>
                                    <button className="btn btn-sm">Add More</button>
                                </td>
                            </tr>

                        </tbody>
                    }
                </div>
                <hr />
                <div>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        </InputGroup.Prepend>
                        ACTIVE
                    </InputGroup>
                </div>
            </div>
        );
    }
}
export default DogForm;