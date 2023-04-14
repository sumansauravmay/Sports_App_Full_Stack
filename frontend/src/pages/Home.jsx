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
      src="https://i.postimg.cc/4NZtGt1j/Whats-App-Image-2023-04-14-at-21-53-51.jpg"
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


      <Button variant='solid' colorScheme='blue'>
        Delete Event
      </Button>
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