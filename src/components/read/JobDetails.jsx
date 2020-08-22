import React from "react"

function JobDetails(props){
    return (
        <div>
            <h1> {props.title} </h1>
            <h2>{props.city}</h2>
            <h3>{props.employer}</h3>
            <h2> Requirements </h2>
            <ul>
                {props.requirements.map(requirement => <li>{requirement}</li>)}
            </ul>

            <h2> Tasks </h2>
            <ul>
                {props.tasks.map(task => <li>{task}</li>)}
            </ul>
        </div>
    )
}

export default JobDetails;