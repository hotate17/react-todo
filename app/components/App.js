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

	render: function(){
		return (
			<div className="container">
				<Header />
				<ul className="list">
					{this.state.items.map(function(item, index){
						return (
							<Item 
								name={item.name}
								color={item.color}
								key={item.id}
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