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
      <Simple title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card’s content." />
    </>
  );
}

export default App;
