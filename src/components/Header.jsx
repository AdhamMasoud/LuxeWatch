import { Link } from "react-router-dom";

function Header(){
    return(
        
        <nav className="header">
            <Link to={'/'}>
                <h1 className="title"><a >LuxeWatch</a></h1>
            </Link>

            
            <div className="rightplace">
                <Link to={'/about'}>
                    <a className="btn" >About</a>
                </Link>
                <Link to={'/products'}>
                    <a className="btn" >Products</a>
                </Link>
                <Link to={'/contact'}>
                <a className="btn" >Contact</a>
                </Link>
                <Link to={'/account'}>
                <a className="btn" >Account</a>
                </Link>

                
            </div>
            <div className="menu"><img src="src\assets\bars-solid.svg"></img></div>
        </nav>
        
    );
}

export default Header