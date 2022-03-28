import mongoose , {ObjectId}  from "mongoose";
import category from "./category";


const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type: ObjectId,
        ref: 'category'
    }
},{timestamps:true});

export default mongoose.model('Product',productSchema)