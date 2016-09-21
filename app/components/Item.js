var React = require('react');
var Actions = require('./Actions');

var Item = React.createClass({
	propTypes: {
		name: React.PropTypes.string.isRequired,
		color: React.PropTypes.string,
	},

	getInitialState: function(){
		return {
			clicked: false,
		}
	},

	handleClick: function(){
		this.state.clicked = this.state.clicked ? false : true;
		this.setState(this.state);
	},

	render: function(){
		var colorClass = this.props.color ? this.props.color : '';
		
		return (
			<li className={`list__item ${colorClass}`}>
				<div className="list__checkbox">
					<input type="checkbox" />
				</div>
				<p className="list__name">{this.props.name}</p>
				<div className="list__actions" onClick={this.handleClick}><span /></div>
				<Actions clickedFlag={this.state.clicked} />
			</li>
		);
	}
});

module.exports = Item;