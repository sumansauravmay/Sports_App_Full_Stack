import React from 'react'
import Home from '../pages/Home'
import { Routes,Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Home/>}></Route>
     <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    {/* <Route path="/post" element={<Post/>}></Route> */}
    {/* <Route path="/update" element={<Update/>}></Route> */}
    {/* <Route path="/update_name" element={<UserUpdate/>}></Route>  */}
</Routes>
  )
}

export default AllRoutes