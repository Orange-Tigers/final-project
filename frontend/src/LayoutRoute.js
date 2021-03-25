import {useContext, useEffect} from 'react'
import {Route} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer';
import AppContext from './AppContext'

  const LayoutRoute =(props) => {
  const [globalState, setGlobalState] = useContext(AppContext);
  

  let links; 
  if(globalState.loggedIn === true)
      {
        links=
          [{'path':'/', 'label':'Home'},
          {'path':'/about', 'label':'About'},
          {'path':'/menu', 'label':'Menu'}, 
          {'path': '/logout', 'label':'Logout'}]
      }
      else{
        links=
          [{'path':'/', 'label':'Home'},
          {'path':'/about', 'label':'About'},
          {'path':'/menu', 'label':'Menu'}, 
          {'path':'/register', 'label':'Register'},
          {'path':'/login', 'label':'Login'}]
      }   
  useEffect(() => {navUpdate()}, [globalState.loggedIn])
  const navUpdate=() => {
      if(globalState.loggedIn === true)
      {
        links=
          [{'path':'/', 'label':'Home'},
          {'path':'/about', 'label':'About'},
          {'path':'/menu', 'label':'Menu'}, 
          {'path': '/logout', 'label':'Logout'}]
      }
      else{
        links=
          [{'path':'/', 'label':'Home'},
          {'path':'/about', 'label':'About'},
          {'path':'/menu', 'label':'Menu'}, 
          {'path':'/register', 'label':'Register'},
          {'path':'/login', 'label':'Login'}]

      }

    }
    
      return(
        <div>
            <Header logo={"assets/images/logo/logo.png"} 
            links={links}/>
            <Route path={props.path} exact={props.exact} component={props.component}/>
            <Footer logo={"assets/images/logo/logo2.png"}/>
        </div>
      )

  }
  export default LayoutRoute