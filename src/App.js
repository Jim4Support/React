import React from 'react';
import './App.css';
import Main from './Components/Main/Main.js';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';

function App() {
  return (
    <div className="todoapp">
      <Header />
      <div className='content'>
      <Main />
      <Footer />
      </div>
    </div>
  );
}
export default App;