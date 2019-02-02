import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Home from "./pages/Home";
import Dog from "./pages/Dog";
import Doglist from "./pages/Doglist";
import Nomatch from "./pages/Nomatch";
import Staff from "./pages/Staff";
import StaffList from "./pages/StaffList";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div>
        <Jumbotron />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dog/:id" component={Dog} />
          <Route exact path="/doglist" component={Doglist} />
          <Route exact path="/stafflist" component={StaffList} />
          <Route exact path="/staff/:id" component={Staff} />
          <Route exact path="/login" component={Login} />
          <Route component={Nomatch} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
