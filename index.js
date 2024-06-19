import express from "express";
import router from "./src/Routes/index.js";

//initializing server
const app=express();

//middlewares
app.use(express.json());

//initializing port
const PORT=2004;

//router
app.use("/",router);

//listening to the server
app.listen(PORT,()=>console.log("server started in PORT : "+PORT));

