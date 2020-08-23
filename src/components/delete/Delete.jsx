import React, {useState} from "react"
import {Link} from "react-router-dom"

function Delete(props){
    const [deleteID, setDeleteID] = useState("")
    
    function handleChange(events){
        const {value} = events.target;
        setDeleteID(value)
    }
    
    function deleteJob(event){
        props.onDelete(deleteID);
    }

    
    return (
        <div>
            <h1> Delete </h1>
            <form>
            <label>ID</label>
            <input onChange={handleChange} name="_id" value={deleteID} placeholder="Id"/>
            <Link to="/">
                <button type="submit" onClick={deleteJob} >Submit</button>
            </Link>
            </form>
        </div>
    )
}

export default Delete;