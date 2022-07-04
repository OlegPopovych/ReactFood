import { Component } from 'react';
import './App.css';


const Header = () => {
	return <h2>Hello1</h2>
};

// const Field = () => {
// 	const holder = 'type here'
// 	const styledField = {
// 		width: "300px"
// 	};
// 	return <input
// 		placeholder={holder}
// 		type='text'
// 		style={styledField} />
// }

class Field extends Component {  // запис через класи, попередньо імпортуємо Component із React бібліотеки
	render() {
		const holder = 'type here'
		const styledField = {
			width: "300px"
		};
		return <input
			placeholder={holder}
			type='text'
			style={styledField} />
	}
}





function Btn() {
	const text1 = 'log in'
	const res = () => {
		return 'log in'
	}
	const logged = false;
	//return <button>{res()}</button>
	return <button>{logged ? 'Enter' : text1}</button>

}

class WhoImI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			years: 33,
			text: "++",
			position: ""
		}
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

	render() {
		const { name, surname, link } = this.props;
		const { position, years } = this.state;
		return (
			<div>
				<button onClick={this.nextYear}>{this.state.text}</button>
				<h1>My name is {name}, surname - {surname}, age - {years}, посада - {position}</h1>
				<a href={link}>Mi profile</a>
				<form>
					<span>Введіть посаду</span>
					<input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
				</form>
			</div>
		)
	}
}



function App() {
	return (
		<div className="App">
			<Header />
			<Field />
			<Btn />
			<WhoImI name="John" surname="Smidt" link="https://google.com" />
			<br />
			<br />
			<br />
			<WhoImI name="Nick" surname="Smidt" link="https://google.com" />




			{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
		</div>
	);
}

export default App;
