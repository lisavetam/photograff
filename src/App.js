import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



import Gallery from './Gallery';

import Contact from './Contact';
import Shop from './Shop';
import About from './About';
import FooterShow from './FooterShow';





function App() {


  return ( 
  <div>
    <Router>
   <nav>
    <Link to="/About" className='link'>ELIZAVETA SCHLEGEL</Link>
    <Link to="/Gallery" className='link'>Gallery</Link>
  
    <Link to="/Shop" className='link'>Shop</Link>
    <Link to="/Contact" className='link'>Contact</Link>
   </nav>
   <Routes>
   
    <Route path="/Gallery" element ={<Gallery/>}/>
    <Route path="/About" element ={<About/>}/>
    <Route path="/Shop" element ={<Shop/>}/>
    <Route path="/Contact" element ={<Contact/>}/>
   </Routes>
   </Router>

<FooterShow/>
</div>
);
}



export default App;

