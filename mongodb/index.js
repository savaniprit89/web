

///mongodb driver can be also used in place of mongoose
var mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("savani");
});

var kittySchema = new mongoose.Schema({
    name: String,
    /*
    validating along with schema
    rating:{
        type:number,
        min:1,
        max:10
    }
    address:{
        type:string,
        required:[true,"please check you not enter name"]
    }

    if above rating or required condition not statisfied then data will not be inserted in database and we will get error message
    */
   
  });//creting schema
  // NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function speak() {
    const greeting = "Meow name is " + this.name
    console.log(greeting);
  };
  var Kitten = mongoose.model('sava', kittySchema);//compiling schema into model//saved in collection savas

  var silence = new Kitten({ name: 'Silence' });//creating it
  var silence2 = new Kitten({ name: 'Silence2' });//creating it
console.log(silence.name); // 'Silence'
silence.speak();//method call

silence.save(function(err,k){
    if(err){
        return console.error(err);
       
    }
    k.speak();
})//saving it
silence2.save(function(err,k){
    if(err){
        return console.error(err);
       
    }
    k.speak();
})

Kitten.find( {name: "Silence"},function(err,kittes){
    if(err){
        return console.error(err);
       
    }
    console.log(kittes)
})
/*
Kitten.updateOne({id:"here will of record to be upadted from database ,id will be that which is given by database"},{name: "peach"},(err)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log("successfully upadated")
    }
})


it will upadte item belong to that id and name will added to that id
*/

/* 
delete 
Kitten.deleteone({name:"peach"},(err)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log("successfully deleted")
    }
})
it will delete peach name item

*/


/* establishing relationshoip

const personschema =new mongoose.schema({
    name:string
    age:number,
    favorutivefruit:fruitschema//here document is embedded
})
const pineapple{
    name:pineapple
    scroe:9
}
pineapple.save();
const person=new person({
    name="amy"
    age:12
    favouritefruit:pineapple
})



name:ammy,age:12,favoritefruit:{id:avjvakba,name:pineaplle,scroe:9}






2)))))))))))esatblishing in already existoing

person.updateobe({name:john},{favouritefruit:pineapple},(err)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log("successfully added")
    }
})


it will update the object with john name
*/
