import React, { createContext, useReducer} from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

import Home from "./components/Home/Home";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Timetaken from "./components/Timetaken/Timetaken";
import Signup from "./components/Signup/Signup";
import Errorpage from "./components/Errorpage/Errorpage";
import {initialState, reducer } from "../src/reducer/UseReducer";

export const UserContext = createContext();

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/timetaken" element={<Timetaken />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Errorpage />} />
    </Routes>
  )
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value = {{state, dispatch}}>
        <Navbar />
        <Routing />
      </UserContext.Provider>
    </>
  )
}
export default App
