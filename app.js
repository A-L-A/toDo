
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Shop", "Work"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res) {

  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
   };

   var day = today.toLocaleDateString("en-US", options);

  res.render("list", {kindOfDay: day, newListItems: items});

});

app.post("/", function(req, res){

  var item = req.body.newItem;

  items.push(item);

    res.redirect("/");
})

app.listen(3000, function(req, res){
    console.log("Server is up and running on port 3000");
});