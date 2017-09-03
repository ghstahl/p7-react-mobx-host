
import { ALL_TODOS } from '../constants';
let React = window.p7hostGlobal.React;
let mobx = window.p7hostGlobal.mobx;
export default class ViewStore {
	@mobx.observable todoBeingEdited = null;
	@mobx.observable todoFilter= ALL_TODOS;
}