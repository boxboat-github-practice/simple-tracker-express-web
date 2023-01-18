exports.data = {
  "employees": [
    {
      "name": "Mike",
      "active": true,
      "github": "mbmcmullen27",
      "id": 0,
      "history": [
        {id: 0, name: "delta", role: "engineer"},
        {id: 1, name: "securegive", role: "engineer"},
        {id: 2, name: "cca", role: "engineer"}
      ]
    },
    {
      "name": "Dan",
      "active": false,
      "github": "dkoch84",
      "id": 1,
      "history": [
        {id: 0, name: "delta", role: "architect"},
        {id: 3, name: "travelport", role: "architect"}
      ]
    }
  ],

  "clients": [
    {
      "id": 0,
      "name": "delta"
    },
    {
      "id": 1,
      "name": "securegive"
    },
    {
      "id": 2,
      "name": "cca"
    },
    {
      "id": 3,
      "name": "travelport"
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