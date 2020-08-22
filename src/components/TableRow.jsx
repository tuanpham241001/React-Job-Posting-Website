import React from 'react'

function TableRow(props){
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.location}</td>
            <td>{props.employer}</td>
        </tr>
    )
}

export default TableRow; 