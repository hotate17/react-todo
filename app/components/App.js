var React = require('react');
var Header = require('./Header');
var Item = require('./Item');
var AddItemForm = require('./AddItemForm');


var App = React.createClass({

	propTypes: ({
		initialItems: React.PropTypes.array.isRequired,
	}),

	getInitialState: function(){
		return {
			items: this.props.initialItems,
			checkedItems: false,
		}
	},

	onItemAdd: function(name, color){
		var itemId = (this.state.items.length + 1);
		this.state.items.push({
			name: name,
			color: color,
			id: itemId,
		});
		this.setState(this.state);
		itemId += 1;
	},

	onItemDelete: function(index){
		//console.log('index '+index);
		this.state.items.splice(index, 1);
		this.setState(this.state);
	},

	onDeleteChecker: function(checked){
		this.state.checkedItems = checked;
		this.setState(this.state);
	},

	onMultiDelete: function(){
		//if checkeditems is true, delete items
		console.log('onMultiDelete ', this.state.items);
	},

	render: function(){
		return (
			<div className="container">
				<Header checkedItemsFlag={this.state.checkedItems} handleDeleteItems={this.onMultiDelete} />
				<ul className="list">
					{this.state.items.map(function(item, index){
						return (
							<Item 
								name={item.name}
								color={item.color}
								key={item.id}
								onDeleteCheck={this.onDeleteChecker}
								onPassDelete={function(){ this.onItemDelete(index) }.bind(this)} 
							/>
						);
					}.bind(this))}
				</ul>
				<AddItemForm onAdd={this.onItemAdd} />
			</div>
		);
	}
});

module.exports = App;