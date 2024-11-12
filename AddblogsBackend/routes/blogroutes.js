const express=require("express");
const router=express.Router();
const blogModel=require("../model/blogModel.js");
router.use(express.json());

router.post("/addblog/add",async(req,res)=>{
  try {
      var item=req.body;
var data=new blogModel(item);
await data.save();
res.status(200).send("data added successfully")
  } catch (error) { 
      res.status(404).send("unable to send  data")
 
  }
});
router.get("/addblog/get",async(req,res)=>{
  try {
      var data=await blogModel.find();
      res.status(200).send(data);
      
  } catch (error) {
      res.status(404).send("unable to getdata");
  
  }

  router.delete("/addblog/del/:id",async(req,res)=>{




    try {
        await blogModel.findByIdAndDelete(req.params.id);
        res.status(200).send("deleted successfully");
        
    } catch (error) {
        res.status(404).send("unable to delete data");

    }
   
})
}
)

router.put("/addblog/edit/:id",async(req,res)=>{




  try {
      await blogModel.findByIdAndUpdate(req.params.id,req.body);
      res.status(200).send("edited successfully");
      
  } catch (error) {
      res.status(404).send("unable to edit data");

  }
 
})











    


router.post("/blog/add",async(req,res)=>{
    try {
        var item1=req.body;
  var data1=new blogModel(item1);
  await data1.save();
  res.status(200).send("data added successfully")
    } catch (error) { 
        res.status(404).send("unable to send  data")
   
    }
  });
  router.get("/blog/get",async(req,res)=>{
    try {
        var data1=await blogModel.find();
        res.status(200).send(data1);
        
    } catch (error) {
        res.status(404).send("unable to getdata");
    
    }
  
    router.delete("/blog/del/:id",async(req,res)=>{
  
  
  
  
      try {
          await blogModel.findByIdAndDelete(req.params.id);
          res.status(200).send("deleted successfully");
          
      } catch (error) {
          res.status(404).send("unable to delete data");
  
      }
     
  })
  }
  )
  
  router.put("/blog/edit/:id",async(req,res)=>{
  
  
  
  
    try {
        await blogModel.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).send("edited successfully");
        
    } catch (error) {
        res.status(404).send("unable to edit data");
  
    }
   
  })
  
  
  
  
  
  module.exports=router;
  
  
  
  
  
  
      
  
  







