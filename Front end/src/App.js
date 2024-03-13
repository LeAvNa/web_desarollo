import logo from './logo.svg';
import './App.css';
import { Button, Form } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
        >
         Learn React
        </a>
        <Form.Label>texto que quieres</Form.Label>
        <Form.Control></Form.Control>
        <Button variant="primary">Primary</Button>{''}

      </header>
    </div>
  );
}

export default App;
