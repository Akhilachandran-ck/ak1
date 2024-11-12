import React, { useState } from 'react'
import '../App.css'
import { Box, Button, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Addblogs = () => {
  const navigate=useNavigate();

  const [users,setUsers]=useState();
  const change1=(e)=>{
setUsers({...users,[e.target.name]:e.target.value})


  }
  const click1=()=>{

   console.log(users);
   
  axios.post('http://localhost:3000/blog/addblog/add',users)
   .then((res)=>{
    navigate('/blogs');

     console.log(res);
   })
   .catch((error)=>{
     console.log(error)
   })}

  
 












  return (
      <Box
        sx={{flexGrow:1}}style={{marginTop:'10%',marginLeft:'20%',width:'50%'}} >
          <Grid container spacing={2}>

          <Grid size={12}>
            <Typography variant='h4'>Add Blog Details</Typography>

            </Grid>

        <Grid size={12}>
          <TextField fullWidth
            
            id="outlined-basic"
            label="BlogName"
            variant='outlined'
            name="title"
            onChange={change1}
            
          />

          </Grid>
         


          <Grid size={12}>
        

          
        <TextField fullWidth
          
          id="outlined-basic"
          label="BlogImage Url"
          variant='outlined'
          name="image"
            onChange={change1}
          
        />
        </Grid>
        <Grid size={12}>
        

          
        <TextField fullWidth
          
          id="outlined-basic"
          label="BlogAuthor"
          variant='outlined'
          name="author"
            onChange={change1}
          
        />
        </Grid> 

        <Grid size={12}>
        

          
        <TextField fullWidth
          
          id="outlined-multiline-flexible"
          label="Blogdescription"
          multiline rows={4}
          name="description"
            onChange={change1}
          
        />
        </Grid>
        

       
          
        
       
          
       
        
      
        
        <Grid size={12}>
 
        <center>
        <Button id="bu2" variant="contained" onClick={click1}>ADD BLOG</Button></center>
        </Grid>
     
</Grid>
      </Box>




    
  )
}


export default Addblogs