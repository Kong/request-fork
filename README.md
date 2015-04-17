# request-fork [![](https://img.shields.io/wercker/ci/552f51d259f9ea486f001bd0.svg)](https://app.wercker.com/#applications/552f51d259f9ea486f001bd0) [![](https://img.shields.io/npm/l/request-fork.svg)](https://www.npmjs.com/package/request-fork)

Take a single [request object](https://github.com/request/request#requestoptions-callback) and send it to multiple targets. 

### Install

```shell
npm install request-fork
```

### Usage

```js
var requestFork = require('request-fork')

var req = {
  method: 'GET',
  url: 'https://mockbin.com/status/502',
  headers: {
    'User-Agent': 'request-fork'
  }
}

var targets = [
  "https://mockbin.com/status/200",
  "https://mockbin.com/status/404"
]

requestFork(req, targets, function(responses, errors) {
  if (errors) throw errors
  responses.map(function(res){
    console.log(res.statusCode)
  })
})
```

### Contributing

[Feedback](https://github.com/Mashape/harplayer/issues) and [pull requests](https://github.com/Mashape/harplayer/pulls) are most welcomed. 

### MIT license

Copyright (c) 2015, Mashape (https://www.mashape.com/)
