const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const items = ["sk","sanjay"];
const worklist =[];
//app.set('views', __dirname + '/views');

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

const date = new Date();

const options = {  weekday: 'long', month: 'long', day: 'numeric' };

let listName;



app.get('/',function(req,res){
    res.render('list',{listName:date.toLocaleString('en-US', options),array : items});
})


app.post('/',function(req,res){
   
    if(req.body.button === "worklist"){
        worklist.push(req.body.itemname);
        res.redirect('/work');
    }
    else{
    items.push(req.body.itemname);
    res.redirect('/');
    }
   
})

app.get('/work',function(req,res){
    res.render('list',{listName : "worklist",array : worklist});
})


app.listen(process.env.PORT || 3000 , function(){
    console.log("Server is listening to the port 3000");
})