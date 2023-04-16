import React, { useEffect, useState } from "react";
import "../App.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useScroll } from "framer-motion";
import axios from "axios";
import { Heading } from "@chakra-ui/react";

const DetailsPlayer = () => {
  const [data, setData] = useState([]);

  const token = JSON.parse(localStorage.getItem("token"));
  const id = JSON.parse(localStorage.getItem("id"));

  const getData = () => {
    return axios
      .get(`https://outrageous-bass-peplum.cyclic.app/playerdel/${id}`, {
        headers: {
          Authorization:`Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res.data.players);
        console.log(res.data.players);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />

      <Heading> {data.length===0?"No Participation":<span>
      Total Joined Participant ={data.length}
      </span>}</Heading>
      <table>
        <thead>
          <tr>
            <th>UserID</th>
            <th>Email</th>
            <th>Name</th>
          </tr>
        </thead>
        {data &&
          data.map((item) => (
            <tbody>
              <td>{item._id}</td>
              <td>{item.email}</td>
              <td>{item.name}</td>
            </tbody>
          ))}
      </table>
      <Footer />
    </>
  );
};

export default DetailsPlayer;
