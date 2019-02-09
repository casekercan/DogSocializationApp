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

  //get one dog to edit
  editDog: function (id) {
    return axios.get("/api/dogedit/" + id);
  },


  // get all staff
  getAllStaff: function () {
    return axios.get("/api/allstaff");
  },


  // get one staff member
  getStaff: function (id) {
    return axios.get("/api/staff/" + id);
  }


};
