//synchronous or blocking---LINE BY LINE  
//readFileSync sync atle synchonous atle jya sydhi read nai tya sudhi aagal vadhavanu nai  
//ASYNCHRONOUS OR NON BLOCKING---LINE BY LINE NOT GUARANTED CALLBACKS WILL FIRE
const fs = require("fs");
let text = fs.readFile("nodejs-1.js","utf-8",(err,data)=>{
    console.log(err,data);
});


console.log(text);
console.log("this is message");
//output ma this is message pela avse bcoz asynchronous use readfile function jyare patase tyare tyare e output avse
//alagal no code run thato rese 
//this was callback and fired
//node work on non blocking i/o model