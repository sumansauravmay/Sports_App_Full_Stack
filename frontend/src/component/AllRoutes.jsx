import React from 'react'
import Home from '../pages/Home'
import { Routes,Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import DetailsPage from '../pages/DetailsPage';
import AddEvent from '../pages/AddEvent';

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Home/>}></Route>
     <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/:id" element={<DetailsPage/>}></Route>
    <Route path="/update" element={<AddEvent/>}></Route>
    <Route path="/new_event" element={<AddEvent/>}></Route> 
</Routes>
  )
}

export default AllRoutes