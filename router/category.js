import { Router} from "express";
import { checkAuth } from "../middleware/checkAuth";
import { createCategory, deleteCategory, listCategory, listCategoryDetail } from "../controllers/category";

const categoryRouter =  Router()

categoryRouter.post("/category",checkAuth,createCategory)
categoryRouter.get("/category",checkAuth,listCategory)
categoryRouter.get("/category/:id",checkAuth,listCategoryDetail)
categoryRouter.delete("/category/:id",checkAuth,deleteCategory)

export default categoryRouter