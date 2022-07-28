import React from 'react'
import { userAuth } from '../../context/AuthContext'
import Cookies from 'universal-cookie';
import { Navigate } from 'react-router-dom';

export default function AuthControllerComp({ children }) {
  const cookies = new Cookies();

  const token = cookies.get("Acsess_token", token)
  console.log(token)
  return (
    <>

      {children}
    </>
  )
}



