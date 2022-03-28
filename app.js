// b1 include thư viện http
import express from "express"
import mongoose from "mongoose";
import ProductRoute from "./router/product";
import categoryRouter from "./router/category";
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json())
app.use("/api", ProductRoute);
app.use("/api", categoryRouter)

mongoose.connect('mongodb://localhost:27017/nodejs')
.then(()=> console.log("connect db succes "))
.catch((error)=>{
    console.log(error);
});

// b3 cổng thực thi

app.listen(8000, () => {
    console.log("đây là cổng 8000");
});