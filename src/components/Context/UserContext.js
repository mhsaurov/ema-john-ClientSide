import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from '../../FireBase/Firebase';


export const AuthContext = createContext();
const UserContext = ({children}) => {

    const [user , setUser] = useState(false)
    const [loader, setLoader] = useState(true)
    
    const auth = getAuth(app);

//SignUp auth function is overhere
const creatUser = (email,password) =>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password)
}



//SignIn auth function is overhere

const loginuser = (email,password) =>{
    setLoader(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const logout = () =>{
    setLoader(true)
    return signOut(auth);
}

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser =>{
        console.log( 'current user state change', currentUser)
        setUser(currentUser)
        setLoader(false)
        
    });
    return () => unSubscribe();
},[])

//here is send all autih info
    const authInfo = {user, loader,creatUser,loginuser,logout};

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;