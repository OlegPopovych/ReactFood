import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import BootstrapTest from './bootstrapTest';


const EmpItem = styled.div`
	padding: 20px;
	margin-bottom: 10px;
	border-radius: 5px;
	box-shadow: 5px 5px 10px rgba(0,0,0, .2);
	a {
		display: block;
		margin: 10px 0 10px 0;
		color: ${props => props.active ? 'orange' : 'black'};
	}
	input {
		display: block;
		margin-top: 10px;
	}
`;

const Header = styled.h2`
	font-size: 22px;
`;

export const Button = styled.button`
	display: block;
	padding: 5px 15px;
	background-color: gold;
	border: 1px solid rgba(0,0,0, .2);
`;

class WhoImI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			years: 33,
			text: "++",
			position: "",
		}
		this.myRef = React.createRef();
	}

	nextYear = () => {
		console.log('+++');
		this.setState(state => ({   //синхронний код, використано колбек, коли результат задежить від попереднього стану,
			years: state.years + 1   // бо додоє 1 до попереднього якаий має бути
		}))								// без колбека - код буде асинхронрний	 і може загубитись попередній стан
	}

	commitInputChanges = (e, color) => {
		console.log(color);
		this.setState({
			position: e.target.value
		})
	}

	componentDidMount() {
		this.myRef.current.focus();
	}

	render() {
		const { name, surname, link } = this.props;
		const { position, years } = this.state;
		return (
			<EmpItem active>
				<Button onClick={this.nextYear}>{this.state.text}</Button>
				<Header>
					My name is {name}, surname - {surname}, age - {years}, посада - {position}
				</Header>
				<a href={link}>Mi profile</a>
				<form>
					<span>Введіть посаду</span>
					<input ref={this.myRef} type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
				</form>
			</EmpItem>
		)
	}
}

const Wrapper = styled.div`
	width: 600px;
	margin: 80px auto 0 auto;
`;

const DynamicCreating = ({ color, children }) => {
	return (
		<div className={"mb-3 p-3 border border-" + color}>
			{
				React.Children.map(children, (child) => {
					return React.cloneElement(child, { className: 'shadow p-3 m-3 border rounded' })
				})
			}
		</div>
	)
}

const HelloGreating = () => {
	return (
		<div style={{ 'width': '600px', 'margin': '0 auto' }}>
			<DynamicCreating color={'primary'}>
				<h2>Hello !</h2>
			</DynamicCreating>
		</div>
	)
}

const Message = (props) => {
	return (
		<h2>The counter is {props.counter}</h2>
	)
}

class Counter extends Component {
	state = {
		counter: 0
	}

	changeCounter = () => {
		this.setState(({ counter }) => ({
			counter: counter + 1
		}))
	}

	render() {
		return (
			<>
				<button
					className={'btn btn-primary'}
					onClick={this.changeCounter}>
					Click me
				</button>
				{this.props.render(this.state.counter)}
				{this.props.render(this.state.counter)}
			</>
		)
	}
}

function App() {
	return (
		<Wrapper>
			<Counter render={counter => (
				<Message counter={counter} />
			)} />
			<HelloGreating />
			<BootstrapTest
				left={
					<DynamicCreating color={'primary'}>
						<h2>Hello Oleg</h2>
						<h2>Bye Oleg</h2>
					</DynamicCreating>
				}
				right={
					<DynamicCreating color={'primary'}>
						<h2>Hello Ivanna</h2>
						<h2>Bye Ivanna</h2>
					</DynamicCreating>
				}
			/>

			<WhoImI name="John" surname="Smidt" link="https://google.com" />
			<WhoImI name="Nick" surname="Smidt" link="https://google.com" />
		</Wrapper>
	);
}

export default App;
