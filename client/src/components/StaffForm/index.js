import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import "./style.css";


class StaffForm extends Component{

    constructor(props) {
        super(props)
        this.state = {};
    }

    componentDidMount() {
        this.loadState(this.props.staff)
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
        if (data.length <= 0) {
            return false
        } else {
            return true
        }
    }

    render(){
        return(
        <div>
            <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
                </div>
                <input name="name" value={this.state.name} class="form-control" onChange={this.handleInputChange} type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>
            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">pic URL</span>
                </div>
                <input name="pic" value={this.state.pic} onChange={this.handleInputChange} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>
            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">email</span>
                </div>
                <input name="email" value={this.state.email} onChange={this.handleInputChange} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>
            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Mobile</span>
                </div>
                <input name="mobile" value={this.state.mobile} onChange={this.handleInputChange} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>
            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Notes</span>
                </div>
                <input name="notes" value={this.state.notes} onChange={this.handleInputChange} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Checkbox checked={this.state.active} aria-label="Checkbox for following text input" />
                    </InputGroup.Prepend>
                    ACTIVE
                </InputGroup>
            </div>
        </div>
        );
    }
}

export default StaffForm;