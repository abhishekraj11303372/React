import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MyInfo from "./components/MyInfo";
import Footer from "./components/Footer"
import Header from "./components/Header"
import Todo from './components/Todo'
import Contact from './components/Contact'
import StateEx from './components/StateEx'
import Problem from './components/Problem'
import HandlingEvents from './components/HandlingEvents'
import Count from './components/Count'
import FakeComponent from './components/FakeComponent'
import Message from './components/Message'
import Login from './components/Login'
import Project from './components/Project'
import Forms from './components/Forms'
import FormsFullComponent from'./components/FormsFullComponent'
import CongestedForm from './components/CongestedForm'

ReactDOM.render(<div>
<Header />
<FormsFullComponent />
<Forms />
<CongestedForm />
<Project />
<Login />
<Message />
<FakeComponent />
<Count />
<HandlingEvents />
<Problem />
<MyInfo />
<Contact />
<Todo />
<StateEx />
<Footer />
</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
