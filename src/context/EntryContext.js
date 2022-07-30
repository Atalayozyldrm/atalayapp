import React, { useEffect, useState } from "react";
import axios from "axios"
import Cookies from "universal-cookie"

const Entry = React.createContext();

export const EntryProvider = ({ children }) => {
    const [post, setPost] = useState();
    const cookie = new Cookies()
    const token = cookie.get("acsess_token")
   


    const getAll = () => {
        axios.defaults.headers.common['Authorization'] = token;
        const entry = axios.get("/api/entry/entry", {
            headers: {
                "Authorization": token
            }
        })
            .then((response) => {
               const data = response.data.data
                data.map(element => {
                    setPost(element)
                });
               setPost(data)    
            })
            .catch((err) => { console.log(err) })
    }

    return (
        <Entry.Provider value={{post }}>
            {children}
        </Entry.Provider>
    );


};

export const userEntry = () => {
    return React.useContext(Entry);
};
