var React = require('react');

var App = React.createClass({
	render: function(){
		return (
			<div className="container">
				<h1>
					React Todo List
				</h1>

				<ul className="list">
					<li className="list__item">
						<div className="list__checkbox">
							<input type="checkbox" />
						</div>
						<p className="list__name">Todo item 1</p>
						<div className="list__actions"><span /></div>
						<ul className="dropdown">
							<li className="dropdown__item">
								<a className="dropdown__link" href="#">Edit</a>
							</li>
							<li className="dropdown__item">
								<a className="dropdown__link important" href="#">Delete</a>
							</li>
						</ul>
					</li>
					<li className="list__item pink disabled">
						<div className="list__checkbox">
							<input type="checkbox" checked />
						</div>
						<p className="list__name">Todo item 2</p>
						<div className="list__actions"><span /></div>
						<ul className="dropdown">
							<li className="dropdown__item">
								<a className="dropdown__link" href="#">Edit</a>
							</li>
							<li className="dropdown__item">
								<a className="dropdown__link important" href="#">Delete</a>
							</li>
						</ul>
					</li>
					<li className="list__item purple">
						<div className="list__checkbox">
							<input type="checkbox" />
						</div>
						<p className="list__name">Todo item 2</p>
						<div className="list__actions"><span /></div>
						<ul className="dropdown">
							<li className="dropdown__item">
								<a className="dropdown__link" href="#">Edit</a>
							</li>
							<li className="dropdown__item">
								<a className="dropdown__link important" href="#">Delete</a>
							</li>
						</ul>
					</li>
					<li className="list__item blue">
						<div className="list__checkbox">
							<input type="checkbox" />
						</div>
						<p className="list__name">Todo item 2</p>
						<div className="list__actions"><span /></div>
						<ul className="dropdown">
							<li className="dropdown__item">
								<a className="dropdown__link" href="#">Edit</a>
							</li>
							<li className="dropdown__item">
								<a className="dropdown__link important" href="#">Delete</a>
							</li>
						</ul>
					</li>
					<li className="list__item green">
						<div className="list__checkbox">
							<input type="checkbox" />
						</div>
						<p className="list__name">Todo item 2</p>
						<div className="list__actions"><span /></div>
						<ul className="dropdown">
							<li className="dropdown__item">
								<a className="dropdown__link" href="#">Edit</a>
							</li>
							<li className="dropdown__item">
								<a className="dropdown__link important" href="#">Delete</a>
							</li>
						</ul>
					</li>
					<li className="list__item yellow">
						<div className="list__checkbox">
							<input type="checkbox" />
						</div>
						<p className="list__name">Todo item 2</p>
						<div className="list__actions"><span /></div>
						<ul className="dropdown">
							<li className="dropdown__item">
								<a className="dropdown__link" href="#">Edit</a>
							</li>
							<li className="dropdown__item">
								<a className="dropdown__link important" href="#">Delete</a>
							</li>
						</ul>
					</li>
				</ul>

				<form>
					<input className="form__inputText--lg form__inputText--addItem" type="text" name="name" placeholder="Add New Item" />
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
				
			</div>
		);
	}
});

module.exports = App;