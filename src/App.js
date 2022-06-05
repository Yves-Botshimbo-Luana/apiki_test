import React, { Component } from 'react';
import api from './api';

class App extends Component{
  state= {
    contatos: []
  }
  async componentDidMount(){
    const response = await api.get(''); 

    console.log(response.data);

    this.setState({ contatos: response.data});
  }
  render (){

    const { contatos } = this.state;

    return(
      <div>
        <h1>Lista dos contatos</h1>
        
      

      </div>

    );
  };
};

export default App;
