react-domcontentloaded
===

A react component that inserts [WebReflection's DOMContentLoaded](https://github.com/WebReflection/DOMContentLoaded) fix for async scripts

Note: this makes sense to use only for server side rendering

## Usage

```jsx
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
