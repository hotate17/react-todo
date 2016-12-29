var React = require('react');

var EditItemForm = React.createClass({
	propTypes: {
		editMode: React.PropTypes.bool.isRequired,
		val: React.PropTypes.string.isRequired,
		colorList: React.PropTypes.array.isRequired,
		color: React.PropTypes.string,
	},

	getInitialState: function(){
		return {
			newName: this.props.val,
			newColor: this.props.color,
		}
	},
	componentWillReceiveProps: function(nextProps){
		if(nextProps.editMode === false){
			this.setState({ 
				newName: nextProps.val,
				newColor: nextProps.color,
			});
		}
	},
	onValueChange: function(e){
		this.state.newName = e.target.value;
		this.setState(this.state);
	},
	onColorChange: function(e){
		this.state.newColor = e.target.getAttribute('data-color');
		this.setState(this.state);
	},
	onSubmit: function(e){
		e.preventDefault();

		var name = this.state.newName;
		var color = this.state.newColor;
		var id = this.props.id;

		if(name != ''){
			this.props.notifyEdits(name, color, id);
		}
	},
	render: function(){
		var editClass = this.props.editMode ? 'is--show' : '';

		var radios = this.props.colorList.map(function(color, index){
			
			var checkedClass = (color.name == this.state.newColor) ? 'checked' : '';
			console.log(this.state.newColor, this.props.color);

			return (
				<input type="radio" onChange={this.onColorChange} className={`colorSelector__inputRadio ${color.name} ${checkedClass}`} name="selectedColor" data-color={color.name} key={color.id} />
			);
		}.bind(this));

		return (
			<form className={`list__form ${editClass}`} onSubmit={this.onSubmit}>
				<input
					className="form__inputText--lg form__inputText--addItem"
					type="text"
					ref="editInput"
					onChange={this.onValueChange}
					value={this.state.newName}
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