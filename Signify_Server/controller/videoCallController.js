
import pkg from 'agora-token';
const {RtcTokenBuilder, RtmTokenBuilder, RtcRole, RtmRole} = pkg;

import { auth, database } from "../database/db.js";
import {getDatabase, ref, set, get } from 'firebase/database';

const db = getDatabase()

export const generateToken = async (req, res)=> {

    try {
        console.log("Entered!!")
        
        const generateRtcToken = () => {
            // Rtc Examples
            const appId = process.env.AGORA_APP_ID;
            const appCertificate = process.env.AGORA_APP_CERTIFICATE;
            const channelName = process.env.AGORA_CHANNEL_NAME;
            const uid = req.body.uid;
            const role = RtcRole.PUBLISHER;
            
            const expirationTimeInSeconds = 24*60*60
            
            const currentTimestamp = Math.floor(Date.now() / 1000)

            const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

            const tokenA = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, uid, role, privilegeExpiredTs);
            console.log("Token With Integer Number Uid: " + tokenA);

            // const userRef = ref(db, 'Users/' + req.body.uid);
            // set(userRef, {
            //     meetToken: tokenA ,
            // });

            return res.status(200).json({message: tokenA});
        
          } 
          generateRtcToken()
          

    } catch(error) {
        console.log("Agora token generation error!!", error.message);
        return res.status(500).json({message: error.message});
    }

}

export const storeToken = async(req, res) => {

    try {

        const userRef = ref(db, 'Users/' + req.body.uid);
        set(userRef, {
            meetToken: req.body.meetToken ,
        });
        return res.status(200).json({message: "token stored successfully!!"})

    } catch(error) {
        console.log("Agora token couldn't be stored !!", error.message);
        return res.status(500).json({message: error.message});
    }

}

export const deleteToken = async(req, res) => {

    try {

        const userRef = ref(db, 'Users/' + req.body.uid);
        set(userRef, {
            meetToken: null,
        });
        return res.status(200).json({message: "token deletion successfully!!"})

    } catch(error) {
        console.log("Agora token couldn't be deleted !!", error.message);
        return res.status(500).json({message: error.message});
    }

}

export const getToken = async(req, res) => {

    try {
        const userRef = ref(db, 'Users/' + req.body.uid);
        await get(userRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                // Data exists at the specified node
                const specificValue = snapshot.val().meetToken;
                console.log("The meet token of user " + req.body.uid + " is " + specificValue);
                return res.status(200).json({message: specificValue});
            } else {
            // Data doesn't exist at the specified node
            console.log('meet token not available');
            return res.status(401).json({message: "Error fetching the meet token!!"});
            }
        })
        .catch((error) => {
            console.error('Error fetching meet token:', error.message);
            return res.status(500).json({message: error.message});
        });

    } catch(error) {
        console.log("Agora token couldn't be stored !!", error.message);
        return res.status(500).json({message: error.message});
    }
}