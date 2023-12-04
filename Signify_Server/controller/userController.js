import CryptoJS from 'crypto-js';

import {getDatabase, ref, set } from 'firebase/database';
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail, signInWithEmailAndPassword} from 'firebase/auth';
import { auth, database } from "../database/db.js";

const db = getDatabase()

export const userSignup = async(req, res) => {

    try {

        var cipherText = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();

        const existingUsers = await fetchSignInMethodsForEmail(auth, req.body.email);

        if (existingUsers.length > 0) {
          console.log('User already exists with this email. Operation canceled!!');
          return response.status(401).json({message: 'User already exists!!'});
        }

        const userCredential = await createUserWithEmailAndPassword(auth, req.body?.email, req.body?.password);
        const user =  userCredential.user;
        
        const userRef = ref(db, 'Users/' + user.uid);
        set(userRef, {
            email : req.body.email,
            password : cipherText,
            userType: req.body.userType ,
        });

        console.log("User Created Successfully!!", user.uid);
        return res.status(200).json({message: user.uid});

    } catch(error) {
        console.log("Error creating user!!", error.message)
        return res.status(500).json({message: error.message});
    }
}

export const userLogin = async(req, res) => {

    try {

        // const existingUser = await fetchSignInMethodsForEmail(auth, req.body?.email);

        // if (existingUser.length != 0) {
        //   console.log("User doesn't exist with this email. Operation canceled.");
        //   return res.status(401).json({message: 'User does not exist!!'});
        // }

        // const dataRef = ref(database, 'Users');
        // const snapshot = await get(dataRef)

        // const originalPassword = CryptoJS.AES.decrypt(password, process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8);

        const userCredential = await signInWithEmailAndPassword(auth, req.body?.email, req.body.password);
        const user = userCredential.user;

        console.log("User Login Successful!!", user.uid);
        return res.status(200).json({message: user.uid});

    } catch(error) {
        console.log("Error signing in user!!", error.message)
        return res.status(500).json({message: error.message});
    }
}

export const getCurrentUser = (req, res) => {

    try {

        const currentUser = auth.currentUser

        if(currentUser == null) {
            console.log("No user is logged in");
            return res.status(401).json({message: "No user logged in!!"});
        }

        return res.status(200).json({message: currentUser.uid});

    } catch(error) {
        console.log("Couldn't get user credentials!!", error.message);
        return res.status(500).json({message: error.message});
    }

}

export const logoutUser = async (req, res) => {

    try {

        const currentUser = auth.currentUser

        if(currentUser == null) {
            console.log("No user logged in!!");
            return res.status(401).json({message: "No user logged in!!"});
        }

        await auth.signOut();

        console.log("User Logged out Successfully!!");
        return res.status(200).json({message: "User Logged Out successfully"});

    } catch(error) {
        console.log("Couldn't logout user!!");
        return res.status(500).json({message: error.message});
    }

}