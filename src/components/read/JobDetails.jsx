import React from "react"

function JobDetails(props){
    console.log(props)
    const [jobItems] = props.data.filter(function(dataItem){
        return dataItem._id === props.match.params._id
    })
    
    return (
        <div>
            <h1> {jobItems.title} </h1>
            <h2>{jobItems.city}</h2>
            <h3>{jobItems.employer}</h3>
            <h2> Requirements </h2>
            <ul>
                {jobItems.requirements.map(requirement => <li>{requirement}</li>)}
            </ul>

            <h2> Tasks </h2>
            <ul>
                {jobItems.tasks.map(task => <li>{task}</li>)}
            </ul>
        </div>
    )
}

export default JobDetails;