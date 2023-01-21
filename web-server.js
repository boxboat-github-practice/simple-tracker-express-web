const env = require("./local.json")
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;
const host = process.env.HOST || '0.0.0.0';

app.use(cors())
app.use(express.json())

app.set('view engine', 'ejs');

// views
app.get('/', function(req, res) {
  res.render("index", {env: env});
});

app.get('/clientList', function(req, res) {
  res.render("clientList", {env: env});
});

app.get('/contractList', function(req, res) {
  res.render("contractList", {env: env, employeeId: req.query.id});
});

app.get('/employeeList', function(req, res) {
  res.render("employeeList", {env: env, contractId: req.query.id});
});

app.get('/employeeProfile/:id', function(req, res) {
  res.render("employee", {id: req.params.id, env: env})
})

app.get('/clientProfile/:id', function(req, res) {
  res.render("client", {id: req.params.id, env: env})
})

app.get('/contractSummary/:id', function(req, res) {
  res.render("contract", {id: req.params.id, env: env})
})

app.listen(port, host);
console.log(`Server started at http://${host}:${port}`);