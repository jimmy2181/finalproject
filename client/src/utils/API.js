import axios from "axios";

export default {
  // Gets all stocks
  getstocks: function() {
    return axios.get("/api/stocks");
  },
  // Gets the stock with the given id
  getstock: function(id) {
    return axios.get("/api/stocks/" + id);
  },
  // Deletes the stock with the given id
  deletestock: function(id) {
    return axios.delete("/api/stocks/" + id);
  },
  // Saves a stock to the database
  savestock: function(stockData) {
    return axios.post("/api/stocks", stockData);
  }
};
