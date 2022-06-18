import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type:Number,
        required:true
    },
    salePrice: {
        type:Number,

    },
    img:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:String
    },
    // status: {
    //     type:String,
    //     default: 0,
    //     require:true
    // }
},{timestamps:true})
export default mongoose.model('Books' ,bookSchema)