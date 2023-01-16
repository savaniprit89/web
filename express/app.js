const express=require("express")
const app=express();
const path=require('path');
const port=80;
//set thr template engine as pug
app.set('view engine','pug');
//set view directory
app.set('views',path.join(__dirname,'views'))
//our pug demo endpoint
app.get("/demo",(req,res)=>{
    res.status(200).render('demo',{title:"hey savani",message:"hello"})
})

app.use('/static',express.static('static'))//serving for static file
app.get("/",(req,res)=>{
res.send("this is my first express ap ith harry")
});
app.get("/about",(req,res)=>{
    res.status(200).send("this is my first express about ith harry")//along with status code
    });
    app.post("/about",(req,res)=>{
        res.send("this is my first express about ith harry")
        });
app.listen(port,()=>{
    console.log(`the apllication started at ${port}`);
})