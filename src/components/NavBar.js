import React from 'react';
import { Link } from "react-router-dom";

export default function NavBar(props) {
    return (
        <div>
            
            <button>
                <Link to="/Register">Register</Link>
            </button>
            <button>
                <Link to="/Login">Login</Link>
            </button>
            <button>
                <Link to="/UserList">Show All Users</Link>
            </button>    
                
            <br></br>

        </div>
    );
}