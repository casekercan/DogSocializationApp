import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";


class VolunteerList extends Component {
    state = {
        voteers: []
    };

    componentDidMount() {
        this.findAllStaff();
    };


    findAllStaff = () => {
        API.getStaff().then(res => this.setState({ voteers: res.data })).catch(err => console.log(err));
    };


    render() {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Volunteer</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Mobile</th>
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

        )
    }

}

export default VolunteerList;