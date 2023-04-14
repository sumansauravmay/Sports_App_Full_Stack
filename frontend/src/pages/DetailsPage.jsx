import React from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {AiFillLike,AiFillDislike } from "react-icons/ai";
import {
    Box,Flex, 
    Heading,
    Link,
    Image,
    Text,
    HStack,
    Container,
    Button,
  } from '@chakra-ui/react';

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
const [itemDetails,setItemDetails]=React.useState({});

React.useEffect(()=>{
    return axios.get(`http://localhost:4000/${id}`)
        .then((res)=>setItemDetails(res.data))
},[id])


  return (
    <div>

<Container maxW={'7xl'} p="12">
        <Heading as="h1">Details of Event</Heading>
        
                <Box
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
                          'https://www.adobe.com/content/dam/offers-homepage/us/en/homepage/twitter_adobe.png'
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
                 
                  <Text
                    as="p"
                    marginTop="2"
                    fontSize="lg">
                    {itemDetails.title}
                  </Text>
                  <BlogAuthor name="Updated at" date={itemDetails.updatedAt} />
                  <br/>

                  <Flex gap="20px" cursor={'pointer'}>
                    <Box fontSize={30}>
                    <AiFillLike/>
                    </Box>
                  
                  <Box fontSize={30}>
                  <AiFillDislike/>
                  </Box>
                  
                  </Flex>
                  
                </Box>
              </Box>  
            ))
        

      </Container>

    </div>
  )
}

export default DetailsPage