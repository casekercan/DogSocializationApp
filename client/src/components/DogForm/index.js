import React, { Component } from "react";
import "./style.css";


class DogForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            socialization: [],
            isChecked: true,
        };

    }

    componentDidMount() {
        this.loadState(this.props.dog);
    }

    loadState = data => {
        this.setState({ ...data }, () => {
            this.state.active ? this.setState({ isChecked: true }) : this.setState({ isChecked: false })
        })
    }

    updateMainState = () => {
        this.props.update(this.state);
    }

    handleCheckboxChange = event => {
        const name = event.target.name;

        this.setState({ isChecked: event.target.checked }, () => {
            this.setState({
                [name]: this.state.isChecked
            }, () => {
                this.updateMainState();
            });
        });

    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        }, () => {
            this.updateMainState();
        });
    };

    handleSocializationNameChange = idx => evt => {
        const newSocialization = this.state.socialization.map((soc, sidx) => {
            if (idx !== sidx) return soc;
            return { ...soc, name: evt.target.value };
        });

        this.setState({
            socialization: newSocialization
        }, () => {
            this.updateMainState();
        });

    };

    handleSocializationDurationChange = idx => evt => {
        const newSocialization = this.state.socialization.map((soc, sidx) => {
            if (idx !== sidx) return soc;
            return { ...soc, duration: evt.target.value };
        });

        this.setState({
            socialization: newSocialization
        }, () => {
            this.updateMainState();
        });

    };

    handleSocializationAmpmChange = idx => evt => {
        const newSocialization = this.state.socialization.map((soc, sidx) => {
            if (idx !== sidx) return soc;
            return { ...soc, ampm: evt.target.value };
        });

        this.setState({
            socialization: newSocialization
        }, () => {
            this.updateMainState();
        });

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
                    <table>
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

                    </table>
                    <button
                        type="button"
                        onClick={this.handleAddSocialization}
                        className="small" >Add Another Socialization</button>
                </div>
                <hr />
                <div>
                    <input
                        type="checkbox"
                        name="active"
                        value={this.state.isChecked}
                        checked={this.state.isChecked}
                        onChange={this.handleCheckboxChange} />
                    ACTIVE
                </div>
            </div>


        );
    }
}
export default DogForm;