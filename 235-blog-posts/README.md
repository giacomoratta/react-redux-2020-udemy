### Main topics

- middleware
- react-thunk usage
- axios
- jsonPlaceholderAPI


###Data loading with Redux 

- components are generally responsible for fetching data they need by calling an action creator;
- action creators are responsible for making API requests;
- get fetch data into a component by generating new state in our redux store, the getting that into our component through mapStateToProps


### Middleware and redux-thunk

- middleware placed between dispatch and reducers
- redux-thunk is the middleware (with a very simple code)
- action creators cannot be async
- ...but they can return plain objects or (async) functions!
- if we dispatch a function, redux-thunk will call that function
- redux-thunk is the library which allows returning and handling functions as actions, even async functions
- redux-thunk does not care about plain object

(see actions/index.js and index.js)
