

function Header(){
    return(
        
        <nav className="header">
            <h1 className="title"><a  href="/home">LuxeWatch</a></h1>
            
            <div className="rightplace">
                <a className="btn" href="/about">About</a>
                <a className="btn" href="/products">Products</a>
                <a className="btn" href="/contact">Contact</a>
                <a className="btn" href="/account">Account</a>
                
            </div>
            <div className="menu"><img src="src\assets\bars-solid.svg"></img></div>
        </nav>
        
    );
}

export default Header