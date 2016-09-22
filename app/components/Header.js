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
			<header>
				<h1 className="clearfix">{this.props.title} <a className="float--right text--xs spacer--top--xs text--reg" href="#">Clear All Checked Items</a></h1>
				
			</header>
		);
	}
});

module.exports = Header;