import { Button } from "react-scroll";


function Intro(){
    return(
        <div>
            
            <div className="introP">
                <img className="background" src='images/Luxe Watch1.png'></img>
                <div className="intro">
                    <h1>Timeless Elegance, Every Moment Counted.</h1>
                </div>
                <div className="intro2">
                    <h2>Welcome to our world of precision and style, where every tick marks a moment of elegance and sophistication.</h2>
                </div>
                <Button to="card" spy={true} smooth={true} offset={-180}  className="btn">Explore Now</Button>
                
                
            </div>
            <div className="imgs">
                <img className="imgintro" src="images/pexels-nandkumar-patel-1333170-3083461.jpg"></img>
                <img className="imgintro" src="images/pexels-marius-mann-772581-1697218.jpg"></img>
                <img className="imgintro" src="images/pexels-marius-mann-772581-1697220.jpg"></img>
            </div>
        </div>

    );
}

export default Intro