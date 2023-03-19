import React, { Component } from 'react';
import './Component1.css';

export default class Component1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colors: [],
		};
	}

	componentDidMount() {
		fetch('https://reqres.in/api/unknown')
			.then(res => res.json())
			.then(colorsList => {
				const color = colorsList.data
				console.log(color);
				this.setState({colors:color})
				console.log(this.state.colors);
	
			});
	}
	render() {
		return (
			<div className='component1'>
				<h1>Component 1</h1>
				<h2>Fetch komponent klasowy</h2>
				<ul className='colorList'>
					{this.state.colors.map((color)=>{
						return <li style={{color: color.color, fontSize: '30px'}} key={color.id}>{color.name}</li>
					})}
				</ul>
				
			
				
			
			</div>
		);
	}
}
