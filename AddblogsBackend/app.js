const express=require("express");
const dotenv=require("dotenv");
require("dotenv").config();

const cors=require("cors")
const app=express();
require('./db/dbConnection');

const userRoutes=require('./routes/userroutes');
const blogRoutes=require('./routes/blogroutes');
app.use(cors());
app.use('/user',userRoutes);
app.use('/blog',blogRoutes);

app.listen(3000, ()=>{
    console.log(`listening to  port ${process.env.port}`);

})