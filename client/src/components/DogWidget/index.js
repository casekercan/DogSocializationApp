import React from "react";
import "./style.css";

function DogWidget() {
    return (
        <div className="container">
            <div className="row">
                <div class="col">
                    <button className="btn btn-lg signoutBtn">Signout Dog</button>
                    <button className="btn btn-lg returnBtn">Return Dog</button>
                    
                    <img />
                    <span name="kennelLabel">Kennel</span><span name="kennelNo"></span>
                    <span name="nameLabel">Name</span><span name="dogName"></span>
                    <span name="IDLabel">ID</span><span name="ID"></span>
                    <span name="notesLabel">Notes</span><span name="notes"></span>
                </div>
                <div class="col">
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

