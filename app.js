
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

console.log(date());

const app = express();

const  items = ["Shop", "Work"];
const workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
 

app.get("/", function(req, res) {

  const day = date();

  res.render("list", {listTitle: day, newListItems: items});

});

app.post("/", function(req, res){

    const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newListItems: workItems})
});

app.get("/about", function(req, res){
  res.render("about");
});

app.post("/work", function(req, res){
  console.log(req.body);
  const item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work"); 

});

app.listen(https://a-l-a.github.io, function(req, res){
    console.log("Server is up and running");
});
