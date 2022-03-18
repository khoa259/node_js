// b1 include thư viện http
import express from "express"
import mongoose from "mongoose";
import homeRoute from "./router/home";
import ProductRoute from "./router/products/product";
import {checkAuth} from "./middleware/checkAuth"

const app = express();

app.use( checkAuth, homeRoute);
app.use("/api", checkAuth,ProductRoute);

mongoose.connect('mongodb://localhost:27017/nodejs').then(()=> console.log("connect db succes "))
.catch((error)=>{
    console.log(error);
});

// b3 cổng thực thi

app.listen(8000, () => {
    console.log("đây là cổng 8000");
});