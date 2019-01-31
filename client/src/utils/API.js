import axios from "axios";

//Makes api call with axios... Look into Routes/api for where urls go! every url here must be /api/....


export default {

  //get all dogs
  getDogs: function () {
    return axios.get("/api/dogs");
  },

};
