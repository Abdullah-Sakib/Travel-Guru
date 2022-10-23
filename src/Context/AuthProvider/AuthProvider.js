import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup,  updateProfile, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [destination, setDestination] = useState({});

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  const facebookSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  }

  const updateUserProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    })
  }

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () =>{
    return signOut(auth);
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    })
    return () => unsubscribe();
  },[])

  return (
    <AuthContext.Provider value={{user,loading, createUser, googleSignIn, facebookSignIn, updateUserProfile, logOut, logIn, destination, setDestination}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;