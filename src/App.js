

import React, { useState } from 'react'
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Create from "./components/create/Create"
import Update from "./components/update/Update"
import Delete from "./components/delete/Delete"

import './App.css';
import data from "./data/data"
import JobDetails from './components/read/JobDetails.jsx'

function App() {

  const [jobs, setJobs] = useState(data);
  
  function addJob(newJob){
    setJobs(prevJobs => 
      [...prevJobs, newJob] 
    )
  }

  function deleteJob(deleteID){
    setJobs(prevJobs => {
      return prevJobs.filter(jobsItem => {
        return jobsItem._id !== deleteID}
        )
      }
    )
  }

  function updateJob(updateJob){
    setJobs(prevJobs =>{
      return prevJobs.map(jobItem =>{
        if(jobItem._id !== updateJob._id){
          return jobItem
        }else{
          return updateJob
        }
      })
    })
  }

  return (
    <Router>
      <div>
        <Header />


        <Switch>
          <Route path="/" exact component={()=> <Home
            data={jobs}
          />}/>

          <Route path="/create" component={() => <Create
            onAdd={addJob}
          />} />

          <Route path="/read/:_id" component={(matchProps) => <JobDetails
            {...matchProps}
            data={jobs}
          />} />

          <Route path="/update" component={() => <Update 
            onUpdate={updateJob}
          />} />

          <Route path="/delete" component={() => <Delete
            onDelete={deleteJob}
          />} />

        </Switch>


        <Footer />
      </div>
    </Router>
  );
}

export default App;
