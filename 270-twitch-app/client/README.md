**App Challenges**
- navigation to separate pages
- login/logout with Google
- handling forms with Redux
- mastering CRUD operations with React/Redux
- user-friendly error handling

## Authentication

- Use of `OAuth authentication`
- user authorizes our app to access their information
- OAuth can be used for user identification in our app
- OAuth allows our app making actions on behalf of user


#### Google APIs

- Google OAuth + set origin address with localhost:3000
- gapi global object in window (browser)
- `gapi.load('client:api2')` to fetch the api code we want for the app (after this, gapi will have more methods) 
- see `GoogleAuth.js` component


#### Refactoring GoogleAuth component with Redux

- 2 actions for `SIGN_IN` and `SIGN_OUT`
- authReducer will return state.isSignedIn (state.auth)
- changed this.auth.isSignedIn to this.props.isSignedIn
- action types as constants (to avoid mistakes)


## Redux Dev Tools
- https://github.com/zalmoxisus/redux-devtools-extension
- setup with middleware and enhancers
- install chrome extension
- icon will be green after adding the following code:
```
import { createStore, applyMiddleware, compose } from 'redux';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(
    /* no middleware is fine */
  ))
);
```
- debug_session option: `http://localhost:3000/?debug_session=<random-string-5s3df6g7h>`


## Redux-form
- **doc: https://reduct-form.com**
- in react, an input element is handled by a component which has a state and setState function; input value is set from state and onChange attr. will trigger a state change with setState.
- in redux, no components will have single input values: the redux-store will store them all.
- component has props and handler for the status change (triggered by onChange); props will have some state data and the handler will dispatch the change.
- redux-form involves component, mapStateToProps, actionCreators, and Redux-Form-Reducer and it will make them working together automatically. (imported in /reducers/index.js)


## Routes and Navigation

##### Libraries
- `react-router`: core navigation lib (don't install manually)
- `react-router-dom`: navigation for dom-based apps
- `react-router-native`: navigation for react-native apps
- `react-router-redux`: bindings between redux and react-router (not necessary and not recommended by official react doc)
(see usage in `./src/components/App.js`)

### Types of Navigation
- **Intentional Navigation**: user clicks on a link component, so it is trying to go from page A to page B.
- **Programmatic Navigation**: we run code to forcibly navigate the user through our app; we create the path for the user.

### How react-router works

- only cares about the part after base URL
- `exact` shows the path only when it exactly matches
- `<Route>` basically works when the path contains the stated path!
- `<Switch>` needed to avoid to show more than 1 component matching the URL (e.g. `/streams/new` and `/streams/:id`)

##### Types of Router components

- bad navigation: use normal links like '/abc'; every time browser will make a new request, and it will refresh all app data (e.g. state)
- `BrowserRouter` uses everything after TLD
- `HashRouter` uses everything after # as the path
- `MemoryRouter` does not use URL to track navigation
- `<Link>` component helps with navigation

##### URL Selection
- **Selection Reducer**: when a user clicks on a stream to edit it, use a 'selectionReducer' to record what stream is being edited
- **URL-based selection**: put the ID of the stream being edited in the URL (recommended)

##### 'location', 'match', 'history' props
- components stated in `<Route>` element receive these special props
- location has hash, pathname, search, etc.
- match has params (declared with ':'), isExact, path, url, etc. 
- history is explained below

##### 'history' object
- created internally to BrowserRouter component
- programmatic navigation is not recorded in the history automatically
- it is very difficult to deal with history object
- good solution: create a BrowserHistory object; our 'PlainRouter' will listen to history for changes to the URL 
```
Warning: <BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.
```
- to solve the warning, we need to use a Plain Router (imported as `Router`)
- see `./actions/index.js` for history object usage


## React Portals
- in React, everything is nested in `body > div with id 'root'`
- show modals or extra elements from a component, will make them as children of the current component
    - css on the component might be complex or unchangeable, so the modal might be not rendered correctly
    - for example, z-index issues (see `public/modal.html`)
- react portal helps to show new elements and make them as direct child of body element
- see `components/Modal.js`
- made modal component reusable


## Remarks

#### Component isolation
- each component must fetch its own data (see `components/StreamEdit.js`) 
