# request-fork

Takes a single request and forks it out to multiple hosts.

### Install

```shell
npm install request-fork
```

### Usage

```js
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
```

### Contributing

[Feedback](https://github.com/Mashape/harplayer/issues) and [pull requests](https://github.com/Mashape/harplayer/pulls) are most welcomed. 

### MIT license

Copyright (c) 2015, Mashape (https://www.mashape.com/)
