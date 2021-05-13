import React from "react";
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import Problem_1 from "./components/Problem1/Problem_1";
import Problem_2 from "./components/Problem2/Problem_2";
import Character from "./components/Problem2/Character";

import PeopleProvider from "./context/CharacterContext";

import {  
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <PeopleProvider>
      <Router>

        <Navbar />

        <Switch>
            <Route exact path="/" /> 
            <Route exact path="/ProblemaUno" component={Problem_1}/>
            <Route exact path="/ProblemaDos" component={Problem_2}/>
            <Route exact path="/Character" component={Character}/>
          </Switch>

      </Router>
    </PeopleProvider>
  );
}

export default App;
