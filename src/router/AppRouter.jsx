import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar.jsx"; 
import Footer from "../components/Footer.jsx"
import Dashboard from "../pages/Dashboard.jsx";
import NewBlog from "../pages/NewBlog.jsx";
import About from "../pages/Abouts.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import PrivateRouter from "../router/PrivateRouter.jsx";
import Detail from "../pages/Detail.jsx";
import Profile from "../pages/Profile.jsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />

        <Route element={<PrivateRouter />}>
          <Route path="/newblog" element={<NewBlog />} />
          <Route path="/detail/:id" element={<Detail />} /> 
        <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;

