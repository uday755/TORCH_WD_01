import './App.css';
import Navbar from "./components/Navbar";
import BootstrapCarousel from './components/BootstrapCarousel';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Introduction from './components/Introduction';
import Contact from './components/Contact';

function App() {
  return (
      <div>
        <Navbar />
        <BootstrapCarousel />
        <Introduction/>
        <Contact/>
      </div>
  );
}

export default App;
