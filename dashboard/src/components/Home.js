import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Signup from "./signup";

const Home = () => {
  return (
    // <>
    //   <TopBar />
    //   <Dashboard />
    // </>

    <div className="content">
      <Routes>
        <Route exact path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Home;
