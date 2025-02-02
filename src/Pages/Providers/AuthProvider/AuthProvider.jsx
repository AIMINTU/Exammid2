import { getAuth, onAuthStateChanged} from 'firebase/auth';
import React, { createContext, useEffect } from 'react';
import app from '../../../../Firebase/Firebase.config';

import { useState } from 'react';


export const authContext=createContext(null)

const AuthProvider = ({children}) => {
    const auth=getAuth(app);
    const [user,setUser]=useState(null)
    useEffect(()=>{
        const unsuscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
        })
        return ()=>{
            unsuscribe()

        }
    },[])
    
    const authInfo={
        name:"Nayeem"
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;