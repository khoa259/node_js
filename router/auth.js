import { Router } from "express";
import { signup } from "../controllers/auth";

const UserRouter = Router();


UserRouter.post('/signup', signup)



export default UserRouter