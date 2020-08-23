import React, {useState} from "react"
import {Link} from "react-router-dom"

function Update(props){
    const [job, setJob] = useState({
        _id: "",
        title: "",
        city: "",
        employer: "",
        requirements: [],
        tasks: []
    })
    
    function handleChange(events){
        const {name, value} = events.target;
        setJob(prevJob => {
            
            return {
                ...prevJob,
                [name]: value
            }
        })
    }

    function handleChangeArray(events){
        const {name, value} = events.target;
        setJob(prevJob => {
            
            return {
                ...prevJob,
                [name]: [value]
            }
        })
    }


    function updateJob(event){
        props.onUpdate(job);
    }   
    return(
        <form>
            <label>ID:</label>
            <input onChange={handleChange} name="_id" value={job._id} placeholder="Id"/>
            
            <label>Title:</label>
            <input onChange={handleChange} name="title" value={job.title} placeholder="Title"/>

            <label>City:</label>
            <input onChange={handleChange} name="city" value={job.city} placeholder="City"/>

            <label>Employer:</label>
            <input onChange={handleChange} name="employer" value={job.employer} placeholder="Employer"/>

            <label>Requirements:</label>
            <input onChange={handleChangeArray} name="requirements" value={job.requirements} placeholder="Requirements"/>

            <label>Tasks:</label>
            <input onChange={handleChangeArray} name="tasks" value={job.tasks} placeholder="Tasks"/>
            <Link to="/">
                <button type="submit" onClick = {updateJob}>
                    Submit
                </button> 
            </Link>
        </form>
    );
}

export default Update;