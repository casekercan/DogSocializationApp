import axios from "axios";

//Makes api call with axios... Look into Routes/api for where urls go! every url here must be /api/....


export default {

  //get all dogs
  getDogs: function () {
    return axios.get("/api/dogs");
  },

  //get one dog
  getDog: function (id) {
    return axios.get("/api/dogs/" + id);
  },

  // change dog status to inactive
  deActivDog: function(id) {
    return axios.put("/api/dogs/deactivate/"+id);
  },

  // remove a dog
  removeDog: function(id){
    return axios.delete("/api/dogs/delete/"+id);
  },

  // find dogs at a location
  getDogsLoc: function (loc) {
    return axios.get("/api/dogs/location/"+loc);
  },
  
  // get all staff
  getAllStaff: function () {
    return axios.get("/api/allstaff");
  },

  // get one staff member
  getStaff: function (id) {
    return axios.get("/api/staff/" + id);
  },

  // change staff status to inactive
  deActivStaff: function(id){
    return axios.put("/api/staff/deactivate/"+id);
  },

  // remove one of staff
  removeStaff: function(id) {
    return axios.delete("/api/staff/delete/"+id);
  },

  

};
