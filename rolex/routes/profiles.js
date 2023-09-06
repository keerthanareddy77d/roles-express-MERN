const express = require('express')
const router = express.Router()
const { profiles } = require('../data')
const { authUser } = require('../baiscAuth')
const { canViewProfile, canDeleteProfile, scopedProfiles } = require('../permissions/profile')

router.get('/', authUser, (req, res) => {
  res.json(scopedProfiles(req.user, profiles))
})

router.get('/:profileId', setProfile, authUser, authGetProfile, (req, res) => {
  res.json(req.profile)
})

router.delete('/:profileId', setProfile, authUser, authDeleteProfile, (req, res) => {
  res.send('Deleted Profile')
})

function setProfile(req, res, next) {
  const profileId = parseInt(req.params.profileId)
  req.profile = profiles.find(profile => profile.id === profileId)
  
  if (req.profile == null) {
    res.status(404)
    return res.send('Profile not found')
  }
  next()
}

function authGetProfile(req, res, next) {
  if (!canViewProfile(req.user, req.profile)) {
    res.status(401)
    return res.send('Not Allowed')
  }

  next()
}

function authDeleteProfile(req, res, next) {
  if (!canDeleteProfile(req.user, req.profile)) {
    res.status(401)
    return res.send('Not Allowed')
  }

  next()
}

module.exports = router