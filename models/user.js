import mongoose from "mongoose";
import {createHmac } from "crypto"
import { v4 as uuidv4} from "uuid"
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        trim:true,
        unique:true,
        required:true,
        lowercase:true
    },
    name:{
        type:String,
       
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:Number,
        default:0
    }

})

userSchema.methods= {
    authenticate(password){
        try {
            return this.password == this.encrytPassword(password)
        } catch (error) {
            console.log(error);
        }
    },


    encrytPassword(password){
        if(!password) return
        try {
            return createHmac("sha256" , "12345").update(password).digest("hex")

        } catch (error) {
            console.log(error);
        }
    }
}

userSchema.pre("save", function(next){
    try {
        this.password = this.encrytPassword(this.password)
        next()
    } catch (error) {
        console.log(error);
    }
})
export default mongoose.model('Users', userSchema)