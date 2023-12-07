
import pkg from 'agora-token';
const {RtcTokenBuilder, RtmTokenBuilder, RtcRole, RtmRole} = pkg;

import { auth, database } from "../database/db.js";
import {getDatabase, ref, set, get, update } from 'firebase/database';

const db = getDatabase()

export const generateToken = async (req, res)=> {

    try {
        console.log("Entered!!")
        
        const generateRtcToken = () => {
            // Rtc Examples
            const appId = process.env.AGORA_APP_ID;
            const appCertificate = process.env.AGORA_APP_CERTIFICATE;
            const channelName = process.env.AGORA_CHANNEL_NAME;
            const uid = auth.currentUser.uid;
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

        const userRef = ref(db, 'Users/' + auth.currentUser.uid);

        // Retrieve existing data
        get(userRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
            // If the node exists, update it by merging new data with existing data
            const existingData = snapshot.val();
            const newData = {
                "meetToken": req.body.meetToken,
                // Add other properties as needed
            };

            // Merge existing data with new data
            const updatedData = { ...existingData, ...newData };

            // Update the node
            update(userRef, updatedData)
                .then(() => {
                console.log('Data appended successfully!');
                })
                .catch((error) => {
                console.error('Error updating data:', error.message);
                });
            } else {
            console.log('Node does not exist.');
            // Handle the case where the node does not exist
            }
        })
        .catch((error) => {
            console.error('Error retrieving data:', error.message);
        });

        return res.status(200).json({message: "Token stored successfully!!"});
    } catch(error) {
        console.log("Agora token couldn't be stored !!", error.message);
        return res.status(500).json({message: error.message});
    }

}

export const deleteToken = async(req, res) => {

    try {

        const userRef = ref(db, 'Users/' + req.body.uid);
        // Retrieve existing data
        get(userRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
            // If the node exists, update it by merging new data with existing data
            const existingData = snapshot.val();
            const newData = {
                meetToken: null,
                // Add other properties as needed
            };

            // Merge existing data with new data
            const updatedData = { ...existingData, ...newData };

            // Update the node
            update(userRef, updatedData)
                .then(() => {
                console.log('Data appended successfully!');
                })
                .catch((error) => {
                console.error('Error updating data:', error.message);
                });
            } else {
            console.log('Node does not exist.');
            // Handle the case where the node does not exist
            }
        })
        .catch((error) => {
            console.error('Error retrieving data:', error.message);
        });

        return res.status(200).json({message: "Token deletion successfull!!"});

    } catch(error) {
        console.log("Agora token couldn't be deleted !!", error.message);
        return res.status(500).json({message: error.message});
    }

}

export const getToken = async(req, res) => {

    try {
        const userRef = ref(db, 'Users/' + auth.currentUser.uid);
        await get(userRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                // Data exists at the specified node
                const specificValue = snapshot.val().meetToken;
                console.log("The meet token of user " + auth.currentUser.uid + " is " + specificValue);
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

export const getAgoraConfig = async (req, res) => {

    try {
        const userRef = ref(db, 'Users/' + auth.currentUser.uid);
        await get(userRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                // Data exists at the specified node
                const specificValue = snapshot.val().meetToken;
                console.log("The meet token of user " + auth.currentUser.uid + " is " + specificValue);

                return res.status(200).json({message: {
                    "uid": auth.currentUser.uid,
                    "appId": process.env.AGORA_APP_ID,
                    "channelName": process.env.AGORA_CHANNEL_NAME,
                    "token": specificValue,
                    "proxyUrl": "http://localhost:8080/",
                    "serverUrl": "",
                    "tokenExpiryTime": "600000",
                    "encryptionMode": "aes-256-gcm2",
                    "salt": "",
                    "cipherKey": "",
                    "presenceTimeout": 300,
                    "logUpload": false,
                    "logFilter": {
                        "error": true,
                        "warn": true,
                        "info": true,
                        "track": true,
                        "debug": false
                    },
                    "cloudProxy": true,
                    "useStringUserId": false
                }});
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

        console.log("Agora configuration file sent successfully");

    } catch(error) {
        console.log("Couldn't send Agora Configuration file!!", error.message);
        return res.status(500).json({message: error.message});
    }

}