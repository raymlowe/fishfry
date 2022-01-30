import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from 'styled-components';

//Pages
import Home from "./pages/home"
import Boats from "./pages/boats"

const AppStyled = styled.div`
.navLink{
  padding:20px;
}
`

//We use <Link> instead of <a>. In React the <a> leads to the refreshing of the page
/*
Nested Routes: with nested routes, we assume that part of the webpage will remain constant and only the 
child part of the webpage changes. 
*/

function App() {
  return (
    <AppStyled>
      <Router>
        <nav>
          <Link to="/" className="navLink">
            Home
          </Link>
          <Link to="/boats" className="navLink">
            Boats
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boats" element={<Boats />} />
        </Routes>
      </Router>
    </AppStyled>
  );
}

export default App;