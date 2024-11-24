import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Address, Checkout, Home,Login, Payments, Products, Profile, Register, Successful, NotFound } from "../pages";

export default function App() {
  

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/address" element={<Address/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/payments" element={<Payments/>} />
      <Route path="/successful" element={<Successful/>} />
      <Route path="*" element={<NotFound/>} />
      
    </Routes>
   </BrowserRouter>
  )
}
