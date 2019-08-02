import React, { Component } from 'react';
import axios from 'axios';


export default class Register extends Component {
    constructor() {
        super();

        this.state = {
            error: ""
        };
    }



    registerUser = (event) => {

        event.preventDefault();

        let newItem = {
            username: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value,
            password2: event.target[3].value
        }



        axios
            .post("http://localhost:5000/user/createuser", newItem)
            .then(response => {

                this.setState({
                    error: response.data
                })


            }).catch(err => console.log(err))
    }



    render() {




        return (
            <div>
                <div style={{color: 'red'}}>
                <p>{this.state.error.username}</p>
                <p>{this.state.error.email}</p>
                <p>{this.state.error.password}</p>
                <p>{this.state.error.password2}</p>
                </div>

                <h4>Register</h4>
                <form onSubmit={this.registerUser}>
                    <input id="username" type="text" placeholder="username"></input>
                    <br></br>
                    <input id="email" type="text" placeholder="e.g. example@email.com"></input>
                    <br></br>
                    <input id="password" type="text" placeholder="password"></input>
                    <br></br>
                    <input id="password2" type="text" placeholder="re-type password"></input>
                    <br></br>
                    <button type="submit" >Register</button>
                </form>



            </div>
        )
    }

}