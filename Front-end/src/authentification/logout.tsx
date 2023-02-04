import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import AuthSetvice from "../services/auth-service";

function Logout()
{
    useEffect(()=>{
        document.title = "Logout";
        AuthSetvice.logout();
    })
    return(
        <Navigate to = "/login"/>
    )
}

export default Logout;