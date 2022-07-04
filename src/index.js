import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*   // lesson 1

//const elem = <h2>Hello world!</h2>;    // React елемент
//or:
//const elem = React.createElement('h2', { className: "greatings" }, "Hello world!");  //так ніхто не робить!!!

const text = 'Hello World!';
const elem = (
	<div>
		<h1 className='text'>Текст: {text}</h1>
		<input type="text" />
		<lebel htmlFor="123"></lebel>
		<button tabIndex={0}>click</button>
	</div>
);  // class, for - слова зерезервовані, замість них писати className, htmlFor

*/





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	//elem,
	<React.StrictMode>
		<App />
	</React.StrictMode>
);


reportWebVitals();
