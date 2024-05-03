//import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import PrimerFormulario from './componentes/PrimerFormulario';

import MostrarTablas from './componentes/MostrarTablas';
import Usuarios from './componentes/index';
// import axios from 'axios';
// import { Button } from 'react-bootstrap';

function App() {
  // const [personaNombre, setPersona] = useState("Nombre");

  // function click(){
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //   .then (response =>{
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     console.error('Error fetching data: ', error);
  //   });

  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
        //          className="App-link"
        //          href="https://reactjs.org"
        //          target="_blank"
        //          rel="noopener noreferrer"
        >
          {/* Learn React */}
        </a>
        {/* <PrimerFormulario personaNombre={personaNombre} /> */}

      </header>
      <br />
      <div className="FormularioUsuario">
        {/* <Button onClick={click}>Imprimir en consola</Button> */}
        {/* <MostrarTablas /> */}
        <Usuarios />
        {/* <Prueba /> */}

      </div>

    </div>
  );
}

export default App;
