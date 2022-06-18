import { Router } from "express";
import { ListUser, signin, signup } from "../controllers/auth";

const UserRouter = Router();


UserRouter.post('/signup', signup)
UserRouter.post('/signin', signin)
UserRouter.get ('/users',ListUser)



export default UserRouter