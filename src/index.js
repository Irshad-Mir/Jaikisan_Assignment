const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const router = express.Router();
const route = require('./routes/route.js');

const app = express();                   //The express() function is a top-level function exported by the express module.

app.use(bodyParser.json());              //tells the system that you want json to be used

app.use(bodyParser.urlencoded({ extended: true }));//tells the system whether you want to use a simple algorithm for shallow parsing (i.e. false) or complex algorithm for deep parsing that can deal with nested objects (i.e. true).

mongoose
  .connect(
    "mongodb+srv://users-open-to-all:hiPassword123@cluster0.uh35t.mongodb.net/Group6-DB?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("mongodb running and connected"))
  .catch((err) => console.log(err));


app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});  