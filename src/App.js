

import React, { useState } from 'react'
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Create from "./components/create/Create"
import Read from "./components/read/Read"
import Update from "./components/update/Update"
import Delete from "./components/delete/Delete"

import './App.css';
import data from "./data/data"
import JobDetails from './components/read/JobDetails.jsx'

function App() {

  const [jobs, addJob] = useState(data);

  return (
    <Router>
      <div>
        <Header />


        <Switch>
          <Route path="/" exact component={Home}/>

          <Route path="/create" component={Create} />

          <Route path="/read/:id" component={JobDetails} />

          <Route path="/update" component={Update} />

          <Route path="/delete" component={Delete} />

        </Switch>


        <Footer />
      </div>
    </Router>
  );
}

export default App;
