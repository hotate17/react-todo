var React = require('react');

var EditItemForm = React.createClass({
	propTypes: {
		editMode: React.PropTypes.bool.isRequired,
		val: React.PropTypes.string.isRequired,
	},

	componentDidUpdate: function(){
		this.refs.editInput.select();
	},

	render: function(){
		var editClass = this.props.editMode ? 'is--show' : '';

		return (
			<form className={`list__form ${editClass}`}>
				<input
					className="form__inputText--lg form__inputText--addItem"
					type="text"
					ref="editInput"
					defaultValue={this.props.val}
				/>
				<div className="colorSelector">
					<input type="radio" className="colorSelector__inputRadio red checked" name="selectedColor" data-color="red" />
					<input type="radio" className="colorSelector__inputRadio pink" name="selectedColor" data-color="pink" />
					<input type="radio" className="colorSelector__inputRadio purple" name="selectedColor" data-color="purple" />
					<input type="radio" className="colorSelector__inputRadio blue" name="selectedColor" data-color="blue" />
					<input type="radio" className="colorSelector__inputRadio green" name="selectedColor" data-color="green" />
					<input type="radio" className="colorSelector__inputRadio yellow" name="selectedColor" data-color="yellow" />
				</div>
				<input className="form__inputSubmit--inside" type="submit" value="Save" />
			</form>
		);
	}
});

module.exports = EditItemForm;