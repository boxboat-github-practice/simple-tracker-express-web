exports.data = {
  "employees": [
    {
      "name": "Mike",
      "active": true,
      "github": "mbmcmullen27",
      "id": 1,
      "history": [
        {id: 1, name: "delta", role: "engineer"},
        {id: 2, name: "securegive", role: "engineer"},
        {id: 3, name: "cca", role: "engineer"}
      ]
    },
    {
      "name": "Dan",
      "active": false,
      "github": "dkoch84",
      "id": 2,
      "history": [
        {id: 1, name: "delta", role: "architect"},
        {id: 4, name: "travelport", role: "architect"}
      ]
    }
  ],

  "contracts": [
    {
      "id": 1,
      "name": "delta",
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
      "id": 2,
      "name": "securegive",
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
      "id": 3,
      "name": "cca",
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
      "id": 4,
      "name": "travelport",
      "type": "github migration",
      "startDate": "9/2/2022",
      "endDate": "12/14/2022",
      "tech": [
        "github"
      ]
    }
  ]
}