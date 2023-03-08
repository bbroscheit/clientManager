import axios from "axios";

export function login(){
    return async function(dispatch){
        const response = await axios(`http://localhost:3002/api/users/login`)
        const json = await response.json();
        dispatch({
            type: "LOGIN",
            payload: json
        })
    }

}