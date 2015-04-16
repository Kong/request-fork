var url = require('url')
var unirest = require('unirest')

function replaceHost(req, target) {
  req.url = url.parse(target)
  return req
}

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
    unirest.request(replaceHost(req, target), handler)
  })
}
