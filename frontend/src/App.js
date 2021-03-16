import React from 'react';

//Header Area  
import Header from './Header';

//Banner Area
import Banner from './Banner';

//Menu Area
import Menu from './Menu';


//Footer Area
import Footer from './Footer';


function App() {
  return (
    <div>
      <Header logo={"assets/images/logo/logo.png"} 
      links={
        [{'path':'/', 'label':'Home'},
        {'path':'/about', 'label':'About'},
        {'path':'/menu', 'label':'Menu'}]
        }/>
    
      <Banner></Banner>

      <Menu links={
        [{'image':"assets/images/food1.jpg", 'title':'Banana bread with almonds', 'details':'Face together given moveth divided form Of Seasons that fruitful.', 'price':'$14.50'},
        {'image':"assets/images/food2.jpg", 'title':'Garlic Bread', 'details':'Face together given moveth divided form Of Seasons that fruitful.', 'price':'$14.50'},
        {'image':"assets/images/food3.jpg", 'title':'Bread with nuts and fruits', 'details':'Face together given moveth divided form Of Seasons that fruitful.', 'price':'$14.50'},
        {'image':"assets/images/food4.jpg", 'title':'Olive Bread', 'details':'Face together given moveth divided form Of Seasons that fruitful.', 'price':'$14.50'},
        {'image':"assets/images/food5.jpg", 'title':'Vegan bread with oats', 'details':'Face together given moveth divided form Of Seasons that fruitful.', 'price':'$14.50'},
        {'image':"assets/images/food6.jpg", 'title':'Rosemary Bread', 'details':'Face together given moveth divided form Of Seasons that fruitful.', 'price':'$14.50'}]
        }/>

      <Footer logo={"assets/images/logo/logo2.png"}/>
</div>
  );
}



export default App;
