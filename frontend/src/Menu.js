import React from 'react';

const Menu = (props) => {
    return (
  <section class="food-area section-padding">
          <div class="container">
              <div class="row">
                  <div class="col-md-5">
                      <div class="section-top">
                          <h3><span class="style-change">we serve</span> <br/>delicious bakeries</h3>
                          <p class="pt-3">They're fill divide i their yielding our after have him fish on there for greater man moveth, moved Won't together isn't for fly divide mids fish firmament on net.</p>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-md-4 col-sm-6">
                      <div class="single-food">
                          <div class="food-img">
                              <img src={props.links[0].image} class="img-fluid" alt=""/>
                          </div>
                          <div class="food-content">
                              <div class="d-flex justify-content-between">
                                  <h5>{props.links[0].title}</h5>
                                  <span class="style-change">{props.links[0].price}</span>
                              </div>
                              <p class="pt-3">{props.links[0].details}</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4 col-sm-6">
                      <div class="single-food mt-5 mt-sm-0">
                          <div class="food-img">
                              <img src={props.links[1].image} class="img-fluid" alt=""/>
                          </div>
                          <div class="food-content">
                              <div class="d-flex justify-content-between">
                                  <h5>{props.links[1].title}</h5>
                                  <span class="style-change">{props.links[1].price}</span>
                              </div>
                              <p class="pt-3">{props.links[1].details}</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4 col-sm-6">
                      <div class="single-food mt-5 mt-sm-0">
                          <div class="food-img">
                              <img src={props.links[2].image} class="img-fluid" alt=""/>
                          </div>
                          <div class="food-content">
                              <div class="d-flex justify-content-between">
                                  <h5>{props.links[2].title}</h5>
                                  <span class="style-change">{props.links[2].price}</span>
                              </div>
                              <p class="pt-3">{props.links[2].details}</p>
                          </div>
                      </div>
                  </div><div class="col-md-4 col-sm-6">
                      <div class="single-food mt-5 mt-sm-0">
                          <div class="food-img">
                              <img src={props.links[3].image} class="img-fluid" alt=""/>
                          </div>
                          <div class="food-content">
                              <div class="d-flex justify-content-between">
                                  <h5>{props.links[3].title}</h5>
                                  <span class="style-change">{props.links[3].price}</span>
                              </div>
                              <p class="pt-3">{props.links[3].details}</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4 col-sm-6">
                      <div class="single-food mt-5 mt-sm-0">
                          <div class="food-img">
                              <img src={props.links[4].image} class="img-fluid" alt=""/>
                          </div>
                          <div class="food-content">
                              <div class="d-flex justify-content-between">
                                  <h5>{props.links[4].title}</h5>
                                  <span class="style-change">{props.links[4].price}</span>
                              </div>
                              <p class="pt-3">{props.links[4].details}</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4 col-sm-6">
                      <div class="single-food mt-5 mt-sm-0">
                          <div class="food-img">
                              <img src={props.links[5].image} class="img-fluid" alt=""/>
                          </div>
                          <div class="food-content">
                              <div class="d-flex justify-content-between">
                                  <h5>{props.links[5].title}</h5>
                                  <span class="style-change">{props.links[5].price}</span>
                              </div>
                              <p class="pt-3">{props.links[5].details}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      )
  }

export default Menu;