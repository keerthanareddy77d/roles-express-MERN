const express = require('express')
const app = express()
const { ROLE, users } = require('./data')
const { authUser, authRole } = require('./baiscAuth')
const profileRouter = require('./routes/profiles')

app.use(express.json())
app.use(setUser)
app.use('/profiles', profileRouter)

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/dashboard', authUser, (req, res) => {
  res.send('Dashboard Page')
})

app.get('/admin', authUser, authRole(ROLE.ADMIN), (req, res) => {
  res.send('Admin Page')
})

function setUser(req, res, next) {
  const userId = req.body.userId
  if (userId) {
    req.user = users.find(user => user.id === userId)
  }
  next()
}

app.listen(3007)