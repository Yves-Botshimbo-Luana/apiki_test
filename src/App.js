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
        <ul style = {{listStyleType: "none", margin:0, padding: 0}}>
          {contatos.map(contato => (
            <nav>
            <li key = {contatos._id}>
            <p>Imagem destacada: {contatos.imagemdestacada}</p>
            <p>Titulo: {contatos.titulo}</p>
            <p>Link para postagem: {contatos.linkparapostagem}</p>
            </li>
            </nav>

          ))}

        </ul>
        

      </div>
    );
  };
};

export default App;
