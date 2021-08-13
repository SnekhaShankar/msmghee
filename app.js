const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

app.use(cors())
app.use(bodyParser.json())
app.get('/',(req,res) =>{
    res.send("Homepage")
})
mongoose.connect(
    process.env.DB_CONNECTION, {
    "useUnifiedTopology":true,
    "useCreateIndex":true,
    "useNewUrlParser":true,
    "useFindAndModify":false,
  } , ()=>{
    console.log("database is connected!!!!")
  })
app.listen(4000);