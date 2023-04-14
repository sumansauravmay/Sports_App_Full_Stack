import React from 'react'
import Home from '../pages/Home'
import { Routes,Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import DetailsPage from '../pages/DetailsPage';

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Home/>}></Route>
     <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/:id" element={<DetailsPage/>}></Route>
    {/* <Route path="/update" element={<Update/>}></Route> */}
    {/* <Route path="/update_name" element={<UserUpdate/>}></Route>  */}
</Routes>
  )
}

export default AllRoutes