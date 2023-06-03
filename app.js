const express = require('express');
require('module-alias/register')
const app = express();
const port = process.env.PORT || 3000;
console.log(port);
const path = require('path');
const routes = require('@/routes/index')
// app.get('/',(req,res)=>{
//     res.send("hello my name is ashok basnet");
// })
app.listen(port,()=>{
    console.log(`server is started and port no:${port}`)
})
