import Footer from "../components/Footer";
import Header from "../components/Header";
import Card from "../components/Card";
import './Products.css'
import Data from '../Data/Data.js'

function Products(){
    const cards = Data.map(card => {
        return <Card name = {card.name} price = {card.price} image ={card.image} />
    })
    
    
    return(
        <>
        <Header/>
        <div>
            <h2 className="ptitle">All Products</h2>
            <div className="cardsdiv">
                {cards}
            </div>
        </div>
        <Footer/>
        </>

        
    );
}

export default Products