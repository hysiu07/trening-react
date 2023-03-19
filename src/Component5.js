import React, { Component } from 'react';
import './Component5.css';

export default class Component5 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			id: Date.now(),
		};
	}

	addUser = (e) => {
		e.preventDefault();

		let newUser = {
			name: this._inputName.value.toUpperCase(),
			id: Date.now(),
		};

		this.setState((state) => {
			return {
				users: state.users.concat(newUser),
			};
		});
		this._inputName.value = '';
		console.log(this.state.users);
	};

	render() {
		return (
			<div className='component5'>
				<h1>Component 5</h1>

				<form onSubmit={this.addUser}>
					<input
						type='text'
						placeholder='Wpisz imie'
						ref={(element) => {
							this._inputName = element;
						}}
					/>
					<input type='submit' />
				</form>
				<div>
					{this.state.users.map((el) => {
						return <p key={el.id}>{el.name}</p>;
					})}
				</div>
			</div>
		);
	}
}
