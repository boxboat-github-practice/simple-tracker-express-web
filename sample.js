exports.data = {
  "employees": [
    {
      "name": "Mike",
      "github": "mbmcmullen27",
      "id": 0
    },
    {
      "name": "Dan",
      "github": "dkoch84",
      "id": 1
    }
  ],

  "history": [
    {id: 0, employeeId: 0, employeeName: "Mike", contractId: 0, clientId: 0, clientName: "Delta", role: "engineer"},
    {id: 1, employeeId: 0, employeeName: "Mike", contractId: 1, clientId: 1, clientName: "Securegive", role: "engineer"},
    {id: 2, employeeId: 0, employeeName: "Mike", contractId: 2, clientId: 2, clientName: "Cca", role: "engineer"},
    {id: 3, employeeId: 1, employeeName: "Dan", contractId: 0, clientId: 0, clientName: "Delta", role: "architect"},
    {id: 4, employeeId: 1, employeeName: "Dan", contractId: 3, clientId: 3, clientName: "Travelport", role: "architect"}
  ],

  "clients": [
    {
      "id": 0,
      "name": "Delta"
    },
    {
      "id": 1,
      "name": "Securegive"
    },
    {
      "id": 2,
      "name": "Cca"
    },
    {
      "id": 3,
      "name": "Travelport"
    }, 
  ],

  "contracts": [
    {
      "id": 0,
      "clientId": 0,
      "type": "app migration",
      "startDate": "9/2/2022",
      "endDate": "12/14/2022",
      "tech": [
        "openshift",
        "aws",
        "cloudformation",
        "argocd",
        "jboss"
      ]
    },
    {
      "id": 1,
      "clientId": 1,
      "type": "containerization",
      "startDate": "9/2/2022",
      "endDate": "12/14/2022",
      "tech": [
        "openshift",
        "aws",
        "cloudformation",
        "argocd",
        "jboss"
      ]
    },
    {
      "id": 2,
      "clientId": 2,
      "type": "modernization",
      "startDate": "9/2/2022",
      "endDate": "12/14/2022",
      "tech": [
        "rancher",
        "gitlab",
        "vsphere"
      ]
    },
    {
      "id": 3,
      "clientId": 3,
      "type": "github migration",
      "startDate": "9/2/2022",
      "endDate": "12/14/2022",
      "tech": [
        "github"
      ]
    }
  ]
}