var React = require('react');

var Header = React.createClass({
	propTypes: ({
		title: React.PropTypes.string.isRequired
	}),

	getDefaultProps: function(){
		return {
			title: 'React Todo List',
		}
	},

	render: function(){
		return (
			<h1>
				{this.props.title}
			</h1>
		);
	}
});

module.exports = Header;