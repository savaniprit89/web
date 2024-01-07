//alert("sdn")

//why alag js file- readablity,modularity(alag tudaka) , browser caching(less load time next time)
//window object represent open window in browser . it is browser obj created by browser not js& global object with properties and methods

//dom document object mode
//window->document-html-body,head
//when web page loaded ,dom is created
console.log(document.body)
console.log(document.body.childNodes[1])

document.body.style.backgroundColor="green"
//document.body.h1.innerText="nn"

/*

let h1=documetn.getElementById("myid")

documetn.getElementByClassName("myid")
documetn.getElementByTagName("p")


//query slector
document.querySelector("id/class/tag")  //return first elemt
document.querySelectorAll("as above")  //nodelist


property
.tagName()  return tag for elemt
.innerText()  return text content of elemt
.innnerHTML()  return plain text or html content in elemt

//firstchild,lastchild


let dic=queryselector("div")
console.log(div.innerText())
*/



//getAttribute(attr)
//seAttribute(attr,vaule)

let div=document.querySelector('div')
//let value=div.getAttribute(id)
//div.setAttribute('class','123')

div.style.backgroundColor('yellow')
div.style.fontSize("34px")


///insert elemetn
/*

node.append(el)  //enside at last
node.prepend(el)//inside at start
node.befor(El)//outside add before node
node.after(E)//outside after node
node.remove()  //remove node



let btn =document.createElement("button")
btn.innerText("click")
div.append(btn)

*/



//events


//mouse(onclick,mouseover) event,keyboar,form event

Node.event=()=>{

}


Bbtn.onclick=(e)=>{

    //e.target  //e.value
}


//event clistener

Node.addEventListener(event, callback)
Node.addEventListener("clcik",()=>{
    
})








//   js object have special property prototype  ,,,if obj and prototype have same method then object method will be used















///classes and object

const student={
    name:"sdsd",
    afe:34,
    printmarks:function(){
        console.log(this.age)
    },
    printmarks1 (){
console.log("sfmds")
    }
}
//be rite define kari sakvi
console.log(student.printmarks)


class myclass{

    constructor(brand){
this.brand=brand;
    }
    mymethod(brand){
this.brandname="sdns"
    }
}

let myobj=new myclass()


//iheriatance

class child extends myclass{
constructor(brand){
    super(brand)
}
mymethod1(){
    super.mymethod()
}
}

//if both have same method then child method will be used
//super used t callparent constructor











// async await >> promise chains  >> callback


/*
synchronous:particular sequence code runs. each instruction wait to complete previous one
asynchronous:-  next instruction allow to execute

*/

function hello(){

}

setTimeout(hello,2000)  //millisecond
setTimeout(()=>{

},2000)


//callback is function passed as argument to another function


function sum(a,b){

      

}

function calculator(a,b,sumCallback){
    sumCallback(a,b)
}

calculator(5,3,sum);
calculator(1,2,(a,b)=>{
    console.log(a+b)
})
//without ()  pass becaues () means execution



// callback hell   // nested callback

function getdata(id){

        return

}

getdata(1,()=>{
    getdata(2,()=>{

    })

}
)

//promises ---> it is object in js,solution to call back hell.    eventual completion of task
// let promise=new Promise((resolve,reject)=>{})     //function with 2 handler and these are provided by js

//order-------cancel or deliver     (promise)--- reject(cancel) or resolve(deliver)

let promise=new Promise((resolve,reject)=>{

})

console.log(promise)  //it will print pending state


//three state pending,reject,resolve

let promise1=new Promise((resolve,reject)=>{
resolve("dfdnf")
}) //now print resolver


let promise2=new Promise((resolve,reject)=>{
reject("sndsd")
}) /// rejected state


function getdata(data){
    return new Promise((resolve,reject)=>{
    
        if(data==1){
resolve("success")}else{
    reject("sndk")
}
    })
}




//getdata will give promise with state



promise.then((res)=>{

}) //promise fullfill then exceute
promise.catch(()=>{

})// promise reject then execute










//async await   //return promise

//awai pause execution till promise setled
function data1(){

}
async function  data2(){
    await data2()
}












//fetch api       //uses reuest and response obj

let promisee = fetch("https://.com");


const getfacts = async ()=>{
    let response= await fetch(url)
let data=await response.json()

}




//ajax---- asynhcronous js and xml   //old requs formta
//json javascript object notation








//destructing
//both for array and objet


let person={
    fname:'sbdk',
lname:"sndl"
}


let { firstname,lastname}=person;
let { fname:fnamenew,lname:lnamenew}=person;

const ar=[1,2,3]
let [x,y,z]=ar



const arr=['a','b','c','d']

const [x1, ...y1]=arr

console.log(x1) //a
console.log(y1)  //b,c,d 



let person1={
    fname:'sbdk',
lname:"sndl",
age:78
}

let { fname,...rest}=person1

console.log(fname)
console.log(rest)  //lname and age




try{

}catch(e){

}finally{

}



//rest
function add(a,b, ...res){

}//1,2,  and other are res

add(1,2,3,4,5)




//closure

var sum =
function (a){
var c=1;
return function(b){
    return a+b+c;
}
}

var store=sum(2)  
console.log(store(3))   //here c value is memorized and it is closure



companies=[
    {name:"sdnskd"},
    {name:"sdnksd"}
]

companies.forEach((co,index) => {
    console.log("sdjs")
});

companies.forEach(function(){

})

const age=companies.filter(function(){

})


/*

<div>
<button>
<div>

hve div ma event listener add
toh button ma click toh pn e call thase
aane event bubbling
*/

/*
currying function

function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
let a1=add(2)
let a2=a1(3);
let a3=a2(1)


let res=add(2)(4)(3)   //this is above same

*/




//memoiation

//saving previous input to something in cache

function add(a){
    return a**2;
}

const memoiazie=(fun)=>{
    let cache={}
    return function(...args){
        let n=args[0];
        if(n in cache){
            return cache[n]
        }else{
            let result=fun()
            cache[n]=result;
            return result;
        }
    }
}

const a=memoiazie(cal)
console.log(a(5))








//debouncing  
//search ma apade ek key press kari pachi function call nai pn thoduk tyoe thai jai pachi call thodik second pachi based on user requirement

function getdata(){

}
function mydebounce(call,delay){
    let timer;
    return function(...args){
        if(timer){
            clearTimeout(timer)
        }
        setTimeout(()=>{
call()
        },delay)
    }
}
const betterfunction=mydebounce(getdata,1000);
//onclick ma betterfunction hase button na ui ma



//throtling    ek var click pachi required second mate e disable thai jase atle user ene click nai kari sake
const trottle=(fn,d)=>{
    return function(...args){
        document.getElementsByName("k").disabled=true;
        setTimeout(()=>{
            fn()
        },d)
    }
}

const newfun=trottle(()=>{
    document.getElementsByClassName().disabled=false
},5000)




//concat arr1 to arr2 then push use
//duplicate remove mate set use



//cors
//same domain
//cross domain thi  kyk access then direct access not 



// all info in header
// a.com to b.com
//access control allow orgin in b.com
//in that we can mention a.com or *(for all)  and also specify which method allowed(get,post)
