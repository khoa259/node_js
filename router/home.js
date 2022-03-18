import express from "express"
const homeRoute = express.Router();

homeRoute.get('/',(request, response)=>{
    response.send(`
        <h1>Home Page</h1>
    `)
});

export default homeRoute

