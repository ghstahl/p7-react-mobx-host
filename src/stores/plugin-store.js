//import * as mobx from 'mobx'
let mobx = window.p7hostGlobal.mobx;

import storeStore from './store-store';
import routerConfigStore from './router-config-store';

class PluginStore {
    @mobx.observable plugins = {};

    rootComponent = null;
    catchAllRoute = null;

    setRootComponent(component) {
        this.rootComponent = component;
    }

    setCatchAllRoute(route) {
        this.catchAllRoute = route;
    }

    addPlugin(name, plugin) {
        this.plugins[name] = plugin;
        routerConfigStore.setCatchAllRoute(this.catchAllRoute);
        for (var key in this.plugins) {
            let value = this.plugins[key];
            routerConfigStore.addRoutes(value.routes);
            console.log(value);
        }

       
        routerConfigStore.setRootComponent(this.rootComponent);
        routerConfigStore.publishFinalRouteTable();
    }

    removePlugin(name) {
        delete this.plugins[name];
    }

    getPlugin(name) {
        return this.plugins[name];
    }
}

let pluginStore = new PluginStore();

storeStore.addStore('plugin-store', pluginStore)
export default pluginStore;