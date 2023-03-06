import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllClients } from "../actions/get_all_clients";

export default function Clients() {
    const dispatch = useDispatch();
    const clients = useSelector((state) => state.allClients);

    useEffect(() => {
        dispatch(getAllClients())
    })

    return(
        <div>
            <ul>
                {clients && clients.map(
                    e => <li>{e.name}</li>
                )}
            </ul>
        </div>
    )

}