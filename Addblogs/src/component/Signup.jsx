import React, { useState } from 'react'
import '../App.css'
import { Box, Button, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid2';
import axios from 'axios';

const Signup = () => {
  const [users,setUsers]=useState();
   const change1=(e)=>{
setUsers({...users,[e.target.name]:e.target.value})


   }
   const click1=()=>{

    console.log(users);
    
   axios.post('http://localhost:3000/user/signup/add',users)
    .then((res)=>{

      console.log(res);
    })
    .catch((error)=>{
      console.log(error)
    })}

   
  return (


      <Box
        sx={{flexGrow:1}}style={{marginTop:'10%',marginLeft:'20%',width:'50%'}} >
<center>
<Typography variant='h4' style={{color:'darkblue'}}>User Registration</Typography></center><br></br>

          <Grid container spacing={2}>
        <Grid size={6}>
          <TextField fullWidth
            
            id="outlined-basic"
            label="Name"
            variant='outlined'
            name="name"
            onChange={change1}
            

          />

          </Grid>
         


          <Grid size={6}>
        

          
        <TextField fullWidth
          
          id="outlined-basic"
          label="Email"
          variant='outlined'
           name="email"
          onChange={change1}
          
        />
        </Grid>
        

        <Grid size={12}>
        

          
        <TextField fullWidth
          
          id="outlined-multiline-flexible"
          label="Address"
          multiline rows={4}
          name="address"
          onChange={change1}
           
        />
        </Grid>
        

        <Grid size={6}>
        

          
        <TextField fullWidth
          
          id="outlined-basic"
          label="Phone-number"
          variant='outlined'
            name="phone"
          onChange={change1}
         
        />
        </Grid>
          
        
       
          
        <Grid size={6}>
        

          
        <TextField fullWidth
          
          id="outlined-basic"
          label="Password"
          variant='outlined'
          name="password"
          onChange={change1}
           
        />
        
        </Grid>
        
        <Grid size={12}>
 
        <center>
        <Button variant="contained" onClick={click1}>SignUp</Button>
        </center>
        </Grid>
        <Grid size={12}>
 
<Typography style={{color:'darkblue'}}>
  <center>
  <Link to={'/'}>Registered user? Please Click here</Link></center></Typography>

</Grid>
</Grid>
      </Box>




    
  )
}
export default Signup