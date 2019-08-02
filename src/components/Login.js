import React, {Component} from 'react';
import axios from 'axios';


export default class Login extends Component {
    constructor() {
        super();

        this.state = {
            loggedIn: ""
        };
    }



    loginUser = (event) => {

        
        event.preventDefault();
        let newItem = {
            username: event.target[0].value,
            password: event.target[1].value,
            
        }

        axios
            .get("http://localhost:5000/user/name/" + newItem.username)
            .then(response => {
                this.setState({
                    loggedIn: "You have successfully logged in"
                })
               
              
            }).catch(err => console.log(err))
    }



    render() {

        return (
            <div>
                <h4>Login</h4>
                <form onSubmit={this.loginUser}>

                    <input id="username" type="text" placeholder="username"></input>
                    <br></br>

                    <input id="password" type="text" placeholder="password"></input>
                    <br></br>
                    
                    <button type="submit" >Login</button>
                    <p style={{color: 'green'}}>{this.state.loggedIn}</p>
                </form>
            </div>
        )
    }

}