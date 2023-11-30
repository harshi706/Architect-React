import "./App.css";
import React,{useState,useEffect} from 'react';
import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";



function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} /> 
      <Route path="/ayatrio-map" element={<MapPage/>} /> 
      </Routes>
    </>
  );
}

export default App;
