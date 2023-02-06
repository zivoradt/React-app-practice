// This file give us opportynity to connect to backend


// Import Axios
import axios from "axios";
export default axios.create({
    baseURL: "http://localhost:3500/api",
    
    headers:{
        "Content-Type": "application/json"
    }
});

