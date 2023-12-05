
import pkg from 'agora-token';
const {RtcTokenBuilder, RtmTokenBuilder, RtcRole, RtmRole} = pkg;

export const generateToken = (req, res)=> {

    try {

        const generateRtcToken = () => {
            // Rtc Examples
            const appId = process.env.AGORA_APP_ID;
            const appCertificate = process.env.AGORA_APP_CERTIFICATE;
            const channelName = process.env.AGORA_CHANNEL_NAME;
            const uid = req.body.uid;
            const role = RtcRole.PUBLISHER;
          
            const expirationTimeInSeconds = req.body.expirationTimeInSeconds
          
            const currentTimestamp = Math.floor(Date.now() / 1000)
          
            const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds
          
            // Build token with uid
            const tokenA = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, uid, role, privilegeExpiredTs);
            console.log("Token With Integer Number Uid: " + tokenA);

            return res.status(200).json({message: tokenA});
        
          }
          generateRtcToken()
          

    } catch(error) {
        console.log("Agora token generation error!!", error.message);
        return res.status(500).json({message: error.message});
    }

}