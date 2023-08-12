import { Box, Button, Heading, Input, Stack, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import '../Pages/login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
  const toast = useToast()
  const [Email,setemail] = useState("")
  const[Password,setpass] = useState("")
  const navigate = useNavigate()
  const hadlesubmit = ()=>{
    axios.post('https://kind-puce-adder-garb.cyclic.app/login',{
        email:Email,
        password:Password
    }).then((res)=>{
        if(res.data.msg=="login successfull"){
          toast({
            title: 'Login Succesfull.',
            description: "You have Succesfull logged in.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          navigate('/productPage')
        }

    })
  }
  return (
    <div className="Logincontainer">
      
       <div style={{width:"30%"}}>
       
      <Stack spacing={15}>
      <Heading>Login</Heading>
      <Input placeholder='Enter Email' fontSize={20} size='md' value={Email} onChange={(e)=>setemail(e.target.value)} />
      <Input placeholder='Enter Password' fontSize={20} size='md'value={Password} onChange={(e)=>setpass(e.target.value)} />
      <Box>

      <Button onClick={()=>hadlesubmit()} colorScheme='blue' w="50%" m="auto" >Log In</Button>
      </Box>
      </Stack>
      <Text fontSize='md'>Not having account? <Link to={'/signup'}>Signup</Link> </Text>
  
     
    
        </div>
    </div>
   
  )
}
