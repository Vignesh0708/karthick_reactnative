import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Cards from './components/props/card';
import React from 'react';
import Simple from './components/props/simple';


function App() {
  return (
    <>
      <Navbar />
      <Cards />
      <Simple />
    </>
  );
}

export default App;
