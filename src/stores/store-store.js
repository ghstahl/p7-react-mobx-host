//import * as mobx from 'mobx'
let mobx = window.p7hostGlobal.mobx;

class StoreStore {
    @mobx.observable stores = {};

    addStore (name,store) {
        this.stores[name] = store;
    }
    
	removeStore (name) {
        delete this.stores[name];
    }

    getStore(name){
        return this.stores[name];
    }
}
let storeStore = new StoreStore();
window.p7hostGlobal.storeStore = storeStore;
export default storeStore;

