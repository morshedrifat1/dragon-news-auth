import React, {createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from '../firebase.init';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUser =(name,imgUrl)=>{
        const userProfile ={
            displayName:name,
            photoURL:imgUrl
        }
        return updateProfile(auth.currentUser,userProfile)

    }
    const logoutUser = ()=>{
        setLoading(true)
        setUser(null)
        return signOut(auth)
    }
    useEffect(()=>{
     const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
              setUser(currentUser);
              setLoading(false)
            //   console.log(currentUser);
            } else {
                setLoading(false)
            }
          });
        return ()=>{
            unsubscribe();
        }
    },[])
    const userInfo = {
        user,
        setUser,
        createUser,
        loginUser,
        logoutUser,
        updateUser,
        loading
    }
    return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;