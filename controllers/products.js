import products from "../models/products"



export const listProduct = (request,response) => {
    try {
        const product = products.find().exec()
        response.json(product)
    } catch (error) {
        response.status(400).json({message:"khong tim thay data"})
    }
}

export const listProductDetail = (request, response)=>{
    const product = products.find(item=> item.id === +request.params.id)
    response.json(products)
}

export const createProduct = async (request, response)=>{
    try {
        const product = await products(request.body).save();
        response.json(product)
    } catch (error) {
        response.status(400).json
        ({message:"khong the tao moi"})
    }
}

export const deleteProduct = (request, response)=>{
    response.json(products.filter(item => item.id !== +request.params.id));  
}

export const updateProduct = (request, response)=>{
    response.json(products.map(item => item.id === +request.params.id? request.body:item))
}