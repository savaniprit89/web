import React,{useState} from "react";
import Card from "./card";
import contacts from "./contacs";
//import Avatar from "./Avatar";

/*  version-1   function App(){
    return(
        <div>
            <h1 className="heading"> my contacts</h1>
            <Avatar img={contacts[0].img}/>
            <Card name={contacts[0].name} img={contacts[0].img}  tel={contacts[0].tel} email={contacts[0].email} />
            <Card name={contacts[1].name} img={contacts[1].img}  tel={contacts[1].tel} email={contacts[2].email} />
            <Card name={contacts[2].name} img={contacts[2].img}  tel={contacts[2].tel} email={contacts[2].email} />
        </div>
    );
}*/

///data for cars come from contact and how card is design come from cards

//version-2 using map component
//map component--loops through array of contacts and call every time for each item in contacts createcard
/*
final code for cobtacts apps card

function createCard(contact){
    return <Card id={contact.id} key={contact.id} name={contact.name} img={contact.img} tel={contact.tel} email={contact.email} />
}
//each component should have unique id which is id in above and given name key now here key is not passed anywhere for using or printing we have send other paramter to send this is id{contacts.id}
function App(){


    return(
        <div>
            <h1 className="heading"> my contacts</h1>
            {contacts.map(createCard)}
          
            </div>
    );
}

*/
/*
final code increase after click
function App(){
 
    
    //const state=useState(123)///paramter is initial value of state
    const [count,setcount]= useState(0);
    function increase(){
        setcount(count+1);//increase function update and now call setcount and setcount makes value to new value 
    }//hooks ex


    return(
        <div>
            
            <h1>{count}</h1>
            <button onClick={increase}></button>
        
            </div>
    );
}



*/
function createCard(contact){
    return <Card id={contact.id} key={contact.id} name={contact.name} img={contact.img} tel={contact.tel} email={contact.email} />
}


const now=new Date().toLocaleTimeString()//hooks
function App(){
        setInterval(updatetime,1000)//call function every one second
    const [ time ,settime]= useState(now)

    function updatetime(){
        const newtime=new Date().toLocaleTimeString();
        settime(newtime)
    }
  

    return(
        <div>
            <h1 className="heading"> my contacts</h1>
            {contacts.map(createCard)}
            
            <h1>{time}</h1>
            <button onClick={updatetime}>get time</button>
            </div>
    );
}

export default App;


//state output is array   and initial value is state[0]
//whenever state value if value also reflect in output itself
//destructuring  const[red,green,blue]={9,132,227}  red-9,green-132   console.log(green)//132
//destructuring name should be unique

/*const anmimals{
    {name:"cat" feeding{
        food:3
    }}
{name:"dog"}
}

const [cat,dog]=animals;
var cat=animals[0]//same as up

here we destructure array
*/


/*

destructuring Object
const {name,sound}=cat;
//cat.name and cat .sound
//during this it should match in object name in animals

const {name:catname,sound:catsound}=cat;//alternative name
catname and cat sound

default values
const {name:"fullfy",sound:"puff"}=cat;//whene value is absent in object it give default name then


///object inside object nesting
const {name,sound,feeding:{food}}=cat;
console.log(food)//3
*/
