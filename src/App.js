import React, {Component} from 'react';
import axios from 'axios';

import './App.css';
import Routes from './components/Routes';

class App extends Component {
  constructor() {
    super();

    this.state={
      data: []
    }
  }

    componentDidMount() {
        this.getAllUsers();
    }

    getAllUsers = () => {
        axios
        .get('http://localhost:5000/user/all')
        .then(response => {
            
            this.setState({
                data: response.data
            })
            console.log(response);
        })
    }

  render() {
    return (
      <div className="App">
        <Routes getAllUsers={this.state.getAllUsers} data={this.state.data}/>
      </div>
    );
  }

}

export default App;
