// This file give us opportynity to connect to backend


// Import Axios
import axios from "axios";
export default axios.create({
    baseURL: "http://localhost:3500/api",
    // If URL is on Heroku if will be like: http://react-app.com/api
    headers:{
        "Content-type": "application/json"
    }
});

