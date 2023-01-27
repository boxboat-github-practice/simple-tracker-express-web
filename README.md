# simple-tracker
Skeleton structure for a work tracking web app in vanilla javascript. Meant to be forked and  extended

## features
- api server
- fronted

## does not feature
- authentication
- styling
- input validation
- gui elements for modifying/deleting data
- database
- tests
- ci/cd automation

```mermaid
---
title: Schema
---
erDiagram
  EMPLOYEE }|--o{ HISTORY : employeeId 
  EMPLOYEE {
    int id
    string name
    string github
  }
  CLIENT }|--o{ HISTORY : clientId
  CLIENT{
    int id
    string name
    string url
  }
  CONTRACT }|--o{ HISTORY: contractId
  CONTRACT {
    int id
    int clientId
    string type
    date startDate
    date endDate
    list tech
  }
  HISTORY{
    int id
    int clientId
    int employeeId
    int contractId
    string employeeName
    string clientName
    string role
  }
```