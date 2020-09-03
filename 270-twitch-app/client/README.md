### App Challenges
- navigation to separate pages
- login/logout with Google
- handling forms with Redux
- mastering CRUD operations with React/Redux
- user-friendly error handling


### React-Router

- `react-router`: core navigation lib (don't install manually)
- `react-router-dom`: navigation for dom-based apps
- `react-router-native`: navigation for react-native apps
- `react-router-redux`: bindings between redux and react-router (not necessary and not recommended by official react doc)

(see usage in `./src/components/App.js`)


### How react-router works

- only cares about the part after base URL
- `exact` shows the path only when it exactly matches
- `<Route>` basically works when the path contains the stated path!


### Navigation

- bad navigation: use normal links like '/abc'; every time browser will make a new request, and it will refresh all app data (e.g. state)
- `BrowserRouter` uses everything after TLD
- `HashRouter` uses everything after # as the path
- `MemoryRouter` does not use URL to track navigation
- `<Link>` component helps with navigation


### Authentication

- Use of `OAuth authentication`
- user authorizes our app to access their information
- OAuth can be used for user identification in our app
- OAuth allows our app making actions on behalf of user


### Google APIs

- Google OAuth + set origin address with localhost:3000
- gapi global object in window (browser)
- `gapi.load('client:api2')` to fetch the api code we want for the app (after this, gapi will have more methods) 
- see `GoogleAuth.js` component