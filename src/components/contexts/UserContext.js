import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from './../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser] =useState({})
    const [loading, setLoading] = useState(true)
    
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
      return  signOut(auth);
    }

    const googleSignIn = () =>{
     return  signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
    const unsubcribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false);
        })
        return()=>{
            unsubcribe();
        }
    }, [])

const authInfo = {user, loading, createUser, logInUser, logOut, googleSignIn}


    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;