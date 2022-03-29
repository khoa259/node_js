import mongoose from "mongoose";
import {createHmac } from "crypto"

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        trim:true,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
})

userSchema.methods= {
    encrytPassword(password){
        if(!password) return
        try {
            return createHmac("sha256" , "123456").update(password).digest("hex")

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