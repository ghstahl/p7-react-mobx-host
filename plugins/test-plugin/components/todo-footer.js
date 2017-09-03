//import React from 'react';
import * as mobxReact from 'mobx-react';
import PropTypes from 'prop-types';
//import {pluralize} from '../utils';
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants';
let utils = window.p7hostGlobal.utils;
let pluralize = utils.pluralize;
let React = window.p7hostGlobal.React;
let observer = window.p7hostGlobal.mobxReact.observer;
@mobxReact.observer
export default class TodoFooter extends React.Component {
	render() {
		const todoStore = this.props.todoStore;
		if (!todoStore.activeTodoCount && !todoStore.completedCount)
			return null;

		const activeTodoWord = pluralize(todoStore.activeTodoCount, 'item');

		return (
			<footer className="footer">
				<span className="todo-count">
					<strong>{todoStore.activeTodoCount}</strong> {activeTodoWord} left
				</span>
				<ul className="filters">
					{this.renderFilterLink(ALL_TODOS, "", "All")}
					{this.renderFilterLink(ACTIVE_TODOS, "active", "Active")}
					{this.renderFilterLink(COMPLETED_TODOS, "completed", "Completed")}
				</ul>
				{ todoStore.completedCount === 0
					? null
					: 	<button
							className="clear-completed"
							onClick={this.clearCompleted}>
							Clear completed
						</button>
				}
			</footer>
		);
	}

	renderFilterLink(filterName, url, caption) {
		return (<li>
			<a href={"#/" + url}
				className={filterName ===  this.props.viewStore.todoFilter ? "selected" : ""}>
				{caption}
			</a>
			{' '}
		</li>)
	}

	clearCompleted = () => {
		this.props.todoStore.clearCompleted();
	};
}

TodoFooter.propTypes = {
	viewStore: PropTypes.object.isRequired,
	todoStore: PropTypes.object.isRequired
}