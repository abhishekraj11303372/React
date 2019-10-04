import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MyInfo from "./components/MyInfo";
import Footer from "./components/Footer"
import Header from "./components/Header"
import Todo from './components/Todo'
import Contact from './components/Contact'

ReactDOM.render(<div>
<Header />
<MyInfo />
<Contact />
<Todo />
<Footer />
</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
