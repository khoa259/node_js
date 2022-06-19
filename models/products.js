import mongoose  from "mongoose";


const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type:Number,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:false
    },
    // category:{
    //     type: ObjectId,
    //     ref: 'category'
    // },
},{timestamps:true});

export default mongoose.model('Product',productSchema)