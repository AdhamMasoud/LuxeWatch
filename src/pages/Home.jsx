import Cards from "../components/Cards.jsx"
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import Intro from "../components/intro.jsx";
import Featured from "../Data/Featured.js";
import Card from "../components/Card";


function Home() {
  const fcards = Featured.map(card => {
    return <Card name = {card.name} price = {card.price} image ={card.image} key = {card.id}/>
})
  
  return (
    <>
    <Header/>
    <Intro/>
    <h2 className="start">Featured Products</h2>
    <div className="Featured">
      {fcards}
    </div>
    
    <Footer/>
    </>
  );
}

export default Home