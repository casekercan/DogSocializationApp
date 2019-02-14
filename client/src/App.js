import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Home from "./pages/Home";
import Dog from "./pages/Dog";
import Doglist from "./pages/Doglist";
import Nomatch from "./pages/Nomatch";
import Staff from "./pages/Staff";
import StaffList from "./pages/StaffList";
import Signup from './components/sign-up'
import LoginForm from './components/login-form'
import API from "./utils/API";

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      email: null
    }

    this.getStaff = this.getStaff.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateStaff = this.updateStaff.bind(this)
  }

  componentDidMount() {
    this.getStaff()
  }

  updateStaff(staffObject) {
    this.setState(staffObject)
  }

  getStaff() {
    API.getstaff().then(res => {
      console.log("Get Staff Response: ")
      console.log(res.data)
      if (res.data.staff) {
        console.log("Get Staff: there is a staff saved in the server session")
        this.setState({
          loggedIn: true,
          email: res.data.staff.email
        })
      } else {
        console.log("Get staff: no staff");
        this.setState({
          loggedIn: false,
          email: null
        })
      }
    })
  }

  render() {
    return (

      <Router>
        <div>
          <Signup />
          <Jumbotron />
          <Nav />
          <Switch>
            <Route path="/login" render={() => <LoginForm updateStaff={this.updateStaff} />} />
            <Route path="/signup" render={() => <Signup signup={this.signup} />} />
            <Route exact path="/" component={Home} />
            <Route exact path="/dog/:id" component={Dog} />
            <Route exact path="/doglist" component={Doglist} />
            <Route exact path="/stafflist" component={StaffList} />
            <Route exact path="/staff/:id" component={Staff} />
            <Route component={Nomatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
