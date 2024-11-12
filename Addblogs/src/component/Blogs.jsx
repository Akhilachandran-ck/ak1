import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2';
import axios from 'axios';
const Blogs = () => {
    
  
 // const data=[{blogname:'Foodblog',blogimg:'',blogdesc:'Food blog'},{blogname:'Travel blog',blogimg:'',blogdesc:'Travel blog'},{blogname:'Movie blog',blogimg:'',blogdesc:'Movie blog '},]
  
  

  
 const [blog,setblog]=useState([]);
  useEffect(()=>{
axios.get('http://localhost:3000/blog/blog/get')
.then((res)=>{
  setblog(res.data);
// console.log(res.data);

})
.catch((error)=>{
  console.log(error);
})


  },[])

const click1=()=>{

 
axios.delete('http://localhost:3000/blog/blog/del',blog)
 .then((res)=>{

   console.log(res);
 })
 .catch((error)=>{
   console.log(error)
 })}
  
  return (

<Grid container spacing={2}>
    {blog.map((row)=>(
  <Grid size={4}>
  <Card sx={{ maxWidth: 345 }} style={{marginTop:'0%'}}>
      <CardMedia
        sx={{ height: 140 }}
        image={row.image}
        title="green iguana"
      />
      <CardContent>
      <center>
        <Typography gutterBottom variant="h6" component="div">
          {row.title}
        </Typography></center>
        <center>
        <Typography gutterBottom variant="h6" component="div">
          {row.author}
        </Typography></center>
        <center>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {row.description}

        </Typography></center>
      </CardContent>
      <CardActions>
        <Button variant='contained' style={{marginLeft:'80px'}} >Update</Button>

        <Button  variant='contained' style={{marginRight:'60px'}} onClick={click1}>Delete</Button>

      </CardActions>
    </Card>

  </Grid>
    ))}
 

  
</Grid>

    

    
  )
}

export default Blogs