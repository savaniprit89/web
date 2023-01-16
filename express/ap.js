const express=require("express")
const app=express();
const path=require('path');
const port=80;
const fs=require('fs')
//EXPRESS SPECIFI STUFF
app.use('/static',express.static('static'))//serving for static file
app.use(express.urlencoded())
//PUG SPECIFIC STUFF
app.set('view engine','pug');//set thr template engine as pug
app.set('views',path.join(__dirname,'views'))//set view directory


//ENDPOINT
app.get("/",(req,res)=>{
    const con="this is best content";
    const params={'title':'pung is best game','content':con}
    res.status(200).render('index.pug',params)
})
app.post("/",(req,res)=>{
 
    age=req.body.age;
    namee=req.body.namee
    address=req.body.address;
    let output=`name of client is${namee} ,${age}`
fs.writeFileSync("output.txt",output)
    const params={'message':'form is submitted'}
    res.status(200).render('index.pug',params)
})

//START THE SERVER
app.listen(port,()=>{
    console.log(`the apllication started at ${port}`);
})