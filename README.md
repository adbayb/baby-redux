# baby-redux

A small and lightweight Redux implementation  


## API

Documentation credit goes to http://redux.js.org/ 

### createStore
```javascript 
const store = createStore(reducer);
```

Creates a Redux store that holds the complete state tree of your app.

### dispatch

```javascript
store.dispatch(action);
```

Dispatches an action. This is the only way to trigger a state change.

### getState 

```javascript
store.getState();
```

Returns the current state tree of your application.
It is equal to the last value returned by the store's reducer.

### subscribe

```javascript
store.subscribe(listener);
```

Adds a change listener (callback function). It will be called any time an action is dispatched, and some part of the state tree may potentially have changed. 
You may then call getState() to read the current state tree inside the callback.


## License

[MIT](./LICENSE "License MIT")