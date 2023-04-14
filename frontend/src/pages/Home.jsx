import React, { useState,useEffect } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import axios from "axios";
import { Link } from 'react-router-dom';
import {AiFillLike,AiFillDislike } from "react-icons/ai";
import { Center, Container, useToast } from '@chakra-ui/react';
import { Text,Button,Stack,Image,Heading,Divider,ButtonGroup,Flex } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const Home = () => {
const [data,setData]=useState([])

    const getData=()=>{
        return axios.get("http://localhost:4000/")
  
      }

    useEffect(()=>{
        getData()
        .then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
    },[])


  return (
    <>
    <Navbar/>


    <Card maxW='sm'>
  <CardBody 
  display="Grid" gridTemplateColumns="repeat(3,400px)"
  ml="50px"
  >

    {
        data.map((item)=>(
            
            <Container key={item._id}
             mt='6' spacing='3'>
                 <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
            <Heading size='md'>{item.title}</Heading>
            <Text>
              Total_Player:{item.total_player}
            </Text>
           
            <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
        <Link to={`/${item._id}`}>
      <Button variant='solid' colorScheme='blue'>
        View Details
      </Button>
      </Link>
    </ButtonGroup>
  </CardFooter>

          </Container>

        ))
    }
   
  </CardBody>
  
</Card>




    <Footer/>
    </>
  )
}

export default Home