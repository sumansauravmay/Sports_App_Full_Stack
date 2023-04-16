import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Heading,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  useToast,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const toast = useToast();

  let token = JSON.parse(localStorage.getItem("token"));
  let userid = JSON.parse(localStorage.getItem("userid"));

  //logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    localStorage.removeItem("username");
    toast({
      title: "Logout Successfull",
      description: "You are redirectd to Login Page",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    navigate("/login");
  };

  //add new event
  const hanldeallPost2 = () => {
    if (token) {
      navigate("/new_event");
    } else {
      toast({
        title: "Login First",
        description: "You are redirectd to Login Page",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      navigate("/login");
    }
  };

  //delete Account
  const handleDelete = (userid) => {
    axios
      .delete(`https://crimson-coyote-gear.cyclic.app/delete_user/${userid}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        navigate("/login");
        window.location.reload();
        toast({
          title: "User Deleted successfully",
          description: "You are redirectd to all posts",
          status: "success",
          duration: 9000,
          isClosable: true,
        });

        localStorage.removeItem("token");
        localStorage.removeItem("id");
        localStorage.removeItem("userid");
        localStorage.removeItem("username");
      });
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Heading w="300px" onClick={hanldeallPost2} cursor={"pointer"}>
            {/* <Link to="/post"> */}
            Add New Event
            {/* </Link> */}
          </Heading>

          <Heading w={40} cursor={"pointer"}>
            <Link to="/">All Event</Link>
          </Heading>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://avatars.githubusercontent.com/u/101393663?v=4"
                    }
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={
                        "https://avatars.githubusercontent.com/u/101393663?v=4"
                      }
                    />
                  </Center>
                  <br />
                  <Center>
                    <Heading>
                      {/* {username?username:"Username"} */}
                      Username
                    </Heading>
                  </Center>
                  <br />
                  <MenuDivider />

                  <MenuItem>
                    <Link to="/signup">{token ? "" : "Sign up"}</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link to="/login">{token ? "" : "Log In"}</Link>
                  </MenuItem>

                  <MenuItem onClick={handleLogout}>
                    {token ? "Logout" : ""}
                  </MenuItem>
                  <MenuItem onClick={() => handleDelete(userid)}>
                    {token ? "Delete Account" : ""}
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
