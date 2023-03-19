import React, { Component, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
import Component5 from './Component5';

export const context = React.createContext();
const CtxProvider = context.Provider

export default class App extends Component {





	render() {
		return (
			<CtxProvider
				value='wartość przekazywana za pomocą hook useContext'
				value2='wartość przekazywana za pomocą context.consumer'
			>
				<Routes>
					<Route path='/' element={<Component1 />}></Route>
					<Route path='/a' element={<Component2 />} />
					<Route path='/b' element={<Component3 />} />
					<Route path='/c' element={<Component4 />} />
					<Route path='/d' element={<Component5 />} />
				</Routes>
			</CtxProvider>
		);
	}
}
