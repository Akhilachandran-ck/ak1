import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
  const navigate=useNavigate();
  const [loginForm,setLoginform]=useState({
    email:'',
    password:''});
  const change1=(e)=>{
    
    setLoginform({...loginForm,[e.target.name]:e.target.value})
    
    
       }
  
 
      
      const click1=()=>{
   
       console.log(loginForm);
       axios.post('http://localhost:3000/user/login',loginForm)
       .then((res)=>{
   alert(res.data);
   console.log(res.data);
   navigate('/blogs');
       })
       .catch((error)=>{
         console.log(error)
       })}
  return (
    <div>

<Typography variant='h3' style={{color:'darkblue'}}>BlogApp Login</Typography><br></br>
   
      
        <TextField
          
          id="outlined-basic"
          label="Email" 
          
variant="outlined"
name="email"

onChange={change1}   
          
        />
        <br></br>
        <br></br>
        <TextField
          
          id="outlined-basic"
          label="Password" 
          
variant="outlined"
name="password"

onChange={change1} 
          
          
        />
        <br></br>
        <br></br>
        
<Button  id="bu1" variant='contained' onClick={click1}>Login</Button>
<br></br>
<br></br>
<Typography style={{color:'darkblue'}}>
  <Link to={'/signup'}>New user? Please Click here</Link></Typography>


</div>
  )
}

export default Login