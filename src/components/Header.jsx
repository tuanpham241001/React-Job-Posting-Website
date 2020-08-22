import React from "react"
import {Link} from "react-router-dom";

function Header(){
    return (
        <header>
            <nav>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/create"><li>Create</li></Link>
                    <Link to="/read"><li>Read</li></Link>
                    <Link to="/update"><li>Update</li></Link>
                    <Link to="/delete"><li>Delete</li></Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header