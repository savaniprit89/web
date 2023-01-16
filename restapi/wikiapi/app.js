const express=require("express")
const bodyparser=require("body-parser")
const ejs=require("ejs")
const mongoose=require("mongoose")

const app=express();

app.set('view engine','ejs')

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/wikidb",{useNewUrlParser:true, useUnifiedTopology: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("savani");
});
const articleschema={
    title:String,
    content:String
};
const article=mongoose.model("article",articleschema);



var silence = new article({ title:"nkan",content:"jbbdakcna"});
var silence2 = new article({title:"ankdn",content:"asnkanca" });


silence.save(function(err,k){
  if(err){
      return console.error(err);
     
  }
  
})//saving it
silence2.save(function(err,k){
  if(err){
      return console.error(err);
     
  }
})

/*get route */  

app.get("/article",(req,res)=>{
    article.find((err,foundarticle)=>{
        //here 1st parameter is blank because find all articles so no condition
        if(err){
            res.send(err)
        }
        else{
            res.send(foundarticle)
            console.log(foundarticle);
        }
    })
})

//post request

app.post("/article",(req,res )=>{
    console.log(req.body.title)
    console.log(req.body.content)

    const newarticle = new article({ title:req.body.title
        ,content:req.body.cotent});

        newarticle.save(function(err){
            if(!err){
                res.send("successfully added")
               
            }
          })
})


//delete 
app.delete("/article",(req,res)=>{
    article.deleteMany((err)=>{
        if(!err)
        {
            res.send("successfully deleted")
        }
        else{
            res.send(err)
        }
    })
})

app.listen(80,()=>{
    console.log("server is running")
}) 
app.route("/article/:articletitle")
.get(function(req,res){
    
    article.findOne({title:req.params.articletitle},function(err,foundarticle){
        if(foundarticle){
            res.send(foundarticle)
        }
        else{
            res.send("nod article found")
        }
    })
})
.put(function(req,res){
    article.update(
        {
            title:req.params.articletitle
        },
        {
            title:req.body.title,
            content:req.body.content
        },
        {
            overwrite:true
        },
        function(err){
            if(!err){
                res.send("successfully updated")
            }
        }
    )
})
.patch(function(req,res){
    article.update({
      
        title:req.params.articletitle
    },
    {
        $set:req.body
    }  ,
    function(err){
        if(!err)
        {
            res.send("updated")
        }
    }
    );
})
.delete(function(req,res){
    article.deleteOne(
        {title:req.params.articletitle},
        function(err){
            if(err){
                res.send(err)
            }
        }
    )
    ;
});


//chaining route
/*
app.route("/article").get((req,res)=>{
    article.find((err,foundarticle)=>{
        //here 1st parameter is blank because find all articles so no condition
        if(err){
            res.send(err)
        }
        else{
            res.send(foundarticle)
            console.log(foundarticle);
        }
    })
}).post((req,res )=>{
    console.log(req.body.title)
    console.log(req.body.content)

    const newarticle = new article({ title:req.body.title
        ,content:req.body.cotent});

        newarticle.save(function(err){
            if(!err){
                res.send("successfully added")
               
            }
          })
}).delete((req,res)=>{
    article.deleteMany((err)=>{
        if(!err)
        {
            res.send("successfully deleted")
        }
        else{
            res.send(err)
        }
    })
});
*/