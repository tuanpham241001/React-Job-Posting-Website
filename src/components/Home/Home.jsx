import React from "react"
import Table from "./Table/Table.jsx"

function Home(props){
    return (
        <div>
            <Table 
                data = {props.data}
            />
        </div>
    )
}

export default Home;