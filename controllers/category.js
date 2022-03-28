import Category from "../models/category";
import Products from "../models/products";


export const createCategory = async (request,response)=>{
 try {
     const category = await Category (request.body).save()
     response.json(category)
 } catch (error) {
     response.status(400).json({message:"không thể tạo mới"})
 }    
}
export const listCategory = async (request,response)=>{
    try {
        const category = await Category.find({}).exec()
        response.json(category)
    } catch (error) {
        response.status(400).json({message:"không hiển thị dữ liệu"})

    }
}
export const listCategoryDetail = async (request,response)=>{
    try {
        const category = await Category.findOne({_id:request.params.id}).exec()
        const product = await Products.find({category}).exec()
        response.json({product, category})
    } catch (error) {
        response.status(400).json({message:"không hiển thị dữ liệu"})
        
    }
}
export const deleteCategory = async (request,response)=>{}
export const updateCategory = async (request,response)=>{}