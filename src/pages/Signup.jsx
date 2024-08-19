import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import './Signup.css'

function Account() {
    
    return (
        <>
        <Header/>
            <h2 className="ctitle2">Sign up</h2>
                <div className="img">
                
                    <div className="cinfo3">
                        <input className="Fname" placeholder="Name"></input>
                        <input className="Fname" placeholder="Email"></input>
                        <input  type="password" className="Email" placeholder="Password"></input>
                        <input type="checkbox" id="check" className="rmbrme"></input>
                        <label className="checkL" for="check">Remember Me</label><br></br>
                        <button className="suba">Sign up</button><br></br>

                    </div>
                <img className="imgacc1" src="images/pexels-nandkumar-patel-1333170-3083461.jpg"></img>
                </div>
        <Footer/>
        </>
    );
  }

  export default Account