

import React, { useState } from 'react'
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Table from "./components/Table/Table"
import Create from "./components/create/Create"
import Read from "./components/read/Read"
import Update from "./components/update/Update"
import Delete from "./components/delete/Delete"

import './App.css';
import data from "./data/data"

function App() {

  const [jobs, addJob] = useState(data);

  return (
    <Router>
      <div>
        <Header />


        <Switch>
          <Route path="/" exact component={Table}/>

          <Route path="/create" component={Create} />

          <Route path="/read" component={Read} />

          <Route path="/update" component={Update} />

          <Route path="/delete" component={Delete} />

        </Switch>


        <Footer />
      </div>
    </Router>
  );
}

export default App;
