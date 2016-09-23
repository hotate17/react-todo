var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
var style = require('./scss/app.scss');

var INIT_ITEMS = [
	{
		name: 'Todo item 1',
		color: '',
		checked: false,
		edit: false,
		id: 1
	},
	{
		name: 'Todo item 2',
		color: 'pink',
		checked: false,
		edit: false,
		id: 2
	},
	{
		name: 'Todo item 3',
		color: 'purple',
		checked: false,
		edit: false,
		id: 3
	}
];

ReactDOM.render(<App initialItems={INIT_ITEMS} />, document.getElementById('app'));