import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from 'styled-components';

//Pages
import Home from "./pages/home"
import Boats from "./pages/boats"

const AppStyled = styled.div`
nav{
  background-color:#0b85b5;
  padding:10px;
  margin-bottom:10px;
  font-weight:bold;

  .navLink{
    color:#ffffff;
  }
  a{
    text-decoration:none;
  }

  .main-navigation-links{
    li{
      list-style-type: none;
      padding: 10px;
      display: inline-block;
      border: 1px #ffffff solid;
    }
    li:hover{
      a{
        color:#000000;
      }
      cursor:pointer;
      background-color:#ffffff;
    }
  }
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
          <ul className='main-navigation-links'>
            <li>
              <Link to="/" className="navLink">
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/boats" className="navLink">
                <span>Boat Admin</span>
              </Link>
            </li>
          </ul>
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