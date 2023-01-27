const {data} = require("./sample.js");
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8081;
const host = process.env.HOST || '0.0.0.0';

app.use(cors())
app.use(express.json())

function newId() {return Math.floor(Date.now() * Math.random() / 1000)}

// employees 
app.get('/employees', function(req, res) {
  res.send(data.employees)
})

app.post('/employees', function(req, res) {
  console.log(req.body)
  if (req.body.name) {
    let employee = {
      name: req.body.name,
      github: req.body.github,
      id: newId(),
    }
  
    data.employees.push(employee)
    res.send(employee)
  } else {
    res.status(400).send('Missing employee name')
  }
})

app.get('/employees/:id', function(req, res) {
  res.send(data.employees.filter(e=>e.id == req.params.id)[0])
})

app.put('/employees/:id', function(req, res) {
  let i = data.employees.findIndex(e=>e.id==req.params.id)

  for(key of Object.keys(req.body)) {
    data.employees[i][key] = req.body[key] 
  }

  res.send(data.employees[i])
})

app.delete('employees/:id', function(req, res) {
  let i = data.employees.findIndex(e=>e.id==req.params.id)
  delete data.employees[i]
  res.send('OK')
})

// clients
app.get('/clients', function(req, res) {
  res.send(data.clients)
})

app.post('/clients', function(req, res) {
  if (req.body.name) {
    let client = {
      name: req.body.name,
      url: req.body.url,
      id: newId(),
    }
  
    data.clients.push(client)
    res.send(client)
  } else {
    res.status(400).send('Missing client name')
  }
})

app.get('/clients/:id', function(req, res) {
  res.send(data.clients.filter(e=>e.id == req.params.id)[0])
})

app.put('/clients/:id', function(req, res) {
  let i = data.clients.findIndex(e=>e.id==req.params.id)

  for(key of Object.keys(req.body)) {
    data.clients[i][key] = req.body[key] 
  }

  res.send(data.clients[i])
})

app.delete('clients/:id', function(req, res) {
  let i = data.clients.findIndex(e=>e.id==req.params.id)
  delete data.clients[i]
  res.send('OK')
})

// contracts 
app.get('/contracts', function(req, res) {
  if(req.query.clientId) {
    let contracts = data.contracts.filter(e=>e.clientId == req.query.clientId)
    res.send(contracts)
  } else {
    res.send(data.contracts)
  }
})

app.post('/contracts', function(req, res) {
  if(req.body.clientId) {
    let contract = {
      id: newId(),
      clientId: req.body.clientId,
      type: req.body.type,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      tech: req.body.tech
    }
    data.contracts.push(contract)
    res.send(contract)
  } else {
    res.status(400).send('Missing client id')
  }
})

app.put('/contracts/:id', function(req, res) {
  let i = data.contracts.findIndex(e=>e.id==req.params.id)

  for(key of Object.keys(req.body)) {
    data.contracts[i][key] = req.body[key] 
  }

  res.send(data.contracts[i])
})

app.get('/contracts/:id', function(req, res) {
  res.send(data.contracts.filter(e=>e.id == req.params.id)[0])
})

app.delete('contracts/:id', function(req, res) {
  let i = data.contracts.findIndex(e=>e.id==req.params.id)
  delete data.contracts[i]
  res.send('OK')
})

// history
app.get('/history', function(req, res) {
  let history = data.history
  if(req.query.employeeId) 
    history = history.filter(e=>e.employeeId == req.query.employeeId)
  if (req.query.contractId) 
    history = history.filter(e=>e.contractId == req.query.contractId)
  if(req.query.clientId)
    history = history.filter(e=>e.clientId == req.query.clientId)

  res.send(history)
})

app.post('/history', function(req, res) {
  if(req.body.clientId !== undefined) {
    let client = data.clients.filter(e=>e.id==req.body.clientId)[0]
    let employee = data.employees.filter(e=>e.id==req.body.employeeId)[0]
    let history = {
      id: newId(),
      clientId: client.id,
      clientName: client.name,
      contractId: req.body.contractId,
      employeeId: employee.id,
      employeeName: employee.name,
      role: req.body.role
    }
    data.history.push(history)
    res.send(history)
  } else {
    res.status(400).send('Missing client id')
  }
})

app.put('/history/:id', function(req, res) {
  let i = data.history.findIndex(e=>e.id==req.params.id)

  for(key of Object.keys(req.body)) {
    data.history[i][key] = req.body[key] 
  }

  res.send(data.history[i])
})

app.get('/history/:id', function(req, res) {
  res.send(data.history.filter(e=>e.id == req.params.id)[0])
})

app.delete('history/:id', function(req, res) {
  let i = data.history.findIndex(e=>e.id==req.params.id)
  delete data.history[i]
  res.send('OK')
})


app.listen(port, host);
console.log(`Server started at http://${host}:${port}`);