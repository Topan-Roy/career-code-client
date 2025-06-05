import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged , signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../../Firebase/Firebase.init';
import axios from 'axios';
const provider = new GoogleAuthProvider();
const Authprovider = ({children}) => {
const [loading,setLoading]=useState(true);
    const [user,setUser]=useState(null);
const createUser=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
}
const signInUser=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
}
const signOutUser=()=>{
    setLoading(true)
    return signOut(auth)
}
const signInWithGoogle=()=>{
    setLoading(true);
    return signInWithPopup(auth,provider)
}
  
   useEffect(()=>{
        const unsubcribe=    onAuthStateChanged(auth,(currentUser)=>{
                setUser(currentUser);
                setLoading(false);
                if(currentUser?.email){
                    // const userData={email:currentUser.email};
                    axios.post('http://localhost:3000/jwt',{email:currentUser.email},{
                        withCredentials:true
                    })
                    .then(res=>{
                        console.log('Token After jwt',res.data)
                    })
                    .catch(error=>{
                        console.log(error)
                    })
                }
                console.log('user in the auth change',currentUser)
            })
            return()=>{
                unsubcribe();
            }
        },[])
    const authInfo={
        loading,
        user,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle,
     
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default Authprovider;