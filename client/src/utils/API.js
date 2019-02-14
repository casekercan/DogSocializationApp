import axios from "axios";

//Makes api call with axios... Look into Routes/api for where urls go! every url here must be /api/....


export default {

  //get all active dogs
  getDogs: function () {
    return axios.get("/api/dogs");
  },
  //get all inactive dogs

  getInactiveDogs: function () {
    return axios.get("/api/dogsinactive");
  },

  //get one dog
  getDog: function (id) {
    return axios.get("/api/dogs/" + id);
  },

  //get one dog to edit or Add
  updateDog: function (dog) {
    return axios.post("/api/dog", dog);
  },

  //delete Dog
  deleteDog: function (id) {
    return axios.delete("/api/dogdelete/" + id);
  },

  // get all staff
  getAllStaff: function () {
    return axios.get("/api/allstaff");
  },

  //get all inactive staff
  getInactiveStaff: function () {
    return axios.get("/api/staffinactive");
  },

  // get one staff member
  getStaff: function (id) {
    return axios.get("/api/staff/" + id);
  },

  // add or edit one Staff
  updateStaff: function (vteer) {
    return axios.post("/api/staff", vteer);
  },

  //delete Staff
  deleteStaff: function (id) {
    return axios.delete("/api/staffdelete/" + id);
  },

  login: function(email, password){
    return axios.post("/api/login" + email, password);
  },

  signup: function(email, password) {
    return axios.post("/api/" + email, password)
  },

  logout: function() {
    return axios.post("/api/logout")
  }

};
