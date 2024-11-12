const mongoose=require("mongoose");
const blogSchema=mongoose.Schema(
{
    title:String,
image:String,
author:String,
description:String
},



);


const blogModel = mongoose.model('blogdatas',blogSchema);
module.exports=blogModel;