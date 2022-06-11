import React, { Component } from 'react';
import api from './api';

class App extends Component{
  state= {
    contatos: []
  }
  async componentDidMount(){
    const response = await api.get(''); 

    //console.log(response.data);

    this.setState({ contatos: response.data});
  }
  render (){

    const { contatos } = this.state;

    console.log(contatos);

    return(
      <div>
        <h1>Lista dos contatos</h1>
        <ul style = {{listStyleType: "none", margin:0, padding: 0, width: 1200, height: 630 }}>
          {contatos.map(contato => (
            
            <li key = {contato._embedded}>
            <h3>Imagem destacada: {contato.source_url}</h3>
            <p>Número do Candidato: {contato.id}</p>
            <p>Titulo: {contato.slug}</p>
            <p>Link para postagem: {contato.link}</p>
            
            </li>
          ))}
        </ul>
      </div>
    );
  };
};

export default App;
