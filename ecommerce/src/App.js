import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Cards from './components/props/card';
import React from 'react';
import Simple from './components/props/simple';
import MyCard from './components/props/mycard.jsx';
import PropsNavbar from './components/props/Navbar';
import Logo from './images/logo192.png';


function App() {
  return (
    <>
      <PropsNavbar />
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <aside style={{ width: 240, marginTop: 16, marginLeft: 16, marginBottom: 16, padding: 16, background: '#f8f9fa', borderRight: '1px solid #e9ecef', boxSizing: 'border-box', height: '100vh', position: 'sticky', top: 0, overflowY: 'auto' }}>
          <h2>Sidebar Component</h2>
          <p>This is a sidebar component.</p>
        </aside>

        <main style={{ flex: 1, padding: 16 }}>
          <MyCard title="karthick" text="Some quick example text to build on the card title" image={Logo} />
          <MyCard title="karthick" text="Some quick example text to build on the card title" image={Logo} />
          <MyCard title="karthick" text="Some quick example text to build on the card title" image={Logo} />
        </main>
      </div>
    </>
  );
}

export default App;
