var url = require('url')
var unirest = require('unirest')

module.exports = function requestFork(req, targets, cb) {
  var responses = []
  var errors = []

  function handler(error, response, body) {
    if (error) {
      errors.push(error)
    }
    responses.push(response)
    if (responses.length + errors.length === targets.length) {
      cb(responses, errors)
    }
  }

  targets.map(function(target){
    req.url = url.parse(target)
    unirest.request(req, handler)
  })
}
