const mongoose= require("mongoose")
const express=require("express")
const app=express()

mongoose.connect("mongodb+srv://Hajar:Hh0554085255@clusternew.g5g7tbf.mongodb.net/?retryWrites=true&w=majority&appName=ClusterNew").then(()=>console.log("Mongo success")).
catch((err)=>{console.log(err)})


const ProductSchema=mongoose.Schema({
    name:String,
    price:Number,
    desc:String,
    date:{
        type:Date,
        default:Date.now
    },
    isActive:Boolean
})

const Product=mongoose.model("Product",ProductSchema)

app.listen(3200,()=>{
    console.log("listen 3200")
})

