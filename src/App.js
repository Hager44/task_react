import './App.css';
import Navigation from './components/Navigation/navigation';
import Airlines from './components/Airlines/Airlines';
import Category from './components/Category/Category';
import Services from './components/Services/Services';
import HoneymoonSpecials from './components/HoneymoonSpecials/HoneymoonSpecials';
import Sepratir from './components/Sepratir/Sepratir';
import Promotion from './components/Promotion/Promotion';
import Explore from './components/Explore/Explore';
import Client from './components/Clients/Client';
import Footer from './components/Footer/Footer';
import Trips from './components/Trips/Trips';
import Products from './components/Products/Products';
import {
  rect19305,
  ellipse623,
  rect19306,
  ellipse624,
  rect19307,
  ellipse625,
  rect19308,
  ellipse626,
  rect19309,
  ellipse627,
  rect19310,
  ellipse628,
} from './imported_images/importedImages';

function App() {
  const items=[
    {
      countryFlag:<img src={rect19305} style={{maxWidth:'100%'}} alt="r"/>,
      countrySymbol:<img src={ellipse623} alt="ellipse" style={{position: 'absolute', top:'-89px', left:'3px', zIndex:1}}/>,
      days:8,
      people:25,
      city:'Bern',
      country:'Switzerland',
      priceAfter:1000,
      priceBefore:1200,
      text:"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."
    },
    {
      countryFlag:<img src={rect19306} style={{maxWidth:'100%'}} alt="r"/>,
      countrySymbol:<img src={ellipse624} alt="ellipse" style={{position: 'absolute', top:'-89px', left:'3px', zIndex:1}}/>,
      days:8,
      people:30,
      city:'Rio de Janeiro',
      country:'Brazil',
      priceAfter:1223,
      priceBefore:1200,
      text:"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."
    },
    {
      countryFlag:<img src={rect19307} style={{maxWidth:'100%'}} alt="r"/>,
      countrySymbol:<img src={ellipse625} alt="ellipse" style={{position: 'absolute', top:'-89px', left:'3px', zIndex:1}}/>,
      days:8,
      people:155,
      city:'Giza',
      country:'Egypt',
      priceAfter:1200,
      priceBefore:1200,
      text:"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."
    },
    {
      countryFlag:<img src={rect19308} style={{maxWidth:'100%'}} alt="r"/>,
      countrySymbol:<img src={ellipse626} alt="ellipse" style={{position: 'absolute', top:'-89px', left:'10px', zIndex:1}}/>,
      days:8,
      people:25,
      city:'Tokyo',
      country:'Japan',
      priceAfter:1500,
      priceBefore:1200,
      text:"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."
    },
    {
      countryFlag:<img src={rect19309} style={{maxWidth:'100%'}} alt="r"/>,
      countrySymbol:<img src={ellipse627} alt="ellipse" style={{position: 'absolute', top:'-89px', left:'10px', zIndex:1}}/>,
      days:8,
      people:30,
      city:'Riyadh',
      country:'Saudi Arabia',
      priceAfter:1800,
      priceBefore:1200,
      text:"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."
    },
    {
      countryFlag:<img src={rect19310} style={{maxWidth:'100%'}} alt="r"/>,
      countrySymbol:<img src={ellipse628} alt="ellipse" style={{position: 'absolute', top:'-89px', left:'10px', zIndex:1}}/>,
      days:8,
      people:155,
      city:'Paris',
      country:'France',
      priceAfter:2000,
      priceBefore:1200,
      text:"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."
    }
  ];
  return (
    <div>
      <Navigation/>
      <Airlines/>
      <Category/>
      <Services/>
      <HoneymoonSpecials/>
      <Trips/>
      <Sepratir/>
      <Promotion/>
      <Explore/>
      <Products products={items}/>
      <Client/>
      <Footer/>
      
      
      
    </div>
  
  );
}


export default App;
