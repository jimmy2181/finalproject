import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the stock with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the stock with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a stock to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};
