import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./AuthProvider/AuthProvider";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import LogIn from "./Pages/LogIn/LogIn/LogIn";
import PrivetRoute from "./Pages/LogIn/PrivetRoute/PrivetRoute";
import Register from "./Pages/LogIn/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <PrivetRoute exact path='/appointment'>
              <Appointment></Appointment>
            </PrivetRoute>
            <PrivetRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivetRoute>
            <Route exact path='/about'>
              <About></About>
            </Route>
            <Route exact path='/login'>
              <LogIn></LogIn>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
