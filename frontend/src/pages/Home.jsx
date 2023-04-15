import React, { useState,useEffect } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import axios from "axios";
import { Link } from 'react-router-dom';
// import {AiFillLike,AiFillDislike } from "react-icons/ai";
import { Container, useToast } from '@chakra-ui/react';
import { Text,Button,Image,Heading,Divider,ButtonGroup,Input,
  Select,Center } from '@chakra-ui/react';
import { Card, CardBody, CardFooter } from '@chakra-ui/react'

const Home = () => {
const [data,setData]=useState([]);
const [filter,setFilter]=useState("");
const [searchgame,setSearchgame]=useState("")

    const getData=()=>{
      console.log(filter)
      if(filter!=="")
      {
        return axios.get(`http://localhost:4000/filter/${filter}`)
        .then((res)=>{
          console.log(res.data)
          setData(res.data)
      })
      }
        else{
          return axios.get(`http://localhost:4000/`)
          .then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
        }
  
      }

    useEffect(()=>{
        getData(filter)
       
    },[filter])


  return (
    <>
    <Navbar/>

{/* search */}
<Center>
<Input w="30%" borderColor="black"  mt="10px"
value={searchgame} onChange={(e)=>setSearchgame(e.target.value)}
type="text" placeholder="search by game name"/>
</Center>

{/* filtering */}
<Center>
<Select w="20%" mt="20px" borderColor="black"
//  value={filter} 
 onChange={(e)=>setFilter(e.target.value)}
 >
                                <option value="">All Game</option>
                                <option value="Cricket">Cricket</option>
                                <option value="Football">Football</option>
                                <option value="Carrom">Carrom</option>
                                <option value="Badminton">Badminton</option>
                                
                            </Select>
</Center>




    <Card maxW='sm'>
  <CardBody 
  display="Grid" gridTemplateColumns="repeat(3,400px)"
  ml="50px"
  >

    {
        data
        .filter((item)=>{
          if(searchgame==="All")
          {
            return item;
          }
          else if(item.game.toLowerCase().includes(searchgame.toLowerCase()))
          {
            return item;
          }
        })
        .map((item)=>(
            
            <Container key={item._id}
             mt='6' spacing='3'>
                 <Image
      src="https://i.postimg.cc/4NZtGt1j/Whats-App-Image-2023-04-14-at-21-53-51.jpg"
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
            <Heading size='md'>{item.title}</Heading>
            <Text>
              Game:{item.game}
            </Text>
           
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


      <Button variant='solid' colorScheme='red'>
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