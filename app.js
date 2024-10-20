const express = require("express");
const bodyParser= require("body-parser");
const date=require(__dirname + "/date.js");

const app=express();
let items=["code","gym","play"];
let workItems=[];

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

app.get("/",function (req,res){
  let curDay = date.getDate();
  res.render("list",{listTitle :curDay,newListItems :items});
});

app.post("/",function(req,res){
  console.log(req.body);
  let item =req.body.newItem;
  if (req.body.list==="Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work",function (req,res){
  res.render("list",{listTitle:"Work List",newListItems:workItems});
});

app.post("/work",function(req,res){
  let item=res.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/about",function(req,res){
  res.render("about");
});

app.listen(3001,function(){
  console.log("Server started on port 3001");
});
