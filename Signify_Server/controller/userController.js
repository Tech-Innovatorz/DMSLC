import CryptoJS from 'crypto-js';

import { ref, set } from 'firebase/database';
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail, signInWithEmailAndPassword} from 'firebase/auth';
import { auth, database } from "../database/db.js";

export const userSignup = async(request, response) => {

    try {

        var cipherText = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();

        const existingUsers = await fetchSignInMethodsForEmail(auth, email);

        if (existingUsers.length > 0) {
          console.log('User already exists with this email. Operation canceled!!');
          return response.status(401).json({message: 'User already exists!!'});
        }

        const userCredential = await createUserWithEmailAndPassword(auth, request.body?.email, request.body?.password);
        const user = userCredential.user;

        const db = ref(database, 'Users');
        set(db.child(user.getIdToken), {
        email : request.body.email,
        password : cipherText,
        userType: request.body.userType ,
        });

        console.log("User Created Successfully!!", user);
        return response.status(200).json({message: user});

    } catch(error) {
        console.log("Error creating user!!", error.message)
        response.status(500).json({message: error.message});
    }
}

export const userLogin = async(request, response) => {

    try {

        const existingUser = await fetchSignInMethodsForEmail(auth, email);

        if (existingUser.length == 0) {
          console.log("User doesn't exist with this email. Operation canceled.");
          return response.status(401).json({message: 'User does not exist!!'});
        }

        // const dataRef = ref(database, 'Users');
        // const snapshot = await get(dataRef)

        // const originalPassword = CryptoJS.AES.decrypt(password, process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8);

        const userCredential = await signInWithEmailAndPassword(auth, request.body.email, password);
        const user = userCredential.user;

        console.log("User Login Successful!!", user);
        return response.status(200).json({message: user});

    } catch(error) {
        console.log("Error signing in user!!", error.message)
        response.status(500).json({message: error.message});
    }


}