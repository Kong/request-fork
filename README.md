# request-fork

Take a single request and send it to multiple hosts.

### Install

```shell
npm install request-fork
```

### Usage

```js
var req = {
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
