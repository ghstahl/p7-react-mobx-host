//import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import * as mobxReact from 'mobx-react';

const ENTER_KEY = 13;
let React = window.p7hostGlobal.React;
let observer = window.p7hostGlobal.mobxReact.observer;

@mobxReact.observer
export default class TodoEntry extends React.Component {
	render() {
		return (<input
			ref="newField"
			className="new-todo"
			placeholder="What needs to be done?"
			onKeyDown={this.handleNewTodoKeyDown}
			autoFocus={true}
		/>);
	}

	handleNewTodoKeyDown = (event) => {
		if (event.keyCode !== ENTER_KEY) {
			return;
		}

		event.preventDefault();

		var val = ReactDOM.findDOMNode(this.refs.newField).value.trim();

		if (val) {
			this.props.todoStore.addTodo(val);
			ReactDOM.findDOMNode(this.refs.newField).value = '';
		}
	};
}

TodoEntry.propTypes = {
	todoStore: PropTypes.object.isRequired
};