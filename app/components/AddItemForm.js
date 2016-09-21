var React = require('react');

var AddItemForm = React.createClass({

	propTypes: ({
		onAdd: React.PropTypes.func.isRequired,
	}),
	
	getInitialState: function(){
		return {
			name: ''
		}
	},

	onSubmit: function(e){

	},

	onNameChange: function(e){

	},

	onColorChange: function(e){

	},

	render: function(){
		return (
			<form>
				<input className="form__inputText--lg form__inputText--addItem" type="text" name="name" value={this.state.name} placeholder="Add New Item" />
				<div className="colorSelector">
					<input type="radio" className="colorSelector__inputRadio red checked" name="selectedColor" data-color="red" />
					<input type="radio" className="colorSelector__inputRadio pink" name="selectedColor" data-color="pink" />
					<input type="radio" className="colorSelector__inputRadio purple" name="selectedColor" data-color="purple" />
					<input type="radio" className="colorSelector__inputRadio blue" name="selectedColor" data-color="blue" />
					<input type="radio" className="colorSelector__inputRadio green" name="selectedColor" data-color="green" />
					<input type="radio" className="colorSelector__inputRadio yellow" name="selectedColor" data-color="yellow" />
				</div>
				<input className="form__inputSubmit--addItem" type="submit" value="Add" />
			</form>
		);
	}
});

module.exports = AddItemForm;