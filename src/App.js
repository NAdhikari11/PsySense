import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dass from "./pages/Dass";
import Dashboard from "./pages/Dashboard";
import Schedule from "./pages/Schedule";
import FindTherapist from "./pages/FindTherapist";
import Result from "./pages/Result";

function App() {
  return (
    <div>
      <Routes>
        <Route path = '/' element={<Home />} />
        <Route path = '/login' element={<Login />} />
        <Route path = '/signup' element={<Signup />} />
        <Route path = '/dass' element={<Dass />} />
        <Route path = '/dashboard' element={<Dashboard />} />
        <Route path = '/schedule' element={<Schedule />} />
        <Route path = '/find' element={<FindTherapist />} />
        <Route path = '/results' element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
