import React, { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import {
  Container,
  Input,
  Select,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const AddEvent = () => {
  const toast = useToast();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [game, setGame] = useState("");
  const [total_player, setTotal_player] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let token = JSON.parse(localStorage.getItem("token"));

  // console.log(token)

  const handlePostNew = () => {
    let payload = {
      title,
      description,
      game,
      total_player,
      hours,
      minutes,
      seconds,
    };
    if (
      title === "" ||
      description === "" ||
      game === "" ||
      total_player === ""
    ) {
      toast({
        title: "Please fill the details carefully",
        description: "email or password or both are empty",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      axios
        .post("http://localhost:4000/post", payload, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          // console.log(res.data);
          window.location.reload();
          toast({
            title: "Posted Successfully",
            description: "Congratulations",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        });
    }
  };
  // content
  return (
    <>
      <Navbar />
      <Container
        bg="#9DC4FB"
        maxW="full"
        mt={0}
        centerContent
        overflow="hidden"
      >
        <Flex>
          <Box
            bg="#02054B"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Post Your Thought</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Text Your Idea Free
                    </Text>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="title">
                          <FormLabel>Title</FormLabel>
                          <Input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="Title"
                          />
                        </FormControl>

                        <FormControl id="description">
                          <FormLabel>Description</FormLabel>
                          <Input
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="Small Description"
                          />
                        </FormControl>

                        <FormControl id="name">
                          <FormLabel>Game</FormLabel>
                          <Select
                            value={game}
                            onChange={(e) => setGame(e.target.value)}
                          >
                            <option value="">Select Game</option>
                            <option value="Cricket">Cricket</option>
                            <option value="Football">Football</option>
                            <option value="Carrom">Carrom</option>
                            <option value="Badminton">Badminton</option>
                          </Select>
                        </FormControl>

                        <FormControl id="player">
                          <FormLabel>Max_Player</FormLabel>
                          <Input
                            value={total_player}
                            onChange={(e) => setTotal_player(e.target.value)}
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="Player Limit"
                          />
                        </FormControl>
                        {/* //timers */}
                        <FormControl id="player">
                          <FormLabel>hours</FormLabel>
                          <Input
                            value={hours}
                            onChange={(e) => setHours(e.target.value)}
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="Put Hours"
                          />
                        </FormControl>

                        <FormControl id="player">
                          <FormLabel>Minutes</FormLabel>
                          <Input
                            value={minutes}
                            onChange={(e) => setMinutes(e.target.value)}
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="Put Minutes"
                          />
                        </FormControl>

                        <FormControl id="player">
                          <FormLabel>Seconds</FormLabel>
                          <Input
                            value={seconds}
                            onChange={(e) => setSeconds(e.target.value)}
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="Put Seconds"
                          />
                        </FormControl>

                        <FormControl id="name" float="right">
                          <Button
                            onClick={handlePostNew}
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}}
                          >
                            Post
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
      <Footer />
    </>
  );
};

export default AddEvent;
