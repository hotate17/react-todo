var React = require('react');
var Actions = require('./Actions');
var EditItemForm = require('./EditItemForm');

var Item = React.createClass({
	propTypes: {
		name: React.PropTypes.string.isRequired,
		color: React.PropTypes.string,
		checked: React.PropTypes.bool.isRequired,
		edit: React.PropTypes.bool.isRequired,
		id: React.PropTypes.number.isRequired,
		onPassDelete: React.PropTypes.func.isRequired,
		onCheckedCheck: React.PropTypes.func.isRequired,
		editFlag: React.PropTypes.func.isRequired,
	},

	getInitialState: function(){
		return {
			clicked: false,
			checked: false,
			editSwitch: false,
		}
	},

	handleClick: function(){
		this.state.clicked = this.state.clicked ? false : true;
		this.setState(this.state);
	},

	handleChange: function(e){
		this.state.checked = e.target.checked;
		this.props.onCheckedCheck(this.state.checked, this.props.id);
		this.setState(this.state);
	},

	onEditSwitch: function(){
		//console.log(this.state.editSwitch);
		this.state.editSwitch = this.state.editSwitch ? false : true;
		this.props.editFlag(this.state.editSwitch, this.props.id);
		this.setState(this.state);
	},

	render: function(){
		var colorClass = this.props.color ? this.props.color : '';
		var checkedClass = this.state.checked ? 'disabled' : '';
		
		return (
			<li className={`list__item ${colorClass} ${checkedClass}`} data-id={this.props.id}>
				<div className="list__checkbox">
					<input type="checkbox" onChange={this.handleChange} />
				</div>

				<div className="list__name">
					<p className="list__text" onClick={this.onEditSwitch}>{this.props.name}</p>
					<EditItemForm editMode={this.props.edit} val={this.props.name} />
				</div>

				<div className="list__actions" onClick={this.handleClick}><span /></div>
				<Actions clickedFlag={this.state.clicked} onDelete={this.props.onPassDelete} />
			</li>
		);
	}
});

module.exports = Item;