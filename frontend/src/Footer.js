import React from 'react';

const Footer = (props) => {
    return (
  <footer class="footer-area">
  <div class="footer-widget section-padding">
      <div class="container">
          <div class="row">
              <div class="col-md-4">
                  <div class="single-widget single-widget1">
                      <a href="index.html"><img src={props.logo} width="182 px" height="53 px" alt=""/></a>
                      <p class="mt-3">Which morning fourth great won't is to fly bearing man. Called unto shall seed, deep, herb set seed land divide after over first creeping. First creature set upon stars deep male gathered said she'd an image spirit our</p>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="single-widget single-widget2 my-5 my-md-0">
                      <h5 class="mb-4">contact us</h5>
                      <div class="d-flex">
                          <div class="into-icon">
                              <i class="fa fa-map-marker"></i>
                          </div>
                          <div class="info-text">
                              <p>1234 Some St San Francisco, CA 94102, US 1.800.123.4567 </p>
                          </div>
                      </div>
                      <div class="d-flex">
                          <div class="into-icon">
                              <i class="fa fa-phone"></i>
                          </div>
                          <div class="info-text">
                              <p>(123) 456 78 90</p>
                          </div>
                      </div>
                      <div class="d-flex">
                          <div class="into-icon">
                              <i class="fa fa-envelope-o"></i>
                          </div>
                          <div class="info-text">
                              <p>support@axiomthemes.com</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="single-widget single-widget3">
                      <h5 class="mb-4">opening hours</h5>
                      <p>Monday ...................... Closed</p>
                      <p>Tue-Fri .............. 10 am - 12 pm</p>
                      <p>Sat-Sun ............... 8 am - 11 pm</p>
                      <p>Holidays ............. 10 am - 12 pm</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  </footer>
  )
  }

export default Footer;