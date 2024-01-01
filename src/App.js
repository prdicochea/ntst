import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Slideshow from './components/intro/Slideshow';
import Cards from './components/intro/Cards';

function App() {
  return (
    <>
      <Navbar />
      <Cards />
      <Slideshow />
    </>
  );
}

export default App;
