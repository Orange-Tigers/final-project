import {Link} from "react-router-dom";


const Header = (props) => {
    return (
      <header class="header-area">
          <div class="container">
              <div class="row">
                  <div class="col-lg-2">
                      <div class="logo-area">
                          <a href="#"><img src={props.logo} width="159 px" height="49 px" alt="logo" /></a>
                      </div>
                  </div>
                  <div class="col-lg-10">
                      <div class="custom-navbar">
                          <span></span>
                          <span></span>
                          <span></span>
                      </div>  
                      <div class="main-menu">
                          <ul>
                            {
                                props.links.map( 
                                    (link) =>
                                        (<li><Link to={link.path}>{link.label}</Link></li>)   
                                )
                            }
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </header>
   
    )
  }

  export default Header;