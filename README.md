# p7-react-mobx-host
POC to dynamically load plugins  

Plugins are basically a mini spa that carries everything it needs.  However it needs to be hosted inside a hosting SPA that dictates how routes and other assets are to be advertised to make it appear that we built a big monolith SPA.

The host carries all the reusable code, like React and MobX, which makes the plugin very small.


Thanks to using MobX, as opposed to redux, I was able to simply have the plugin provide routes.  When a plugin shows up, they advertise their routes and their state management is private to them.

# Plugin
```
./plugins/npm run build:dev-test-plugin
```
This builds the plugin bundle.
```
Copy ./plugins/dist to ./src/dist/dist
```

# Run the host
```
./npm start
```

# ToDo
unload the plugin


