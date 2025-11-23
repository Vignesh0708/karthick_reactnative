import React from 'react';
import './App.css';
import PropsNavbar from './components/props/Navbar';
import MyCard from './components/props/mycard.jsx';
import Simple from './components/props/simple';
import Card from './components/props/card.js';
import New from './components/state/New.js';
import Bird from './images/tropical-macaw-perched-vibrant-feathers-focus-generated-by-ai.jpg';
import Show from './components/state/show.js';

function App() {
  // const sampleCards = [
  //   { id: 1, title: "Karthick", text: "Some quick example...", image: Logo },
  //   { id: 2, title: "John", text: "Another example...", image: Logo },
  //   { id: 3, title: "Sarah", text: "Yet another card...", image: Logo }
  // ];


  const cardData = [
    { id: 1, title: "Karthick", text: "Some quick example text...", image: Bird },
    { id: 2, title: "John", text: "Another example text for the second card.", image: Bird },
    { id: 3, title: "Sarah", text: "Yet another card example with different content.", image: Bird }
  ];

  return (
    <>
      {/* <PropsNavbar />
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <aside style={{ width: 240, margin: 16, padding: 16, background: '#f8f9fa', borderRight: '1px solid #e9ecef', height: '100vh', position: 'sticky', top: 0, overflowY: 'auto' }}>
          <h2>Sidebar Component</h2>
          <p>This is a sidebar component.</p>
        </aside>

        <main style={{ flex: 1, padding: 16 }}>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
            <MyCard title="Karthick" text="Some quick example text..." image={Logo} />
            <MyCard title="Karthick" text="Some quick example text..." image={Logo} />
            <MyCard title="Karthick" text="Some quick example text..." image={Logo} />
          </div>

          <hr style={{ margin: '24px 0' }} />

          <Simple data={sampleCards} />
        </main>
      </div> */}

      <Simple data={cardData} />
      <Card />
      <New />
      <Show />
       
    </>
  );
}

export default App;
