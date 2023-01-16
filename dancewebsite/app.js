const express=require("express")
const app=express();
const path=require('path');
const port=80;
const bodyparser=require('body-parser')
var mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

//mongoose schema
var contactschema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String
  });
  var contact = mongoose.model('contact', contactschema);

//EXPRESS SPECIFI STUFF

app.use('/static',express.static('static'))//serving for static file
app.use(express.urlencoded())
//PUG SPECIFIC STUFF
app.set('view engine','pug');//set thr template engine as pug
app.set('views',path.join(__dirname,'views'))//set view directory

//ENDPOINT
app.get("/",(req,res)=>{
    
    
    res.status(200).render('home.pug')
})
app.get("/contact",(req,res)=>{
    
    
    res.status(200).render('contact.pug')
})
app.post('/contact',(req,res)=>{
    var mydata=new contact(req.body)
    mydata.save().then(()=>{
        res.send("saved to database")
    }).catch(()=>{
        res.status(400).send("not saved")
    })
   
})

//START THE SERVER
app.listen(port,()=>{
    console.log(`the apllication started at ${port}`);
})