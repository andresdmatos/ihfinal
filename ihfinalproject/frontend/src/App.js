import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Training from "./components/Training";
import Navbar from "./components/Navbar";
import Store from "./components/Store";

function App() {
  return (
    <div className="App">
      <Navbar />
      





      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route path="/Training" component={Training} />
        <Route exact path="/Store" component={Store}/>
      </Switch>
    </div>
  );
}

export default App;
