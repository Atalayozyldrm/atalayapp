// import React, { useLayoutEffect, useState, useEffect } from "react";
// import {
//   GoogleAuthProvider,
//   signInWithRedirect,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";
// import useDeepCompareEffect from "use-deep-compare-effect";
// import { app, auth } from "../firebase/firebase";
// const AuthContext = React.createContext();

// export const AuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState({});
//   const [token, setToken] = useState();

//   const googleLogin = () => {
//     const provider = new GoogleAuthProvider();
//     signInWithRedirect(auth, provider)
//       .then((res) => {
//         setUser(user);
//       })
//       .catch((err) => console.log(err));
//   };

//   const logOut = () => {
//     signOut(auth);
//   };

//   useEffect(() => {
//     const dls = onAuthStateChanged(auth, (currentUser) => {
//       if (currentUser) {
//         setUser(currentUser);
//         console.log(currentUser);
//         currentUser.getIdToken().then((resq) => {
//           setToken(resq);
//         });
//       }
//     });
//     return () => {
//       dls();
//     };
//   }, []);

//   return (
//     <AuthContext.Provider value={{ googleLogin, logOut, user, token }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const userAuth = () => {
//   return React.useContext(AuthContext);
// };
