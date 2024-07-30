

function Card(props){
    return(
        <>
        
        <div id="card">
            
            <div className="Product">
                <img className="pimg" src={props.image}></img>
                <hr></hr>
                <h4>{props.name}</h4>
                <p>{props.price}</p>
            </div>
        </div>
        
        </>

        
    );
}

export default Card