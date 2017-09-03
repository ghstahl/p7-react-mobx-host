
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import './startup';
import DevTool from 'mobx-react-devtools';
import './index.css';
import {
    Root,Home,Child,GrandChild,CatchAll
} from './root';
import App from './App';

import './stores/router-config-store';

import pluginStore from './stores/plugin-store';
import routerConfigStore from './stores/router-config-store';
import registerServiceWorker from './registerServiceWorker';
import storeStore from './stores/store-store';

pluginStore.setRootComponent(Root); 
pluginStore.setCatchAllRoute({
  path: '*',
  exact: true,
  component: CatchAll
});
pluginStore.addPlugin("root",{
  routes: [{
      path: '/',
      exact: true,
      component: App
    },
    {
      path: '/child/:id',
      component: Child,
      routes: [{
        path: '/child/:id/grand-child',
        component: GrandChild
      }]
    }
  ]
});
/*
let routeConfigStore = storeStore.getStore('router-config-store')
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
*/
/*
const routes = [
    { component: Root,
      routes: [
        { path: '/',
          exact: true,
          component: App
        },
        { path: '/todo',
          exact: true,
          component: TodoApp
        },
        { path: '/child/:id',
          component: Child,
          routes: [
            { path: '/child/:id/grand-child',
              component: GrandChild
            }
          ]
        },
        { path: '*',
          exact: true,
          component: CatchAll
        }
      ]
    }
  ]
*/
@observer
class AppRouterContainer extends React.Component {
  render() {
		const {routes} = this.props;
		return ( 
      <HashRouter>
        {/* kick it all off with the root route */}
        {renderRoutes(routes)}
      </HashRouter>
    )
	}
}
AppRouterContainer.propTypes = {
	routes: PropTypes.array.isRequired
}

ReactDOM.render((  
    <div>
    <DevTool />
    <AppRouterContainer routes={routerConfigStore.routes}></AppRouterContainer>
    
  </div>
)
, document.getElementById('root'));
registerServiceWorker();
