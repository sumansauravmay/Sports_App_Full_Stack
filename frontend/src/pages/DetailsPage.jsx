import React from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
// import {AiFillLike,AiFillDislike } from "react-icons/ai";
import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    HStack,
    Container
  } from '@chakra-ui/react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

  export const BlogAuthor = (props) => {
    return (
      <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
        <Image
          borderRadius="full"
          boxSize="40px"
          src="https://100k-faces.glitch.me/random-image"
          alt={`Avatar of ${props.name}`}
        />
        <Text fontWeight="medium">{props.name}</Text>
        <Text>—</Text>
        <Text>{props.date}</Text>
      </HStack>
    );
  };



const DetailsPage = () => {

    const {id}=useParams()
const [itemDetails,setItemDetails]=React.useState([]);

React.useEffect(()=>{
    axios.get(`http://localhost:4000/${id}`)
        .then((res)=>{
            setItemDetails(res.data)
            console.log(res.data)
        })
},[id])


  return (
    <div>
<Navbar/>
<Container maxW={'7xl'} p="12">
        <Heading as="h1">Details of Event</Heading>
        {
          itemDetails.map((item)=>(
            <Box key={item._id}
            marginTop={{ base: '1', sm: '5' }}
            display="flex"
            flexDirection={{ base: 'column', sm: 'row' }}
            justifyContent="space-between">
            <Box
              display="flex"
              flex="1"
              marginRight="3"
              position="relative"
              alignItems="center">
              <Box
                width={{ base: '100%', sm: '85%' }}
                zIndex="2"
                marginLeft={{ base: '0', sm: '5%' }}
                marginTop="5%">
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                  <Image
                    borderRadius="lg"
                    src={
                      'https://i.postimg.cc/4NZtGt1j/Whats-App-Image-2023-04-14-at-21-53-51.jpg'
                    }
                    alt="some good alt text"
                    objectFit="contain"
                  />
                </Link>
              </Box>
              <Box zIndex="1" width="100%" position="absolute" height="100%">
                <Box
                  backgroundSize="20px 20px"
                  opacity="0.4"
                  height="100%"
                />
              </Box>
            </Box>
            <Box
              display="flex"
              flex="1"
              flexDirection="column"
              justifyContent="center"
              marginTop={{ base: '3', sm: '0' }}>
             
              <Heading as="p" marginTop="2" fontSize="xl">
                Title:
                {item.title}
              </Heading>

              <Text  as="p" marginTop="2" fontSize="lg">
                {item.description}
              </Text>

              <Text  as="p" marginTop="2" fontSize="lg">
                Game :
                <span style={{fontWeight:"bold"}}>
                {item.game}
                </span>
              </Text>

              <Text  as="p" marginTop="2" fontSize="lg">
                Total_Player_Limit :
                <span style={{fontWeight:"bold"}}>
                {item.total_player}
                </span>
              </Text>

              <Text  as="p" marginTop="2" fontSize="lg">{
                item.start_time?
                <span style={{fontWeight:"bold"}}>
                 Start_Time:
                {item.start_time.hours}:
                {item.start_time.minutes}:
                {item.start_time.seconds}
                </span>
                :""
              }
                
              </Text>

              <BlogAuthor name="Created at" date={item.updatedAt} />
             
            </Box>
          </Box> 
          ))
        }
               
           
        

      </Container>
<Footer/>
    </div>
  )
}

export default DetailsPage