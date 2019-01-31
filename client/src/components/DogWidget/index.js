import React from "react";
import "./style.css";


function DogWidget() {
    return (
        <div className="container">
            <div className="row">
                <div class="col infoContainer">
                    <button className="btn btn-lg signoutBtn">Signout Dog</button>
                    <button className="btn btn-lg returnBtn">Return Dog</button>
                    <hr />
                    <img src="..." alt="dog pic" class="img-thumbnail" />
                    <h4>
                        <span name="kennelLabel">Kennel</span><span name="kennelNo"></span>
                    </h4>
                    <h4>
                        <span name="nameLabel">Name</span><span name="dogName"></span>
                    </h4>
                    <h5>
                        <span name="IDLabel">ID</span><span name="ID"></span>
                    </h5>
                    <h5>
                        <span name="notesLabel">Notes</span><span name="notes"></span>
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
    );
};

export default DogWidget;

