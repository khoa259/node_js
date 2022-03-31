import { Router } from "express";
import { signin, signup } from "../controllers/auth";

const UserRouter = Router();


UserRouter.post('/signup', signup)
UserRouter.post('/signin', signin)



export default UserRouter