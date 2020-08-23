import React from 'react'
import data from "../../../data/data"
import TableRow from './TableRow';

function Table(){
    return (
        <table>
            <thead>
                <tr>
                    <th>Job Title</th>
                    <th>Location</th>
                    <th>Employer</th>
                </tr>
            </thead>

            <tbody>
                {
                    data.map(items =>{
                        return (
                            <TableRow
                                key = {items._id}
                                _id = {items._id}
                                title = {items.title}
                                location = {items.city}
                                employer = {items.employer} 
                        />)
                    })
                }
            </tbody>
        </table>
    )
}

export default Table; 