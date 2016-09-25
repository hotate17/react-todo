var React = require('react');

var AddItemForm = React.createClass({

	propTypes: {
		onAdd: React.PropTypes.func.isRequired,
		colorList: React.PropTypes.array.isRequired,
	},
	
	getInitialState: function(){
		return {
			name: '',
			color: 'red',
		}
	},

	onSubmit: function(e){
		e.preventDefault();

		var name = this.state.name;
		var color = this.state.color;

		if(name != ''){
			this.props.onAdd(name, color);
			this.setState({
				name: '',
				color: 'red'
			});
		}
	},

	onNameChange: function(e){
		this.state.name = e.target.value;
		this.setState(this.state);
	},

	onColorChange: function(e){
		this.state.color = e.target.getAttribute('data-color');
		this.setState(this.state);
	},

	render: function(){

		var radios = this.props.colorList.map(function(color, index){
			if(this.state.color == color.name){
				color.checked = true;
			}else {
				color.checked = false;
			}
			var checkedClass = color.checked ? 'checked' : '';
			return (
				<input type="radio" onChange={this.onColorChange} className={`colorSelector__inputRadio ${color.name} ${checkedClass}`} name="selectedColor" data-color={color.name} key={color.id} />
			);
		}.bind(this));

		return (
			<form onSubmit={this.onSubmit}>
				<input className="form__inputText--lg form__inputText--addItem" type="text" name="name" value={this.state.name} onChange={this.onNameChange} placeholder="Add New Item" />
				<div className="colorSelector">
					{radios}
				</div>
				<input className="form__inputSubmit--inside" type="submit" value="Add" />
			</form>
		);
	}
});

module.exports = AddItemForm;