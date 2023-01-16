
const express=require("express")
const app=express();
const bodyparser=require("body-parser")
const https =require('https');//as native module so no need to install
app.use(bodyparser.urlencoded({extended: true}));
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
   
})
app.post("/",(req,res)=>{

const query=res.body.cityname;
const url='https://api.openweathermap.org/data/2.5/weather?q='+ query + '&appid=56958bdaf4afa6df592e735cd011ee6b&units=metric';
https.get(url,function(response){
    //call back will send response
    console.log(response);

    //console.log(statuscode);
    //200 meaans successfull response
    //404 cannot fiind request
    //401 unauthorise request
    //making get requset to api using node https module
    //json viewer assome use to get json data extraction

    response.on("data",(data)=>{
        const wheatherdata=JSON.parse(data)
        const temp=wheatherdata.main.temp;
        console.log(temp);
        const icon=wheatherdata.weather[0].icon;
        const imgurl="https://openweathermap.org/img/wn/"+icon+"@2x.png"
        res.write("<h1>the temperature in london is"+temp+"degree</h1>")
        res.write("<h1>the temperature in london is"+temp+"degree</h1>")
        res.write("<img src="+imgurl+">")
        res.send();
    })
})//only one res.send in any method so use res.write
// res.send("server is up and runnig");
})
app.listen(80,function(){
    console.log("server is runnig at 3000 port")
})