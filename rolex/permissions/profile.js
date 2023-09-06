const { ROLE } = require('../data')

function canViewProfile(user, profile) {
  return (
    user.role === ROLE.ADMIN ||
    profile.userId === user.id
  )
}

function scopedProfile(user, profiles) {
  if (user.role === ROLE.ADMIN) return profiles
  return profiles.filter(profile => profile.userId === user.id)
}

function canDeleteProfile(user, profile) {
  return profile.userId === user.id
}

module.exports = {
  canViewProfile,
  scopedProfile,
  canDeleteProfile
}