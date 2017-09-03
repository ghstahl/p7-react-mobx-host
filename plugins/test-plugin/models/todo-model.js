let React = window.p7hostGlobal.React;
let mobx = window.p7hostGlobal.mobx;


export default class TodoModel {
	store;
	id;
	@mobx.observable title;
	@mobx.observable completed;

	constructor(store, id, title, completed) {
		this.store = store;
		this.id = id;
		this.title = title;
		this.completed = completed;
	}

	toggle() {
		this.completed = !this.completed;
	}

	destroy() {
		this.store.todos.remove(this);
	}

	setTitle(title) {
		this.title = title;
	}

	toJS() {
		return {
			id: this.id,
			title: this.title,
			completed: this.completed
		};
	}

	static fromJS(store, object) {
		return new TodoModel(store, object.id, object.title, object.completed);
	}
}