//inserting in mongodb
 use savanikart

db.items.insertOne({name:"samsung m30",price:5000,rating:4.5,qty:233,sold:98})
db.items.insertMany([{name:"samsung m30",price:5000,rating:4.5,qty:233,sold:98},{name:"samsung a31",price:8978,rating:4,qty:23,sold:9}])


//show
db.items.find()
//no same schema
db.items.insertMany([{name:"samsung m30",price:5000,rating:4.5,qty:233,sold:98},
{name:"samsung a31",price:8978,rating:4,qty:23,sold:9,big:true}])

//searching

> db.items.find({rating:4.5})//rating=3.5
{ "_id" : ObjectId("62331831e24d85b3dfe9fd36"), "name" : "samsung m30", "price" : 5000, "rating" : 4.5, "qty" : 233, "sold" : 98 }
{ "_id" : ObjectId("62331941e24d85b3dfe9fd37"), "name" : "samsung m30", "price" : 5000, "rating" : 4.5, "qty" : 233, "sold" : 98 }
> db.items.find({rating:{$gte: 3.5}})//rating greateror equal to than 3.5
{ "_id" : ObjectId("62331831e24d85b3dfe9fd36"), "name" : "samsung m30", "price" : 5000, "rating" : 4.5, "qty" : 233, "sold" : 98 }
{ "_id" : ObjectId("62331941e24d85b3dfe9fd37"), "name" : "samsung m30", "price" : 5000, "rating" : 4.5, "qty" : 233, "sold" : 98 }
{ "_id" : ObjectId("62331941e24d85b3dfe9fd38"), "name" : "samsung a31", "price" : 8978, "rating" : 4, "qty" : 23, "sold" : 9 }
> db.items.find({rating:{$gt: 3.5}})//rating greater than 3.5
{ "_id" : ObjectId("62331831e24d85b3dfe9fd36"), "name" : "samsung m30", "price" : 5000, "rating" : 4.5, "qty" : 233, "sold" : 98 }
{ "_id" : ObjectId("62331941e24d85b3dfe9fd37"), "name" : "samsung m30", "price" : 5000, "rating" : 4.5, "qty" : 233, "sold" : 98 }
{ "_id" : ObjectId("62331941e24d85b3dfe9fd38"), "name" : "samsung a31", "price" : 8978, "rating" : 4, "qty" : 23, "sold" : 9 }
> db.items.find({rating:{$gt: 4}})////rating greater than 4
{ "_id" : ObjectId("62331831e24d85b3dfe9fd36"), "name" : "samsung m30", "price" : 5000, "rating" : 4.5, "qty" : 233, "sold" : 98 }
{ "_id" : ObjectId("62331941e24d85b3dfe9fd37"), "name" : "samsung m30", "price" : 5000, "rating" : 4.5, "qty" : 233, "sold" : 98 }
> db.items.find({rating:{$gt: 4}, price:{$gt: 6000}})//rating greater than 4 and price=6000
> db.items.find({rating:{$gte: 4}, price:{$gt: 6000}})//rating greater than or equal to 4 and price=6000
{ "_id" : ObjectId("62331941e24d85b3dfe9fd38"), "name" : "samsung a31", "price" : 8978, "rating" : 4, "qty" : 23, "sold" : 9 }

> db.items.find({rating:{$lt: 4}, price:{$gt: 6000}})//rating less than 4 and price=6000

db.items.find({ $or:[{rating: {$lt: 4}}, {price:{$gt: 6000}}]})//or operation
{ "_id" : ObjectId("62331941e24d85b3dfe9fd38"), "name" : "samsung a31", "price" : 8978, "rating" : 4, "qty" : 23, "sold" : 9 }

//projection
db.items.find({rating:{$gt: 4}},{rating:1,qty:1})
rating and column only display

///////////////////////////////////////////////////////////////////////////////////////////
//delete

db.items.deleteOne({price: 22000})//delete macthing document first entry
db.items.deleteMany({price: 22000})//all entry

//////////////////////////////////////////////////////////////////////////////////////////
//update

db.anotherCollection.insertone({a:89})//add collection

db.items.updateOne({name: "samsung a31"},{$set: {price: 2}})///upadete first find only
db.items.updateMany({name: "samsung a31"},{$set: {price: 2,rating:1}})///upadete all find

///////////////////relationshipin mongodb
db.products.insertOne({
    id:2,
    name:"pencil",
    stock:12,
    review:[
        {
            authorname:"james",
            rating:5
        },
        {
            authorname:"james",
            rating:5
        }
    ]
})




db.items.insertMany([{title:"nkan",content:"jbbdakcna"},{title:"ankdn",content:"asnkanca"}])