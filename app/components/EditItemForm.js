var React = require('react');

var EditItemForm = React.createClass({
	propTypes: {
		editMode: React.PropTypes.bool.isRequired,
		val: React.PropTypes.string.isRequired,
		colorList: React.PropTypes.array.isRequired,
		color: React.PropTypes.string,
	},

	componentDidUpdate: function(){
		this.refs.editInput.select();
	},

	onColorChange: function(){
		//coColorChange for Edit
	},

	render: function(){
		var editClass = this.props.editMode ? 'is--show' : '';

		var radios = this.props.colorList.map(function(color, index){
			
			if(this.props.color){
				var checkedClass = (color.name == this.props.color) ? 'checked' : '';
			}else {
				var checkedClass = (color.name == 'red') ? 'checked' :'';
			}

			return (
				<input type="radio" onChange={this.onColorChange} className={`colorSelector__inputRadio ${color.name} ${checkedClass}`} name="selectedColor" data-color={color.name} key={color.id} />
			);
		}.bind(this));

		return (
			<form className={`list__form ${editClass}`}>
				<input
					className="form__inputText--lg form__inputText--addItem"
					type="text"
					ref="editInput"
					defaultValue={this.props.val}
				/>
				<div className="colorSelector">
					{radios}
				</div>
				<input className="form__inputSubmit--inside" type="submit" value="Save" />
			</form>
		);
	}
});

module.exports = EditItemForm;