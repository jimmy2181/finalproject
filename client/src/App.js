import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Stocks from "./pages/Stocks";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Stocks} />
          <Route exact path="/stocks" component={Stocks} />
          <Route exact path="/stocks/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
