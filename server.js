const {data} = require("./sample.js");
const env = require("./local.json")
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;
const host = process.env.HOST || '0.0.0.0';

console.log(data)
console.log(env)

app.use(cors())

app.set('view engine', 'ejs');

// views
app.get('/', function(req, res) {
  res.render("index", {env: env});
});

app.get('/profile/:id', async function(req,res) {
  res.render("user", {id: req.params.id, env: env})
})

app.get('/client/:id', async function(req,res) {
  res.render("client", {id: req.params.id, env: env})
})

// data
app.get('/employees', async function(req,res) {
  res.send(data.employees)
})

app.get('/employees/:id', async function(req,res) {
  res.send(data.employees.filter(e=>e.id == req.params.id)[0])
})

app.get('/contracts', async function(req, res) {
  res.send(data.contracts)
})

app.get('/contracts/:id', async function(req,res) {
  res.send(data.contracts.filter(e=>e.id == req.params.id)[0])
})

app.listen(port, host);
console.log(`Server started at http://${host}:${port}`);