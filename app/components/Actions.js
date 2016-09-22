var React = require('react');

function Actions(props){
	var makeThisVisible = props.clickedFlag ? 'is--visible' : '';

	return (
		<ul className={`dropdown ${makeThisVisible}`}>
			<li className="dropdown__item">
				<a className="dropdown__link" href="#">Edit</a>
			</li>
			<li className="dropdown__item">
				<a className="dropdown__link important" href="#" onClick={props.onDelete}>Delete</a>
			</li>
		</ul>
	);
}

Actions.propTypes = {
	clickedFlag: React.PropTypes.bool.isRequired,
	onDelete: React.PropTypes.func.isRequired,
};

module.exports = Actions;