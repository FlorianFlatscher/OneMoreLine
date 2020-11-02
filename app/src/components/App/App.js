import './App.css';
import { Button, Container } from 'semantic-ui-react'
import {NavigationBar} from "../NavigationBar/NavigationBar";
import {SignUp} from "../SignUp/SignUp";

function App() {
  return (
    <div className="App">

        <NavigationBar/>

        <Container><SignUp></SignUp></Container>
    </div>
  );
}

export default App;
