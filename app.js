require('module-alias/register')
// express js require 
const express = require('express');
// get ejs package 
const ejs = require('ejs')
// get package for path 
const path = require('path');
// get package for  routing 
const routes = require('@/routes/index');
// use module express-ejs layouts 
const ejslayouts = require('express-ejs-layouts')
// initalize port 
const port = process.env.PORT || 3000;
console.log(port);

const app = express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,"src/views"))
app.set("layout extractScripts", true)
// set the routing  
app.use('/',routes);
// use json
app.use(express.json());
// use ejs layouts
app.use(ejslayouts);

app.use(express.static(path.join(__dirname,"/public")))


const routes = require('@/routes/index')
// app.get('/',(req,res)=>{
//     res.send("hello my name is ashok basnet");
// })
app.listen(port,()=>{
    console.log(`server is started and port no:${port}`)
})
