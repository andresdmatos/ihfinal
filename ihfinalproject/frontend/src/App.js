import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Training from "./components/Training";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route path="/Training" component={Training} />
      </Switch>
    </div>
  );
}

export default App;
