import { default as express } from 'express';

import { userSignup, userLogin, getCurrentUser, logoutUser } from '../controller/userController.js';

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);
router.post('/getCurrentUser', getCurrentUser);
router.post('/logoutUser', logoutUser);

export default router;