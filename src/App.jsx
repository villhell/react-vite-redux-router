import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.scss';

import { Routes, Route } from 'react-router-dom';

import SideBar from './components/Sidebar';
import Home from './router/Home';
import About from './router/About';
import Contact from './router/Contact';
import Setting from './router/Setting';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/settings" element={<Setting />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
