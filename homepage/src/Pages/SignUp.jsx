import { Box, Button, Heading, Input, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import '../Pages/login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const [Email,setemail] = useState("")
  const[Password,setpass] = useState("")
  const navigate = useNavigate()
  const hadlesubmit = ()=>{
    axios.post('https://kind-puce-adder-garb.cyclic.app/signup',{
        email:Email,
        password:Password
    }).then((res)=>{
        if(res.data.msg=="user registerd succesfully"){
            navigate('/productPage')
        }
    })
  }
  return (
    <div className="Logincontainer">
      
       <div style={{width:"30%"}}>
       
      <Stack spacing={15}>
      <Heading>Sign Up</Heading>
      <Input placeholder='Enter Email' fontSize={20} size='md' value={Email} onChange={(e)=>setemail(e.target.value)} />
      <Input placeholder='Enter Password' fontSize={20} size='md'value={Password} onChange={(e)=>setpass(e.target.value)} />
      <Box>

      <Button onClick={()=>hadlesubmit()} colorScheme='blue' w="50%" m="auto" >Sign Up</Button>
      </Box>
      </Stack>
  
     
    
        </div>
    </div>
   
  )
}
