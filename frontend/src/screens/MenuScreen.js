
import Menu from '../components/Menu';
const MenuScreen = () =>{

    const menuImages = [{'image':"assets/images/food1.jpg", 'title':'Banana bread with almonds', 'details':'Face together given moveth divided form Of Seasons that fruitful.', 'price':'$14.50'},
    {'image':"assets/images/food2.jpg", 'title':'Garlic Bread', 'details':'Face together given moveth divided form Of Seasons that fruitful.', 'price':'$14.50'},
    {'image':"assets/images/food3.jpg", 'title':'Bread with nuts and fruits', 'details':'Face together given moveth divided form Of Seasons that fruitful.', 'price':'$14.50'},
    {'image':"assets/images/food4.jpg", 'title':'Olive Bread', 'details':'Face together given moveth divided form Of Seasons that fruitful.', 'price':'$14.50'},
    {'image':"assets/images/food5.jpg", 'title':'Vegan bread with oats', 'details':'Face together given moveth divided form Of Seasons that fruitful.', 'price':'$14.50'},
    {'image':"assets/images/food6.jpg", 'title':'Rosemary Bread', 'details':'Face together given moveth divided form Of Seasons that fruitful.', 'price':'$14.50'}]
    
    return(
            <div>
                <div>
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
                        {
                            menuImages.map(
                            (arrElement)=> {
                                return <div class="col-md-4 col-sm-6"> {<Menu image = {arrElement.image} title= {arrElement.title} details ={arrElement.details} price = {arrElement.price} />} </div>
                            }
                            )
                        }
                        </div>
                        </div>
                    </section>
                </div>
            </div>
        )
}
export default MenuScreen