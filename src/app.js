import React, { Component } from 'react';

import {
    Root,Home,Child,GrandChild,CatchAll
} from './root';

import dynamicJsCssLoader from './utils/dynamic-jscss-loader';
import './App.css';
let storeStore = window.p7hostGlobal.storeStore;

class App extends Component {
  noTodoRoutes(){
    let routeConfigStore = storeStore.getStore('router-config-store')
    routeConfigStore.clearRoutes();
    routeConfigStore.setCatchAllRoute({ path: '*',
              exact: true,
              component: CatchAll
            });
    routeConfigStore.addRoutes([
            { path: '/',
              exact: true,
              component: App
            },
            { path: '/child/:id',
              component: Child,
              routes: [
                { path: '/child/:id/grand-child',
                  component: GrandChild
                }
              ]
            }
          ]);
    routeConfigStore.setRootComponent(Root);
    routeConfigStore.publishFinalRouteTable();
	}
  withTodoRoutes(){
    let routeConfigStore = storeStore.getStore('router-config-store')
    routeConfigStore.clearRoutes();
    routeConfigStore.setCatchAllRoute({ path: '*',
              exact: true,
              component: CatchAll
            });
    routeConfigStore.addRoutes([
            { path: '/',
              exact: true,
              component: App
            },
            
            { path: '/child/:id',
              component: Child,
              routes: [
                { path: '/child/:id/grand-child',
                  component: GrandChild
                }
              ]
            }
          ]);
    routeConfigStore.setRootComponent(Root);
    routeConfigStore.publishFinalRouteTable();
  }

  loadTodoPlugin(){
    dynamicJsCssLoader.loadExternalJsCss({
      key: 'todo-component',
     jsBundle: {
        path: 'dist/bundle.js'
      }
    });
  }

  unloadTodoPlugin() {
    let storeStore = window.p7hostGlobal.storeStore;
    let pluginStore = storeStore.getStore('plugin-store');
    pluginStore.removePlugin('test-plugin');

    dynamicJsCssLoader.unloadExternalJsCss({
      key: 'todo-component',
      jsBundle: {
        path: 'dist/bundle.js'
      }
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => {this.unloadTodoPlugin()}}>Unload Todo Plugin!</button>
        <button onClick={() => {this.loadTodoPlugin()}}>Load Todo Plugin!</button>
      </div>
    );
  }
}

export default App;
