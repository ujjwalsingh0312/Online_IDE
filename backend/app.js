//entry file
//const express = require ('express'); //used before ES6 type = Common JS
import express from "express";
import userRoutes from "./routes/user-routes.js";
import ideRoutes from "./routes/ide-routes.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json()); //JSON Data Fetch (next)
app.use('/', userRoutes);
//app.use('/', ideRoutes);
app.use((request, response, next) =>{
    response.json({message:'Invalid URL'});
})

const server = app.listen(4000,(err) =>{
    if(err){
        console.log("Server Crash ",err);
    }
    else{
        console.log("Server started and running ",server.address());
    }
})


// app.use(express.static("public"));
// app.get('/home',(request,response)=>{
//     response.send("Hello this is a server!");
// })
// app.get('/urljson',(request,response)=>{
//     response.json({
//         question:'WAP to compute the prime number!'
//     });
// })