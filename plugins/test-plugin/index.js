import TodoApp from './components/todo-app';
import TodoStore from './stores/todo-store';
import ViewStore from './stores/view-store';

let storeStore = window.p7hostGlobal.storeStore;
 
let pluginStore = storeStore.getStore('plugin-store');
 
storeStore.addStore('view-store', new ViewStore())
storeStore.addStore('todo-store', new TodoStore())


const plugin = {
    routes: [{
        path: '/todo',
        exact: true,
        component: TodoApp
    }]
}
pluginStore.addPlugin('test-plugin',plugin);