import React from 'react';
import {BrowserRouter as Router ,Switch}from "react-router-dom";
import LayoutRoute from './LayoutRoute';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import MenuScreen from './screens/MenuScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <LayoutRoute path="/" component={HomeScreen} exact={true}/>
          <LayoutRoute path="/about" component={AboutScreen} exact={true}/>
          <LayoutRoute path="/menu" component={MenuScreen} exact={true}/>
          <LayoutRoute path="/register" component={RegisterScreen} exact={true}/>
          <LayoutRoute path="/login" component={LoginScreen} exact={true}/>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
