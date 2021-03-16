import React from 'react';

const Header = (props) => {
    return (
    
      <header class="header-area">
          <div class="container">
              <div class="row">
                  <div class="col-lg-2">
                      <div class="logo-area">
                          <a href="index.html"><img src={props.logo} width="159 px" height="49 px" alt="logo" /></a>
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
                              <li class="active"><a href={props.links[0].path}>{props.links[0].label}</a></li>
                              <li><a href={props.links[1].path}>
                                     {props.links[1].label}
                                  </a></li>
                              <li><a href={props.links[2].path}>
                                     {props.links[2].label}
                                  </a></li>
                          
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </header>
   
    )
  }

  export default Header;