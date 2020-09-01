### Main topics

- middleware
- react-thunk usage
- async actions for react-thunk
- axios
- jsonPlaceholderAPI
- ownProps (component) for mapStateToProps
- avoid API requests with memoization (see fetchUser in `./src/actions/index.js`)
- dispatch with await (see fetchPostsAndUsers in `./src/actions/index.js`)


###Data loading with Redux 

- components are generally responsible for fetching data they need by calling an action creator;
- action creators are responsible for making API requests;
- get fetch data into a component by generating new state in our redux store, the getting that into our component through mapStateToProps


### Middleware and redux-thunk

(see `./src/actions/index.js` and `./src/index.js`)

- Schema: actionCreator -> action -> reducer -> dispatch -> state
- middleware placed between dispatch and reducers
- redux-thunk is the middleware (with a very simple code)
- action creators cannot be async
- ...but they can return plain objects or (async) functions!
- if we dispatch a function, redux-thunk will call that function
- redux-thunk is the library which allows returning and handling functions as actions, even async functions
- redux-thunk does not care about plain object

### Rules of reducers

1. Must return any value but `undefined`
2. Produces 'state', or data to be used inside of your app by using only `action + previous state`
3. Must not reach 'out of itself' to decide what value to return (reducers are pure, therefore only use state and action)
4. Must not mutate its input 'state' argument (= if state obj mutates internally, redux cannot understand the change; the only way is to return a new state object!)