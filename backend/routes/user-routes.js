import express from "express";
import userController from "../controllers/user-controller.js";

const userRoutes = express.Router();
userRoutes.get('/profile/:username', userController.profile)//Read
userRoutes.post('/login', userController.login)
userRoutes.post('/register', userController.register)//Insertion
userRoutes.put('/change-password', userController.changePassword)//Updation
//userRoutes.delete('/remove-account')//Deletion

export default userRoutes;