import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import {FcGoogle} from "react-icons/fc";
import { firebaseAuth, firebaseDB, userRef } from "../utils/FireBaseConfig";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { setUserStatus } from "../app/slices/AppSlice";
import { useAppDispatch } from "../app/hooks";
function Login(){
    const dispatch=useAppDispatch();
    const handleLogin=async()=>{
        //this is a standard code that is required everytime to add googleauth service
        const provider=new GoogleAuthProvider();//grab the provider from firebaseprovider 
        const {
           user:{email,uid}, 
        }=await signInWithPopup(firebaseAuth,provider);//this will return email and userid of the user
        //this is logic
        if(email){
            const firestoreQuery=query(userRef,where("uid","==",uid));//firebase database query
            const fetchedUser=await getDocs(firestoreQuery)
            if(fetchedUser.docs.length===0)//means new user so add
            {
                await addDoc(userRef,{uid,email});
            }
            //else dispatch
            dispatch(setUserStatus({email}));
        }
    };
    return ( 
    <div className="login">
        <button className="login-btn" onClick={handleLogin}>
            <FcGoogle/>
            Login With Google
        </button>
    </div>
    );
}
export default Login;