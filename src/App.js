
import './App.css';
import './responsive.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'; 
import React from "react";
import { connect } from "react-redux";
import "./page/styles/index.css";
import "./page/styles/color.css";

import "./page/styles/site.css";
import "./page/styles/style.css";
import "./page/styles/plugins.css";
import "./page/styles/arabic.css";
import "./page/styles/responsive.css";

import Home from "./page/index";
import Client from "./page/clientorganizations";
import Analyticaldashboard from "./page/analyticaldashboard";
import Manageteam from "./page/manageyourteam";
import Organizecommunication from "./page/organizecommunications";
import Organizeproject from "./page/organizeyourprojects";
import Privacy from './page/privacy';

function App() {
  return (
    <div className="App">
        <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/clientorganizations' element={<Client />} />
              <Route exact path='/analyticaldashboard' element={<Analyticaldashboard />} />
              <Route exact path='/manageyourteam' element={<Manageteam />} />
              <Route exact path='/organizecommunications' element={<Organizecommunication />} />
              <Route exact path='/organizeyourprojects' element={<Organizeproject />} />
              <Route exact path='/Home/Privacy' element={<Privacy />} />
        </Routes>
    </div>
  );
}


export default App;

