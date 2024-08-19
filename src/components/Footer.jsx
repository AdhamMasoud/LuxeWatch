import { Link } from "react-router-dom";



function Footer(){
    return(
        <footer>
            <div className="footer">
                <div className="allsections">
                    <div className="section">
                        <h4>For Business</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/healthplan">
                            <p>Health Plans</p>

                        </a>
                        <a href="/individual">
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className="section">
                        <h4>Resources</h4>
                        <a href="/resource">
                            <p>Resources center</p>
                        </a>
                        <a href="/resource">
                            <p>Testimonials</p>

                        </a>
                        <a href="/resource">
                            <p>STV</p>
                        </a>
                    </div>
                    <div className="section">
                        <h4>Partners</h4>
                        <a href="/employer">
                            <p>Swing Tech</p>
                        </a>

                    </div>
                    <div className="section">
                        <h4>Company</h4>
                        <Link to={'/about'}>
                        <a>About</a>
                        </Link>

                        <a href="/press">
                            <p>Press</p>

                        </a>
                        <a href="/career">
                            <p>Career</p>
                        </a>
                        <Link to={'/contact'}>
                            <a >Contact</a>
                        </Link>

                        
                    </div>
                    <div className="section">
                        <h4>Social Media</h4>
                        <div className="social">
                            <p><img src="images/facebook-brands-solid (1).svg"></img></p>
                            <p><img src="images/instagram-brands-solid.svg"></img></p>
                            <p><img src="images/linkedin-brands-solid.svg"></img></p>
                            <p><img src="images/x-twitter-brands-solid.svg"></img></p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <p className="copyr">&copy; {new Date().getFullYear()} LuxeWatch. </p>
                <div className="footerend">
                    <a href="/terms"></a>
                    <a></a>
                    <a></a>
                    <a></a>
                </div>

            </div>
                
        </footer>
    );

}
export default Footer