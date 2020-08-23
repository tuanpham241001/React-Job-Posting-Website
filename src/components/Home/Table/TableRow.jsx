import React from 'react'
import {Link} from "react-router-dom"

function TableRow(props){
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.location}</td>
            <td>{props.employer}</td>
            <td>
                <Link to= {`/read/${props._id}`}>More Information</Link>
            </td>
        </tr>
    )
}

export default TableRow; 