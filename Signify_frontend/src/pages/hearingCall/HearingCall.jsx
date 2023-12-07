import React from 'react'
import { FaMicrophone } from "react-icons/fa";
import { BiSolidCaptions } from "react-icons/bi";
import { TiVideo } from "react-icons/ti";
import { IoCall } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Images } from '../../constants'
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AgoraRTC from 'agora-rtc-sdk-ng'

const HearingCall = () => {
    
    const navigate = useNavigate();
    // const [currentUserId, currentUserTrigger] = useState(null);
    const [meetingLink, meetingLinkTrigger] = useState('');
    const localPlayerContainerRef = useRef(null);
    const remotePlayerContainerRef = useRef(null);

    useEffect(() => {
        console.log("Entered_1")
        // console.log("ENTERED")

        const fetchData = async () => {
            try {
              const response = await axios.get("http://localhost:8800/getToken", {});
              console.log(response.data.message);
              meetingLinkTrigger(response.data.message);
            } catch (error) {
              console.error("Error generating token!!", error.message);
              // Handle error
            }
          };
      
          fetchData();

        //   const appId =  process.env.AGORA_APP_ID;  
        //   const channelName = process.env.AGORA_CHANNEL_NAME;

          const agoraVideoCall = async ()=> {
            try {

                const config = {
                    "uid": 100,
                    "appId": "1d71ef139254403f92c411b84d87a74c",
                    "channelName": "main",
                    "token": "007eJxTYMj6tzvx8PuF5q/eTDxbGqMottXo0AujCQW2bG1mO/8+YmxXYEhNNk4xT0s1N7c0SzUxTTZLSk0zNDJMTUsyTzM0TDFJ5o0pTG0IZGRw7algYIRCEJ+FITcxM4+BAQDu8yDT",
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
                }

                let agoraEngine = null;

                var channelParameters = {
                    localVideoTrack: null,
                    localAudioTrack: null,
                    remoteVideoTrack:null,
                    remoteAudioTrack:null
                  };

                  const handleVSDKEvents = (eventName, ...args) => {
                    switch (eventName) {
                    case "user-published":
                        if (args[1] == "video") {
                          // Retrieve the remote video track.
                          channelParameters.remoteVideoTrack = args[0].videoTrack;
                          // Retrieve the remote audio track.
                          channelParameters.remoteAudioTrack = args[0].audioTrack;
                          // Save the remote user id for reuse.
                        //   channelParameters.remoteUid = args[0].uid.toString();
                          // Specify the ID of the DIV container. You can use the uid of the remote user.
                        //   remotePlayerContainer.id = args[0].uid.toString();
                        //   channelParameters.remoteUid = args[0].uid.toString();
                        //   remotePlayerContainer.textContent =
                            //   "Remote user " + args[0].uid.toString();
                          // Append the remote container to the page body.
                        //   document.body.append(remotePlayerContainer);
                          // Play the remote video track.
                          channelParameters.remoteVideoTrack.play(remotePlayerContainerRef.current);
                        }
                        // Subscribe and play the remote audio track If the remote user publishes the audio track only.
                        if (args[1] == "audio") {
                          // Get the RemoteAudioTrack object in the AgoraRTCRemoteUser object.
                          channelParameters.remoteAudioTrack = args[0].audioTrack;
                          // Play the remote audio track. No need to pass any DOM element.
                          channelParameters.remoteAudioTrack.play();
                        }
                    }
                };

                // Set up the signaling engine with the provided App ID, UID, and configuration
                const setupAgoraEngine = async () => {
                    agoraEngine = new AgoraRTC.createClient({ mode: "rtc", codec: "vp9" });
                };

                await setupAgoraEngine();

                 // Event Listeners
                agoraEngine.on("user-published", async (user, mediaType) => {
                    // Subscribe to the remote user when the SDK triggers the "user-published" event.
                    await agoraEngine.subscribe(user, mediaType);
                    console.log("subscribe success");
                    // eventsCallback("user-published", user, mediaType)
                    handleVSDKEvents("user-published", user, mediaType)
                });

                // Listen for the "user-unpublished" event.
                agoraEngine.on("user-unpublished", (user) => {
                    console.log(user.uid + "has left the channel");
                });

                const getAgoraEngine = () => {
                    return agoraEngine;
                };


                const join = async (channelParameters) => {
                    await agoraEngine.join(
                      config.appId,
                      config.channelName,
                      config.token,
                      config.uid
                    );
                    // Create a local audio track from the audio sampled by a microphone.
                    channelParameters.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
                    // Create a local video track from the video captured by a camera.
                    channelParameters.localVideoTrack = await AgoraRTC.createCameraVideoTrack();
                    // Append the local video container to the page body.
                    // document.body.append(localPlayerContainer);
                    // localPlayerContainerRef.current.appendChild(localPlayerContainer);
                    // Publish the local audio and video tracks in the channel.
                    await getAgoraEngine().publish([
                      channelParameters.localAudioTrack,
                      channelParameters.localVideoTrack,
                    ]);
                    // Play the local video track.
                    channelParameters.localVideoTrack.play(localPlayerContainerRef.current);

                    // Assuming you have the remote user's uid
                    // const remoteUid = 123; // Replace with the actual remote user's UID

                    // Subscribe to the remote user's video stream
                    // await agoraEngine.subscribe(remoteUid);

                    // Play the remote video in the container
                    // agoraEngine.remoteVideoTrack.play(remotePlayerContainerRef.current);
                  };

                //   const localPlayerContainer = document.createElement('div');

                  join(channelParameters);

                //   const leave = async (channelParameters) => {
                //     // Destroy the local audio and video tracks.
                //     channelParameters.localAudioTrack.close();
                //     channelParameters.localVideoTrack.close();
                //     // Remove the containers you created for the local video and remote video.
                //     await agoraEngine.leave();
                //   };
                
                  // Return the agoraEngine and the available functions
                //   return {
                //     getAgoraEngine,
                //     config,
                //     join,
                //     leave,
                //   };

            } catch(error) {
                console.log(error);
            }
          }

          agoraVideoCall();
        
    }, []);

    console.log("Meeting link *** ", meetingLink);
    
    const leave = async (channelParameters) => {
        // Destroy the local audio and video tracks.
        channelParameters.localAudioTrack.close();
        channelParameters.localVideoTrack.close();
        // Remove the containers you created for the local video and remote video.
        await agoraEngine.leave();
      };

    const ToggleWindow=(e)=>{
        const slideWindow=document.querySelector("#info-window")
        console.log(slideWindow)
        slideWindow.classList.toggle('right-20')
        slideWindow.classList.toggle('right-[-100%]')
    }

    const ToggleCaptions=(e)=>{
        const captionWindow=document.querySelector("#caption-window")
        const videoWindow=document.querySelector("#video-window")
        
        console.log(captionWindow,videoWindow)

        videoWindow.classList.toggle('h-[60vh]')
        videoWindow.classList.toggle('w-[70%]')

        videoWindow.classList.toggle('h-[85vh]')
        videoWindow.classList.toggle('w-[90%]')

        captionWindow.classList.toggle('bottom-[-100%]')
        captionWindow.classList.toggle('bottom-13')

    }

  return (
    <div className='min-h-screen w-screen bg-[#202124] pt-6 px-16 relative overflow-hidden'>
        
            <div id='video-window' className={` h-[85vh] w-[90%] mx-auto bg-white relative duration-700`} >
                {/* below will be the video of the deaf user */}
                {/* <img src={Images.signingPerson} alt="..." className='h-[100%] w-[100%] object-cover' /> */}
                <div ref={remotePlayerContainerRef} className='h-[100%] w-[100%] object-cover' ></div>
                
                <div className='absolute h-44 w-64 bg-red-700 top-3 left-3 rounded-lg shadow-xl'>

                    {/* below will be the video of the hearing user */}
                    {/* <img src={Images.hearingPerson} alt="..." className='h-[100%] w-[100%] rounded-lg' /> */}
                    <div ref={localPlayerContainerRef} className='h-[100%] w-[100%] rounded-lg' ></div>
                </div>
            </div>

          

            <div className='text-white flex items-center justify-between my-3 w-[90%] absolute bottom-0 z-10'>
                <div> 
                    7:22PM <span className='mx-1 text-lg'>|</span> **Video Code**

                </div>
                <div className='flex space-x-5'>
                    <button className='h-12 w-12 rounded-full duration-500 bg-gray-400 hover:bg-gray-300'><TiVideo className='m-auto h-6 w-6' /></button>
                    <button className='h-12 w-12 rounded-full duration-500 bg-gray-400 hover:bg-gray-300' onClick={ToggleCaptions}><BiSolidCaptions className='m-auto h-6 w-6' /></button>
                    <button className='h-12 w-12 rounded-full duration-500 bg-gray-400 hover:bg-gray-300'><FaMicrophone className='m-auto h-6 w-6' /></button>
                    <button className='h-12 w-20 rounded-full duration-500 bg-red-600 hover:bg-red-300'><IoCall className='m-auto h-6 w-6' /></button>
                </div>
                <div>
                    <button className='h-12 w-12 rounded-full duration-500 bg-gray-400 bg-opacity-0 hover:bg-opacity-25 ' onClick={ToggleWindow}> <IoMdInformationCircleOutline className='m-auto h-10 w-10' /></button>
                </div>
            </div>


            <div id='info-window' className='h-[80%] w-72 bg-white absolute top-10 right-[-100%] px-3 py-3 rounded-lg duration-500 shadow-lg'>
                <p className='text-lg font-bold'>Meeting Details</p><br />
                <p className='font-bold'>Joining Info</p>
                <hr />
                <p className='text-gray-500 font-thin overflow-scroll select-all'>{meetingLink}</p>
            </div>

            <div id='caption-window' className='h-48 w-[80%] absolute bottom-[-100%] left-40 px-3 py-3 text-white duration-700 '>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat ex quod totam alias, excepturi necessitatibus dolores animi nisi distinctio sunt pariatur. Ex mollitia obcaecati et, magni esse atque corrupti incidunt officia animi.

            </div>

    </div>
  )
}

export default HearingCall