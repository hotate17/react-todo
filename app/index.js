var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
var style = require('./scss/app.scss');

//require('!style!css!sass!./scss/app.scss');

ReactDOM.render(<App />, document.getElementById('app'));