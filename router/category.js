import { Router} from "express";
import { createCategory, listCategory, listCategoryDetail } from "../controllers/category";

const categoryRouter =  Router()

categoryRouter.post("/category",createCategory)
categoryRouter.get("/category",listCategory)
categoryRouter.get("/category/:id",listCategoryDetail)

export default categoryRouter