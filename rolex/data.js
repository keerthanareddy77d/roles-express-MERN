const ROLE = {
    ADMIN: 'admin',
    FAC:'fac',
    BASIC: 'basic'
  }
  
  module.exports = {
    ROLE: ROLE,
    users: [
      { id: 1, name: 'Hari Kiran Vege', role: ROLE.ADMIN },
      { id: 2, name: 'Murali Mohan', role: ROLE.FAC },
      { id: 3, name: 'Jhon', role: ROLE.BASIC }
    ],
    profiles: [
      { id: 1, name: "Hari's Profile", userId: 1 },
      { id: 2, name: "Murali's Profile", userId: 2 },
      { id: 3, name: "John's Profile", userId: 3 }
    ]
  }