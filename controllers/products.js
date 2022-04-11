import products from "../models/products"


export const listProduct = async (request,response) => {
    try {
        const mysort = { name:-1}
        const product = await products.find().sort(mysort).exec()
        response.json(product)
    } catch (error) {
        response.status(400).json({message:"khong tim thay data"})
    }
}

// export const listProductLimit = async (request,response) => {
//     try {
//         const product = await products.find().limit(2).exec(1)
//         response.json(product)    
//     } catch (error) {
//         response.status(400).json({message:"không hiện được sản phẩm limit"})
//     }
    
// }

export const listProductDetail = async (request, response)=>{
    try {
        const product = await products.findOne({id: request.params.id}).exec();
        response.json(product)
    } catch (error) {
        response.status(400).json({message:"khong tim thay data"})

    }
 
}

export const createProduct = async (request, response)=>{
    try {
        const product = await products(request.body).save();
        response.json(product)
    } catch (error) {
        response.status(400).json({message:"khong the tao moi"})
    }
}

export const deleteProduct = async (request, response)=>{
    try {
        const product = await products.findOneAndDelete({id: request.params.id}).exec()
        response.json(product)
    } catch (error) {
        response.status(400).json({message:"không thể xóa"})
        
    }
    
    //response.json(products.filter(item => item.id !== +request.params.id));  
}

export const updateProduct = async (request, response)=>{
    
    try {
        const product = await products.findOneAndUpdate({id: request.params.id},request.body,{new:true}).exec();
        response.json(product)
    } catch (error) {
        response.status(400).json({message:"không thể cap nhat"})
    }


    // response.json(products.map(item => item.id === +request.params.id? request.body:item))
}