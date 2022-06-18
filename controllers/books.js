import books from "../models/books";

export const listBook =  async (req,res) => {
    try {
        const mysort = {createdAt:-1}
        const book = await books.find().sort(mysort).exec()
        res.json(book)
    } catch (error) {
        res.status(400).json({message: "khong tim thay data"})
    }
}

export const listBookDetail = async (req, res)=>{
    try {
        const book = await books.findOne({_id: req.params.id}).exec();
        res.json(book)
    } catch (error) {
        res.status(400).json({message:"kho ng tim thay data"})

    }
 
}

export const createBook = async (req, res)=>{
    try {
        const book = await new books(req.body).save();
        res.json(book)
    } catch (error) {
        res.status(400).json({message:"khong the tao moi"})
    }
}

export const deleteBook = async (req, res)=>{
    try {
        const book = await books.findOneAndDelete({_id: req.params.id}).exec()
        res.json(book)
    } catch (error) {
        res.status(400).json({message:"không thể xóa"})
    }
    
    //res.json(books.filter(item => item.id !== +req.params.id));  
}

export const updateBook = async (req, res)=>{
    
    try {
        const book = await books.findOneAndUpdate({id: req.params.id},req.body,{new:true}).exec();
        res.json(book)
    } catch (error) {
        res.status(400).json({message:"không thể cap nhat"})
    }


    // res.json(books.map(item => item.id === +req.params.id? req.body:item))
}