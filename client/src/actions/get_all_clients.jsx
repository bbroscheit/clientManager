import axios from "axios";

export function getAllClients(){
    return async function(dispatch){
        const response = await axios(`http://localhost:3002/api/clients`);
        const json = await response.json();
        dispatch({
            type: "GET_ALL_CLIENT",
            payload: json
        })
    }
}