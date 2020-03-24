import React from 'react';
import { createContext } from "react";



const AuthContext = createContext();

const AuthContextProvider = (props) =>{
    const auth = saveCart;
    
return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}