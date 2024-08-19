import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import './Contact.css'


function Contact() {
    
    return (
        <>
        <Header/>
            <h2 className="ctitle">Contact Us</h2>
            <div className="img1">
                
                <div className="cinfo">
                    <input className="Fname" placeholder="Your Name"></input>
                    <input className="Email1" placeholder="Your Email"></input>
                    <input className="Cmsg" placeholder="Your Message"></input>
                    <button className="subc">Submit</button>
                </div>
                <img className="background" src="/images/Luxe Watch1.png"></img>
            </div>
        <Footer/>
        </>
    );
  }

export default Contact