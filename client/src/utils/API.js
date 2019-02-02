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

  getStaff: function(){
    return axios.get("/api/staff");
  },

  getVolunteer: function(id){
    return axios.get("api/volunteer/"+ id);
  }

};
