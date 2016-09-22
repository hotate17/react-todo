var React = require('react');
var Actions = require('./Actions');

var Item = React.createClass({
	propTypes: {
		name: React.PropTypes.string.isRequired,
		color: React.PropTypes.string,
		onPassDelete: React.PropTypes.func.isRequired,
	},

	getInitialState: function(){
		return {
			clicked: false,
			checked: false,
		}
	},

	handleClick: function(){
		this.state.clicked = this.state.clicked ? false : true;
		this.setState(this.state);
	},

	handleChange: function(e){
		//console.log('checked? '+e.target.checked)
		this.state.checked = e.target.checked;
		this.setState(this.state);
	},

	render: function(){
		var colorClass = this.props.color ? this.props.color : '';
		var checkedClass = this.state.checked ? 'disabled' : '';
		
		return (
			<li className={`list__item ${colorClass} ${checkedClass}`}>
				<div className="list__checkbox">
					<input type="checkbox" onChange={this.handleChange} />
				</div>
				<p className="list__name">{this.props.name}</p>
				<div className="list__actions" onClick={this.handleClick}><span /></div>
				<Actions clickedFlag={this.state.clicked} onDelete={this.props.onPassDelete} />
			</li>
		);
	}
});

module.exports = Item;