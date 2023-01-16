//jshint esversion: 6
const express= require("express")
const bodyparser =require("body-parser")
const request=require("request")

const app=express();
app.use(bodyparser.urlencoded({extended:true}))
//as css and image as static files so they are used to send also
app.use(express.static("public"))
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/signup.html");

})

app.post("/",(req,res)=>{
//var f=req.body.fname;
var l=req.body.lname;
var email=req.body.email;
console.log(lname,email);
})

app.listen(80,()=>{
    console.log("server is runnnig")
})