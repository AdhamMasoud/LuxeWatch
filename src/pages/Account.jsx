import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import './Account.css'
import { Link } from "react-router-dom";

function Account() {
    
    return (
        <>
        <Header/>
            <h2 className="ctitle2">Account</h2>
                <div className="img">
                <img className="imgacc" src="/images/pexels-marius-mann-772581-1697218.jpg"></img>
                    <div className="cinfo2">
                        <input className="Fname" placeholder="Email"></input>
                        <input  type="password" className="Email" placeholder="Password"></input><br></br>
                        <input type="checkbox" id="check" className="rmbrme"></input>
                        <label className="checkL" for="check">Remember Me</label>
                        <a className="psword">Forget Password?</a>
                        <button className="suba">Login</button><br></br>
                        <label className="sign">Don't have an account?</label>
                        <Link to={'/signup'}>
                        <a className="signa">Sign Up</a>
                        </Link>

                    </div>
                    
                </div>
        <Footer/>
        </>
    );
  }

export default Account