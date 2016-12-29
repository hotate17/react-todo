var React = require('react');
var Header = require('./Header');
var Item = require('./Item');
var AddItemForm = require('./AddItemForm');

var itemId = 4;

function getIndex(value, arr, prop) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i][prop] === value) {
        return i;
    }
  }
  return -1; //to handle the case where the value doesn't exist
}

var App = React.createClass({

	propTypes: ({
		initialItems: React.PropTypes.array.isRequired,
		colors: React.PropTypes.array.isRequired,
	}),

	componentDidMount: function(){
		window.addEventListener('click', this.clickOutside);
	},

	getInitialState: function(){
		return {
			items: this.props.initialItems,
			countChecked: false,
			checkedNum: 1,
		}
	},

	onItemAdd: function(name, color){
		this.state.items.push({
			name: name,
			color: color,
			checked: false,
			edit: false,
			id: itemId,
		});
		this.setState(this.state);
		itemId += 1;
	},

	onItemEdit: function(name, color, id){
		var array = this.state.items;
		var index = getIndex(id, array, 'id');
		this.state.items[index].name = name;
		this.state.items[index].color = color;
		this.state.items[index].edit = false;
		this.setState(this.state);
		//console.log('new name: ' + name + ' new color: ' + color + ' id: ' + id);
	},

	onItemDelete: function(index){
		this.state.items.splice(index, 1);
		this.setState(this.state);
	},

	onCheckedChecker: function(checked, id){
		var array = this.state.items;
		var index = getIndex(id, array, 'id');
		var counter = [];
		
		if(this.state.items[index].edit === true){
			this.state.items[index].edit = false;	
		}
		this.state.items[index].checked = checked;
		this.setState(this.state);

		this.state.items.forEach(function(obj, index){
			if(obj.checked === true){
				counter.push(obj);
			}
		});
		if(counter.length > 0){
			this.state.countChecked = true;	
		}else {
			this.state.countChecked = false;
		}
		this.state.checkedNum = counter.length;
	},

	onMultiDelete: function(){
		var items = this.state.items;
		var keep = [];
		this.state.items.forEach(function(obj, index){
			if(obj.checked !== true){
				keep.push(items[index]);
			}
		});
		this.setState({
			items: keep,
			countChecked: false,
			checkedNum: 1,
		});
	},

	onEditCheck: function(flag, id){
		var array = this.state.items;
		var index = getIndex(id, array, 'id');
		var counter = [];

		this.state.items[index].edit = flag;
		this.setState(this.state);


		this.state.items.forEach(function(obj, index){
			if(obj.edit === true){
				counter.push(obj);
			}
		});

		if(counter.length > 1){
			this.state.items.forEach(function(obj, index){
				obj.edit = false;
			});
			this.state.items[index].edit = true;
			this.setState(this.state);
			
			counter.splice(0, 1);			
		}

	},

	clickOutside: function(e){
		if(!document.querySelector('[data-area]').contains(e.target)){
			this.state.items.forEach(function(obj, index){
				if(obj.edit === true){
					obj.edit = false;
				}
			});
			this.setState(this.state);
		}
	},

	render: function(){
		return (
			<div className="container">
				<Header checkedItemsFlag={this.state.countChecked} number={this.state.checkedNum} handleDeleteItems={this.onMultiDelete} />
				<ul className="list" data-area>
					{this.state.items.map(function(item, index){
						return (
							<Item 
								name={item.name}
								color={item.color}
								checked={item.checked}
								edit={item.edit}
								key={item.id}
								id={item.id}
								onCheckedCheck={this.onCheckedChecker}
								onPassDelete={function(){ this.onItemDelete(index) }.bind(this)} 
								editFlag={this.onEditCheck}
								editColorList={this.props.colors}
								onEdit={this.onItemEdit}
							/>
						);
					}.bind(this))}
				</ul>
				<AddItemForm onAdd={this.onItemAdd} colorList={this.props.colors} />
			</div>
		);
	}
});

module.exports = App;