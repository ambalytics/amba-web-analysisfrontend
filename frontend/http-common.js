import axios from "axios";

export default axios.create({
  baseURL: "http://194.163.156.203:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});
