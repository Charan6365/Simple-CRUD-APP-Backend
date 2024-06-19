import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import {router} from "./routes/product.route.js";
// import dotenv from "dotenv";


const app= express(); 
const port= 3000;

//middleware
app.use(express.json()); // allows json() content to share from client to server
//app.use(bodyParser.urlencoded({extended: true}));//Allows body or form contents to send from client to server
app.use(express.urlencoded({extended: false})); //This thing does exactly same as the above one.



// routes
app.use("/api/products" , router);

app.get("/",(req,res)=>{
   console.log(req.body);
   res.send("Hello from Node API Server Updated");
});






//database and port connection
mongoose
.connect("mongodb+srv://satyacharan9595:KAbSdKuNImaPPOiI@backenddb.j5bnwja.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
    console.log("Database is connected successfully");
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    });
}).catch((error)=>{
    console.log(error);
});


