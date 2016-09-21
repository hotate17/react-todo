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

	render: function(){
		return (
			<div className="container">
				<Header />
				<ul className="list">
					{this.state.items.map(function(item, index){
						return (
							<Item name={item.name} color={item.color} key={item.id} />
						);
					})}
				</ul>
				<AddItemForm />
			</div>
		);
	}
});

module.exports = App;