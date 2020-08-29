Store = container of reducers (states of the app.)

Store passed as 'prop' to Provider

Provider rendered at the very top of our application hierarchy.
So, App will be showed inside Provider.
Provider has internal reference to Store.
Provider provides information to all app components.

Each component which requires to accessing Store needs one Connect instance.

All communication Provider-Connect are exchanged not via props but via context;
context system essentially allows each parent component to communicate to any child component,
even if there are other components in between (jumping the hierarchy!).

Each component has one Connect component which:
- reaches Provider in order to get status updates;
- sends to component the action creator.

Connect does all the magic for us, and make sure all the data from state and action creators go to Components as props.

Provider wiring: see `./index.js` .


