// const express = require('express');
// var http = require('http');
// const app = express();


// http.createServer(function (req, res) {
//   res.end('Hello World!');
// }).listen(8080)

// console.log('Server is running')

const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
const route = require('./src/routes/routes.js')

const PORT = 8080;
mongoose.connect("mongodb+srv://varsharao727:Varsha123@cluster0.gcejokm.mongodb.net/")
.then(() => { console.log('Connected to database')})
.catch(() => { console.log(error)})
app.use('/' ,route);
app.listen(PORT, () => {
  console.log(`Server is running`);
})