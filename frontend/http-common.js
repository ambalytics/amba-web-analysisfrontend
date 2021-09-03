import axios from "axios";

export default axios.create({
  baseURL: "https://api-analysis.ambalytics.com/api",
  headers: {
    "Content-type": "application/json"
  }
});
