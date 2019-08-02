import React from 'react';

import { BrowserRouter as Router, Route} from "react-router-dom";

import NavBar from './NavBar';
import Register from './Register';
import Login from './Login';
import UserList from './UserList';



export default function Routes(props) {
    
    return (
        <div>
             
            <Router>
                <div>

                    <NavBar />

                    
                    <Route path="/Register" render={() => <Register getAllUsers={props.getAllUsers} />} />
                    <Route path="/Login" render={() => <Login data={props.data} />} />
                    <Route path="/UserList" render={() => <UserList getAllUsers={props.getAllUsers} data={props.data} />} />


                </div>

      
            </Router>
        </div>
    )

}