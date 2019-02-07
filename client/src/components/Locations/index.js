import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
//import { Link } from "react-router-dom";




class Locations extends Component {
    state = {
        dogs: []
    }
    componentDidMount() {
        this.pullcurrentLocation();
    };

    pullcurrentLocation = () => {
        API.getDogs()
            .then(res =>
                this.setState({ dogs: res.data })
            ).catch(err => console.log(err));

    }

    checkfordata = (data) => {
        if (data.length <= 0) {
            return false
        } else {
            return true
        }
    }

    render() {
        //create variables to filter by location
        let kennel = this.state.dogs.filter(dog => dog.location === "Kennel");
        let offCampus = this.state.dogs.filter(dog => dog.location === "Off-Campus");
        let theTrack = this.state.dogs.filter(dog => dog.location === "The Track");
        let eastGroup = this.state.dogs.filter(dog => dog.location === "East Group Area");
        let northGroup = this.state.dogs.filter(dog => dog.location === "North Group Area");
        let northConcrete = this.state.dogs.filter(dog => dog.location === "North Concrete Area");
        let dirt = this.state.dogs.filter(dog => dog.location === "The Dirt");
        let grassy1 = this.state.dogs.filter(dog => dog.location === "Grassy 1");
        let grassy2 = this.state.dogs.filter(dog => dog.location === "Grassy 2");
        let grassy3 = this.state.dogs.filter(dog => dog.location === "Grassy 3");
        let southConcrete = this.state.dogs.filter(dog => dog.location === "South Concrete Area");

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 " >
                        {/* active staff */}
                        <h3>CURRENT STAFF LIST</h3>
                        {/* North Concrete */}
                        <div className="box">
                            <h3>North Concrete</h3>
                            {this.checkfordata(northConcrete) ?
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th className="table-header">Dog Name</th>
                                            <th className="table-header">Kennel #</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {northConcrete.map(dog => (
                                            <tr key={dog._id}>
                                                <th>{dog.name}</th>
                                                <th>{dog.kennel}</th>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                : "NO DOGS"}
                        </div>
                        {/* The Track */}
                        <div className="box">
                            <h3>The Track</h3>
                            {this.checkfordata(theTrack) ?
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th className="table-header">Dog Name</th>
                                            <th className="table-header">Kennel #</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {theTrack.map(dog => (
                                            <tr key={dog._id}>
                                                <th>{dog.name}</th>
                                                <th>{dog.kennel}</th>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                : "NO DOGS"}
                        </div>
                        {/* Off-Campus */}
                        <div className="box">
                            <h3>Off-Campus</h3>
                            {this.checkfordata(offCampus) ?
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th className="table-header">Dog Name</th>
                                            <th className="table-header">Kennel #</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {offCampus.map(dog => (
                                            <tr key={dog._id}>
                                                <th>{dog.name}</th>
                                                <th>{dog.kennel}</th>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                : "NO DOGS"}
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        {/* Kennel */}
                        <div className="box">
                            <h3>Kennel</h3>
                            {this.checkfordata(kennel) ?
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th className="table-header">Dog Name</th>
                                            <th className="table-header">Kennel #</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {kennel.map(dog => (
                                            <tr key={dog._id}>
                                                <th>{dog.name}</th>
                                                <th>{dog.kennel}</th>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                : "NO DOGS"}
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        {/* East Group Area */}
                        <div className="box">
                            <h3>East Group Area</h3>
                            {this.checkfordata(eastGroup) ?
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th className="table-header">Dog Name</th>
                                            <th className="table-header">Kennel #</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {eastGroup.map(dog => (
                                            <tr key={dog._id}>
                                                <th>{dog.name}</th>
                                                <th>{dog.kennel}</th>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                : "NO DOGS"}
                        </div>
                        {/* The Dirt */}
                        <div className="box">
                            <h3>The Dirt</h3>
                            {this.checkfordata(dirt) ?
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th className="table-header">Dog Name</th>
                                            <th className="table-header">Kennel #</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dirt.map(dog => (
                                            <tr key={dog._id}>
                                                <th>{dog.name}</th>
                                                <th>{dog.kennel}</th>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                : "NO DOGS"}
                        </div>
                        {/* North Group Area */}
                        <div className="box">
                            <h3>North Group Area</h3>
                            {this.checkfordata(northGroup) ?
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th className="table-header">Dog Name</th>
                                            <th className="table-header">Kennel #</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {northGroup.map(dog => (
                                            <tr key={dog._id}>
                                                <th>{dog.name}</th>
                                                <th>{dog.kennel}</th>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                : "NO DOGS"}
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        {/* Grassy 1 */}
                        <div className="box">
                            <h3>Grassy 1</h3>
                            {this.checkfordata(grassy1) ?
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th className="table-header">Dog Name</th>
                                            <th className="table-header">Kennel #</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {grassy1.map(dog => (
                                            <tr key={dog._id}>
                                                <th>{dog.name}</th>
                                                <th>{dog.kennel}</th>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                : "NO DOGS"}
                        </div>
                        {/* Grassy 2 */}
                        <div className="box">
                            <h3>Grassy 2</h3>
                            {this.checkfordata(grassy2) ?
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th className="table-header">Dog Name</th>
                                            <th className="table-header">Kennel #</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {grassy2.map(dog => (
                                            <tr key={dog._id}>
                                                <th>{dog.name}</th>
                                                <th>{dog.kennel}</th>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                : "NO DOGS"}
                        </div>
                        {/* Grassy 3 */}
                        <div className="box">
                            <h3>Grassy 3</h3>
                            {this.checkfordata(grassy3) ?
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th className="table-header">Dog Name</th>
                                            <th className="table-header">Kennel #</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {grassy3.map(dog => (
                                            <tr key={dog._id}>
                                                <th>{dog.name}</th>
                                                <th>{dog.kennel}</th>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                : "NO DOGS"}
                        </div>
                        {/* South Concrete Area */}
                        <div className="box">
                            <h3>South Concrete Area</h3>
                            {this.checkfordata(southConcrete) ?
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th className="table-header">Dog Name</th>
                                            <th className="table-header">Kennel #</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {southConcrete.map(dog => (
                                            <tr key={dog._id}>
                                                <th>{dog.name}</th>
                                                <th>{dog.kennel}</th>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                : "NO DOGS"}
                        </div>
                    </div>
                </div>
            </div>


        )
    }

}

export default Locations;

