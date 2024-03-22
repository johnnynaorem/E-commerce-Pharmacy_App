import express from "express";
import {loginController, registerController, testController} from "../controller/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router()

//routing
//REGISTER || METHOD POST
router.post('/register', registerController)

//LOGIN || METHOD POST
router.post('/login', loginController)

//test route
router.get('/test', requireSignIn, isAdmin, testController)

//protected Route Auth
router.get('/user-auth', requireSignIn, (req, res) => {
  res.status(200).send({ok: true})
})
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ok: true})
})

export default router;