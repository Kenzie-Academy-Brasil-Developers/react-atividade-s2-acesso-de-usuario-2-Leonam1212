import Customer from "./pages/Customer/index"
import Company from  "./pages/Company"
import { members } from "./pages/Members"
import './App.css';
import {Switch, Route} from "react-router-dom"
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path = "/customer/:id">
            <Customer />
          </Route>
       
          <Route path = "/company/:id">
            <Company />
          </Route>

          <Route path = "/">
            <Home arrayMembers = {members}/>
          </Route>
       
       
        </Switch>
      </header>
    </div>
  );
}

export default App;
