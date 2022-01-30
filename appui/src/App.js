import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//Pages
import Home from "./pages/home"
import Boats from "./pages/boats"

//We use <Link> instead of <a>. In React the <a> leads to the refreshing of the page
/*
Nested Routes: with nested routes, we assume that part of the webpage will remain constant and only the 
child part of the webpage changes. 
*/

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="/boats">
          Boats
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boats" element={<Boats />} />
      </Routes>
    </Router>
  );
}

export default App;