import React from 'react'

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Signup/>}></Route>
    <Route path="/allpost" element={<Home/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/post" element={<Post/>}></Route>
    <Route path="/update" element={<Update/>}></Route>
    <Route path="/update_name" element={<UserUpdate/>}></Route>
</Routes>
  )
}

export default AllRoutes