import React, {useState} from "react"

function Form(){
    
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


    function submitJob(){
        

    }
    
    return(
        <form >
            <input onChange={handleChange} name="ID" value={job._id} placeholder="Id"/>
            <input onChange={handleChange} name="title" value={job.title} placeholder="Title"/>
            <input onChange={handleChange} name="city" value={job.city} placeholder="City"/>
            <input onChange={handleChange} name="employer" value={job.employer} placeholder="Employer"/>
            <input onChange={handleChange} name="requirements" value={job.requirements} placeholder="Requirements"/>
            <input onChange={handleChange} name="tasks" value={job.tasks} placeholder="Tasks"/>
            <button type="submit" onClick={submitJob}>
                Submit
            </button> 
        </form>
    );
}

export default Form