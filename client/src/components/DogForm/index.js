import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import "./style.css";


class DogForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            socialization: [],
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

    handleSocializationNameChange = idx => evt => {
        const newSocialization = this.state.socialization.map((soc, sidx) => {
            if (idx !== sidx) return soc;
            return { ...soc, name: evt.target.value };
        });

        this.setState({ socialization: newSocialization });
    };

    handleSocializationDurationChange = idx => evt => {
        const newSocialization = this.state.socialization.map((soc, sidx) => {
            if (idx !== sidx) return soc;
            return { ...soc, duration: evt.target.value };
        });

        this.setState({ socialization: newSocialization });
    };

    handleSocializationAmpmChange = idx => evt => {
        const newSocialization = this.state.socialization.map((soc, sidx) => {
            if (idx !== sidx) return soc;
            return { ...soc, ampm: evt.target.value };
        });

        this.setState({ socialization: newSocialization });
    };


    handleAddSocialization = () => {
        this.setState({
            socialization: this.state.socialization.concat([{ name: "", duration: 0, ampm: "" }])
        });
    };



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
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>

                    {this.state.socialization.map((soc, idx) => (
                        <div className="socialization">
                            <input
                                type="text"
                                placeholder={`Socialization #${idx + 1} name`}
                                value={soc.name}
                                onChange={this.handleSocializationNameChange(idx)}
                            />
                            <input
                                type="number"
                                placeholder={`Socialization #${idx + 1} duration`}
                                value={soc.duration}
                                onChange={this.handleSocializationDurationChange(idx)}
                            />
                            <input
                                type="text"
                                placeholder={`Socialization #${idx + 1} AM or PM?`}
                                value={soc.ampm}
                                onChange={this.handleSocializationAmpmChange(idx)}
                            />
                        </div>

                    ))}
                    <button
                        type="button"
                        onClick={this.handleAddSocialization}
                        className="small" >Add Another Socialization</button>
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