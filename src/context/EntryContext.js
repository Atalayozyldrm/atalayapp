import React, { useEffect, useState } from "react";
import getAll from "../service/entry/entry";

const Entry = React.createContext();

export const EntryProvider = ({ children }) => {
    const [post, setPost] = useState({});


    const entryAll = (entry) => {
        setPost(entry)
    }

    useEffect(() => { getAll() })

    return (
        <Entry.Provider value={{ post, entryAll }}>
            {children}
        </Entry.Provider>
    );


};

export const userEntry = () => {
    return React.useContext(Entry);
};
