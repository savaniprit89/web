/*
implementing login with facebook using oauth and passport
passport documentation where we find passwordgoogle oauth and password googleoauth2.0
steps-1  npm install
step--2  create application on google developer console
go to gdc and create project and give name and create click
now go to credentials and then to oauth consent screen
and setup all things scope are permission which required
 now to credentials and then to oauth client id
 add javascript origin as http://localhost
 redirected  address http://localhost/auth/google/secrets means when succesfully login then where to redirect
  client secret=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
  client id =139351628610-56clm93p6030tpcnd2o0nq6hlejqno95.apps.googleusercontent.com
  add these two .env


  step-3 now config it and add require
  then add config code below serialize and deserialize

  step-4 add find or create and add plugin

    step--5 when click on link /auth/google adding get method
*/




require('dotenv').config();//requiring and creating .env file and storing there enivironment variables
const express=require("express")
const bodyparser=require("body-parser")
const ejs=require("ejs")
const mongoose=require("mongoose")
const session = require('express-session')
const passport=require("passport")
const passportlocalmongoose=require("passport-local-mongoose")//it manage salt and hash itself not to impllement
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate=require('mongoose-findorcreate')
const app=express();

app.set('view engine','ejs')

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(session({
    secret: 'our little secret.',
    resave: false,
    saveUninitialized: true,
  }))

  app.use(passport.initialize());
  app.use(passport.session());

  

mongoose.connect("mongodb://localhost:27017/userdb",{useNewUrlParser:true, useUnifiedTopology: true})

const userschema= new mongoose.Schema({
    name:String,
    password:String,
    secret:String,
    googleId:String//step 8 these field is to check that prevoisly it has login or not because if these field is not there then everytime one new object is added to database as new use when some regoster with same account or login so by adding it now not new object is added because we know that they have already registered
});
userschema.plugin(passportlocalmongoose);
userschema.plugin(findOrCreate)//plugin step 4
const user=mongoose.model("user",userschema);
passport.use(user.createStrategy());
/*
passport.serializeUser(user.serializeUser());//serialize create cookies
passport.deserializeUser(user.deserializeUser());//deserialize means destroy cookies

these serialize were for mongoose local we have for google now
*/

passport.serializeUser(function(user,done){
    done(null,user.id);//step7
})
passport.deserializeUser(function(id,done){
    user.findById(id,function(err,user){
        done(err,user)
    })//step 7
})

passport.use(new GoogleStrategy({//step 3
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost/auth/google/secrets",
    userProfileUrl:"https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    user.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/auth/google",(req,res)=>{//step 5
passport.authenticate("google",{scope:['profile']})//profile means we want profile which have email
})

app.get('/auth/google/secrets', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/secrets');
  });//step 6 after login where to go that route
app.get("/login",(req,res)=>{
    res.render("login")
})

app.get("/register",(req,res)=>{
    res.render("register")
})
app.get("/secrets",function(req,res){
   user.find({"secret":{$ne:null}},function(err,founduser){
       if(err){

       }
       else{
           res.render("secrets",{userwithsecret:founduser})//passing variable to submit.ejs page
       }
   })//checking secret field of user if not null then adding to page
})

//now any one once login && then he can directly go to secrets page due to cookies and already authenticated
//session is quit to chrome so when we start chrome again then we have to login again
app.post("/register",(req,res)=>{
    user.register({username: req.body.username},req.body.password, function(err,user){
        if(err)
        {
            console.log(err)
            res.redirect("register")
        }
        else{
            passport.authenticate("local")(req,res,function(){
                res.render("secrets")
            })
        }
    })
})

app.post("/login",(req,res)=>{
    
    const userr =new user({
        username: req.body.username,
        password: req.body.password
    });
    
    req.login(userr,function(err){
        //if login successfully or register then go to secrets page
        if(err)
        {
            console.log(err)
        }
        else{
            passport.authenticate("local")(req,res,function(){
                res.redirect("secrets");
            })
        }
    })
})
app.get("/submit",(req,res)=>{
    if(req.isAuthenticated()){
        res.render("submit");//if user go to submit then if user is  alreaready authenticed  then go to submit and if not then go to login
    }
    else{
        res.redirect("login")
    }
})

app.post("/submit",(req,res)=>{
    const ss=req.body.secret;
    //here finding user by its unique id and adding its secret and checking err also
    user.findById(req.user.id,(err,founduser)=>{
        if(err){

        }
        else{
            founduser.secret=ss
            founduser.save(function(){
                res.redirect("/secrets")
            })
        }
    })

})
app.get("/logout",(req,res)=>{
    req.logout();
    res.redirect("/");
})

app.listen(80,()=>{
    console.log("server is running")
}) 