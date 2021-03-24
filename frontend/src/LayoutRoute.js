import {Route} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer';

  const LayoutRoute =(props) => {
      return(
        <div>
            <Header logo={"assets/images/logo/logo.png"} 
            links={
                [{'path':'/', 'label':'Home'},
                {'path':'/about', 'label':'About'},
                {'path':'/menu', 'label':'Menu'}, 
                {'path':'/register', 'label':'Register'}]
                }/>
            <Route path={props.path} exact={props.exact} component={props.component}/>
            <Footer logo={"assets/images/logo/logo2.png"}/>
        </div>
      )

  }
  export default LayoutRoute