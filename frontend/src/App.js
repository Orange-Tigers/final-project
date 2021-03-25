import React from 'react';
import {BrowserRouter as Router ,Switch}from "react-router-dom";
import {useState, useEffect} from 'react'


import LayoutRoute from './LayoutRoute';
import AppContext from './AppContext';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import MenuScreen from './screens/MenuScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen'

function App() {

  const [globalState, setGlobalState] = useState(
    {
      loggedIn: localStorage.getItem('jwt') ? true : false,
      profile: null
    }
  )
  // useEffect(
  //   () => {
  //     // if there is a token and globalState.profile is null
  //     if( localStorage.getItem('jwt') && globalState.profile === null) {
  //       // fetch GET to get profile details
  //       // fetch(
  //       //   'http://localhost:3001/users/profile',
  //       //   {
  //       //     method: 'GET',
  //       //     headers: {
  //       //       'Authorization': `Bearer ${localStorage.getItem('jwt')}`
  //       //     }
  //       //   }
  //       // )
  //       // .then(
  //       //   (backendResponse) => backendResponse.json()
  //       // )
  //       // .then(
  //       //   (json) => {
  //       //     console.log('user\'s profile', json)
  //       //     // update the globalState.profile
  //       //     setGlobalState(
  //       //       {
  //       //         ...globalState,
  //       //         profile: json
  //       //       }
  //       //     )
  //       //   }
  //       // ).catch(
  //       //   error => console.log(error)
  //       // )
  //     }
  //   },
  //   [ globalState.loggedIn ]
  // )

  return (
    <div>
      <AppContext.Provider value={[globalState, setGlobalState]}>
        <Router>
          <Switch>
            <LayoutRoute path="/" component={HomeScreen} exact={true}/>
            <LayoutRoute path="/about" component={AboutScreen} exact={true}/>
            <LayoutRoute path="/menu" component={MenuScreen} exact={true}/>
            <LayoutRoute path="/register" component={RegisterScreen} exact={true}/>
            <LayoutRoute path="/login" component={LoginScreen} exact={true}/>
          </Switch>
        </Router>
      </AppContext.Provider>
    </div>
  );
}
export default App;
