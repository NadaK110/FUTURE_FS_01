import React from 'react';

import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      {/*  <Navbar /> */}
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
