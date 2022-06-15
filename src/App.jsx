import React from 'react'
import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {
const nome = 'Maria' 
  
return (
  <div className="App">
  <h1>Testando CSS</h1>
    <SayMyName nome="Matheus" />
    <SayMyName nome="João" />
    <SayMyName nome={nome}
      <Pessoa
        nome="Alberto"
        idade="40"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
        />
  </div>
  )      
}

export default App;