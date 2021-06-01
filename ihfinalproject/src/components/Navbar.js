import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import Training from "./Training";
import Home from "./Home";

function Navbar(props) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          Make Me Pro
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link active" aria-current="page" to="/Home">
                Home
              </Link>
              <Link class="nav-link" to="/Features">
                Features
              </Link>
              <Link class="nav-link" to="/Pricing">
                Pricing
              </Link>
              <Link class="nav-link" to="/Training">
                Training
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

<Switch>
  <Route exact path="/Home" component={Home} />
  <Route path="/Training" component={Training} />
</Switch>;
export default Navbar;
