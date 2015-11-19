react-domcontentloaded
===

A react component that inserts [WebReflection's DOMContentLoaded](https://github.com/WebReflection/DOMContentLoaded) fix for async scripts.

Read this blog post for details about how you might be bitten by using the DOMContentLoaded event in conjunction with `<script async …>`: http://webreflection.blogspot.no/2014/02/the-underestimated-problem-about-script.html

Note: This component only makes sense for server side rendering, e.g. using `ReactDOM.renderToStaticMarkup` or `ReactDOM.renderToString`.

## Usage

```js
var DOMContentLoadedFix = require('react-domcontentloaded')

var Chrome =  React.createClass({
  displayName: 'Chrome',
  render() {
    return (
      <html>
        <head>
          <DOMContentLoadedFix/>
          <title>My Page title</title>
          <script src="/my/fancy-js.js" async/>
        </head>
        <body>
          {/* … */}
        </body>
      </html>
    )
  }
})
```
