
// require used to load the library ( predefine functions)

const path = require('path');
const express = require('express');  // will create routes
const ejs = require('ejs'); // for view purpose
const bodyparser = require('body-parser');

const app = express();

console.log(__dirname);

app.set('views',path.join(__dirname,'views'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());



app.set('view engine', 'ejs');

app.get('/',(req, res) => {
     res.render("login");
  });
app.post('/login',(req, res) => {

    console.log("welcome to login")

    var username = req.body.t1;
    var password = req.body.t2;

    if(username=="admin" && password == "12345")
         res.redirect("admin");
    else if(username="raman" && password=="1234")
        res.redirect("customer");
    else
        res.redirect("invalid");
  });
app.get('/admin',(req, res) => {
     res.render("admin");
  });
app.get('/customer',(req, res) => {
     res.render("customer");
  });


app.get('/invalid',(req, res) => {
    res.render("invalid");
 });


 app.get('/addproduct',(req, res) => {
    res.render("addproduct");
 });


 app.get('/viewproduct',(req, res) => {
    res.render("viewproduct");
 });

//server listening
app.listen(9000, () => {
  console.log('Server is running at port 9000');
});