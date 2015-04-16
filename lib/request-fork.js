var url = require('url')
var unirest = require('unirest')

function replaceHost(req, target) {
  req.url = url.parse(target)
  return req
}

function handler(error, response, body) {
  if (error) {
    return console.error('An error has occured:', error);
  }
  console.log('Request sent, status code: ' + response.statusCode)
}


// Create function
function requestFork(req, targets) {

  // Send to all forks
  targets.map(function(target){
    unirest.request(replaceHost(req, target), handler)
  })

}


var req = {
  url: 'https://api.github.com/repos/request/request',
  headers: {
    'User-Agent': 'request'
  }
}

var targets = [
  "http://mockbin.com/bin/8bbc56c6-eeb3-4d3e-b916-5a41a1e170ca",
  "http://mockbin.com/bin/356aaac4-2db1-4fb6-9e37-a44780f9f0d3"
]

requestFork(req, targets)