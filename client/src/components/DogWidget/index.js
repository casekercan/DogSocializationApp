import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";




class DogWidget extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dog: {}
        };
    }


    componentDidMount() {
        API.getDog(this.props.props)
            .then(res => this.setState({ dog: res.data }))
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div className="container" >
                <div className="row">
                    <div class="col infoContainer">
                        <button className="btn btn-lg signoutBtn">Signout Dog</button>
                        <button className="btn btn-lg returnBtn">Return Dog</button>
                        <hr />
                        <img src={this.state.dog.pic} alt="dog pic" class="img-thumbnail" />
                        <h4>
                            <span name="kennelLabel">Kennel</span><span name="kennelNo">{this.state.dog.kennel}</span>
                        </h4>
                        <h4>
                            <span name="nameLabel">Name</span><span name="dogName">{this.state.dog.name}</span>
                        </h4>
                        <h5>
                            <span name="IDLabel">ID</span><span name="ID">What ID?</span>
                        </h5>
                        <h5>
                            <span name="notesLabel">Notes</span><span name="notes">{this.state.dog.notes}</span>
                        </h5>
                    </div>
                    <div class="col socContainer">
                        <span name="socLabel">Socialization</span>
                        <button className="btn btn-sm">Edit</button>
                        <button className="btn btn-sm">Submit</button>
                        <table name="socPlan">
                            <tr>
                                <th>Type</th>
                                <th>Time</th>
                                <th>When</th>
                                <th>Actions</th>
                            </tr>
                            {/*Map through array of socialization plan*/}
                            <tr>
                                <td></td>
                            </tr>
                            {/*Empty row to add new plan*/}
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><button className="btn btn-sm" name="addSocPlan">Add</button></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )

    }

};

export default DogWidget;

