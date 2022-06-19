import { Router} from "express";
import { createCategory, deleteCategory, listCategory, listCategoryDetail, updateCategory } from "../controllers/category";

const categoryRouter =  Router()

categoryRouter.post("/category",createCategory)
categoryRouter.get("/category",listCategory)
categoryRouter.get("/category/:id",listCategoryDetail)
categoryRouter.delete("/category/:id",deleteCategory)
categoryRouter.put("/category/:idd", updateCategory)

export default categoryRouter