import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Cookies from 'universal-cookie';
import axios from "axios";
const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [authStatusChange, setAuthStatusChange] = useState()
    const cookie = new Cookies()
    const navigate = useNavigate()

    const authLogin = (email, password) => {
        axios("/api/auth/login", {
            method: "POST",
            mode: "cors",
            redirect: "follow",
            header: {
                "accept ": "application/json",
            },
            data: {
                user: {
                    email: email,
                    password: password
                },
                withCredentials: true,
            }
        }).then((res) => {
            axios.defaults.headers.common['Authorization'] = res.data.user.token;
            cookie.set("Acsess_token", res.data.user.token)
            setAuthStatusChange(true)
            navigate("/home")
        })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        if (user) {
            setUser(user)
        }
    }, [user])
    return (
        <AuthContext.Provider value={{ authLogin, authStatusChange }}>
            {children}
        </AuthContext.Provider>
    );
};

export const userAuth = () => {
    return React.useContext(AuthContext);
};
