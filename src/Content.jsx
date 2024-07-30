

function Content(){


}

export default Content



/*
const food1 = "Orange"
const food2 = "Banana"

return(
    <ul>
        <li>Apple</li>
        <li>{food1}</li>
        <li>{food2.toUpperCase()}</li>
    </ul>
);
*/


/*
const fruits = [{id :1,name: "apple", calories:95},
    {id :2,name:"orange",calories:45},
    {id :3,name:"banana",calories:105},
    {id :4,name:"cocnut",calories:159},
    {id :5,name:"pineapple",calories:37}] // this is a string appleorangebananacocnutpinapple

//fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
//fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
//fruits.sort((a, b) => a.calories - b.calories); // Number of calories LESS TO HIGH
//fruits.sort((a, b) => b.calories - a.calories); // REVERSE Number of calories HIGH TO LESS

// const LowCalFruits = fruits.filter(fruit => fruit.calories <100) // to filter the fruits that are less than 100 cals
// const listItems = LowCalFruits.map(LowCalFruit => <li key={LowCalFruit.id}>{LowCalFruit.name}: &nbsp; {LowCalFruit.calories}</li>); // to filter the fruits that are less than 100 cals

// const HighCalFruits = fruits.filter(fruit => fruit.calories >=100) // to filter the fruits that are more than 100 cals
// const listItems = HighCalFruits.map(HighCalFruit => <li key={HighCalFruit.id}>{HighCalFruit.name}: &nbsp; {HighCalFruit.calories}</li>);// to filter the fruits that are more than 100 cals


const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; {fruit.calories}</li>); // to make it a list





return(<ol>{listItems}</ol>);
*/



/*
const handleClick = () => console.log("OUCH");
const handleClick2 = (name) => console.log(`${name} stop clicking me`);
const handleClickE = (e) => console.log(e)
const handleClickE2 = (e) => e.target.textContent = "OUCH!"
const imageUrl = './src/assets/pexels-nandkumar-patel-1333170-3083461.jpg';
const handleClickI = (e) => e.target.style.display = "none"


return(
    //<button onClick={handleClick}>Click ME</button>
    //<button onClick={() => handleClick2("Adham")}>Click ME</button>
    //<button onClick={(e) => handleClickE2(e)}>Click ME</button>
    <img onClick={handleClickI} src={imageUrl}></img>
);
*/