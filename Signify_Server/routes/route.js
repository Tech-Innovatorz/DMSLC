import { default as express } from 'express';

import { userSignup, userLogin, getCurrentUser, logoutUser, getUserType } from '../controller/userController.js';
import { deleteToken, generateToken, getAgoraConfig, getToken, storeToken } from '../controller/videoCallController.js';

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);
router.get('/getCurrentUser', getCurrentUser);
router.post('/logoutUser', logoutUser);
router.get('/generateToken', generateToken);
router.get('/getUserType', getUserType);
router.get('/getToken',getToken);
router.delete('/deleteToken',deleteToken);
router.post('/storeToken',storeToken);
router.get('/getAgoraConfig', getAgoraConfig)

export default router;