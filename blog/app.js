//jshint esversion: 6
const express=require("express")
const bodyparser=require("body-parser")
const ejs =require("ejs")
const _ =require("lodash")

const app=express();
app.set('view engine','ejs');
const homestartingcontent="kkkkk";

var posts=[];//contain all posts
app.use(bodyparser.urlencoded({extended: true}))
app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.render("home",{startingcontent:homestartingcontent,
    posts:posts})//serving home.ejs page at starting page when server is started running and second parameter is key and value that is send to home.ejs page
    
})

app.get("/about",(req,res)=>{
    res.render("about",{startingcontent:homestartingcontent})//serving home.ejs page at starting page when server is started running and second parameter is key and value that is send to home.ejs page
})
app.get("/contact",(req,res)=>{
    res.render("contact",{startingcontent:homestartingcontent})//serving home.ejs page at starting page when server is started running and second parameter is key and value that is send to home.ejs page
})
app.get("/compose",(req,res)=>{
    res.render("compose")
})
app.post("/compose",(req,res)=>{
    const post= {
       title: req.body.title,
       content: req.body.postbody
   };
   posts.push(post);
   res.redirect("/");
})

app.get("/post/:postname",(req,res)=>{
    console.log(req.params.postname);//printing url postname which can be anything which is in request
    var requesttitle=_.lowerCase(req.params.postname);//converting title to kabab case

    

    /* for(var i=0;i< posts.length;i++){
        var storetitle=_.lowerCase(posts[i].title)
        if(requesttitle==storetitle){
            console.log("match")
        }
    }  if posttile equal to request then match found*/
    for(var i=0;i< posts.length;i++){
        var storetitle=_.lowerCase(posts[i].title)
    if(requesttitle==storetitle){

                const t=posts[i].title;
                const p=posts[i].content;
        res.render("post", {title: t,  content: p})
    }
}

})


app.listen(80,()=>{
    console.log("server is running")
})
