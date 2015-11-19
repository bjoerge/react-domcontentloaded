var React = require('react')

var dcl = '(function(g,a,b,d){function l(m,c){var e={type:d,currentTarget:a,target:a},f=c||m;try{"function"===typeof ' +
  'f?f.call(a,e):f.handleEvent(e)}catch(b){g(n,0,b)}}function n(a,c){throw c||a;}function h(){a.removeEventListener(d' +
  ',h);a[b]=function(b,c,e){b===d?g(l,0,c):k.call(a,b,c,!!e)}}var k=a[b];k.call(a,d,h)})(this.setImmediate||setTimeou' +
  't,document,"addEventListener","DOMContentLoaded");'

module.exports = React.createClass({
  displayName: 'DomContentLoadedFix',
  render: function() {
    return React.createElement('script', {
      dangerouslySetInnerHTML: {
        __html: dcl
      }
    })
  }
})