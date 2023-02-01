import express from 'express';
const router = express.Router();

// import the controller module
import { DisplayRegisterPage, ProcessLogoutPage, DisplayLoginPage, ProcessLoginPage, ProcessRegisterPage } from "../Controllers/auth";


/* Process Login page. */
router.post('/login', ProcessLoginPage);

/* Process Register page. */
router.post('/register', ProcessRegisterPage);

/* Process Logout page. */
router.get('/logout', ProcessLogoutPage);

export default router;
