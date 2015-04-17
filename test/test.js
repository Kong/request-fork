var mocha = require('mocha')
var assert = require('assert')
var nock = require('nock')
var requestFork = require('../lib/request-fork.js')

var nockServer = nock('http://localhost:9876')
nockServer.get('/ok').reply(200).persist()
nockServer.get('/redirect').reply(301).persist()
nockServer.get('/fail').reply(501).persist()

var req = {
  url: 'http://mockbin.com/status/200/',
  headers: {
    'User-Agent': 'request'
  }
}

var targets = [
  "http://localhost:9876/ok",
  "http://localhost:9876/ok",
  "http://localhost:9876/redirect",
  "http://localhost:9876/fail",
]

describe('requestFork', function(){
  it('should return correct amount of responses', function(done){
    requestFork(req, targets, function(responses, errors) {
      assert.equal(responses.length, 4)
      done()
    })
  })
  it('should not return any errors', function(done){
    requestFork(req, targets, function(responses, errors) {
      assert.equal(errors.length, 0)
      done()
    })
  })
  it('should return any errors', function(done){
    targets.push("http://ifsdjsljadflajkjkldf.ewrkjw")
    requestFork(req, targets, function(responses, errors) {
      assert.equal(errors.length, 1)
      done()
    })
  })
})
