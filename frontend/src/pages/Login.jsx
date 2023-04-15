import React, { useState } from 'react';
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { useToast } from '@chakra-ui/react'
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Login = () => {
    const toast = useToast();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate()

const handleLogin=()=>{
    const payload={
        email,password
    }
    if(email===""||password===""){
        toast({
            title: 'Please fill the details carefully',
            description: "email or password or both are empty",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
    }
    else{
        axios.post("http://localhost:4000/login",payload)
        .then((res)=>{
            console.log(res.data)
            toast({
                title: 'Login Successfully',
                description: "You are redirectd to all posts",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
              localStorage.setItem("token",JSON.stringify(res.data.token))
            //   localStorage.setItem("userid",JSON.stringify(res.data.userID))
            //   localStorage.setItem("username",JSON.stringify(res.data.username))
              navigate("/")
        })
        .catch((err)=>console.log(err))
    }
}


  return (
    <>
    <Navbar/>
        <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Login to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
    
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
              </FormControl>
    
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
              </FormControl>
              {/* colorScheme */}
              <Stack spacing={10}>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'red.500',
                  }} onClick={handleLogin}>
                 Log In
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer/>
      </>
  )
}

export default Login