var React = require('react')
var ReactDOM = require('react-dom/server')
var DOMContentLoadedFix = require('../DomContentLoadedFix')
var http = require('http')

var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(ReactDOM.renderToStaticMarkup(
    React.createElement(
      "html",
      null,
      React.createElement(
        "head",
        null,
        React.createElement(DOMContentLoadedFix, null),
        React.createElement(
          "title",
          null,
          "My Page title"
        ),
        React.createElement("script", { src: "/my/fancy-js.js", async: true })
      ),
      React.createElement("body", null, "Check out the source!")
    )
  ))
}).listen(8088, function() {
  console.log('Try localhost:8088')
});