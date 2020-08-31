// GOAL of reducers: change the existing data in according to an action.

// All data departments
// - claims history
// - policies
// - accounting

import { createStore, combineReducers } from 'redux';
import { createPolicy, createClaim, deletePolicy } from './actionCreators'

const claimHistory = (oldListOfClaims = [], action) => {
  // oldListOfClaims = [] solve the problem with empty array at first time

  if (action.type !== 'CREATE_CLAIM') return oldListOfClaims;

  // DON'T DO oldListOfClaims.push(action.payload)
  // 99% ot the times, we need to return a new array (for add/update)
  return [...oldListOfClaims, action.payload];
};


const accounting = (bagOfMoney = 0, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  }
  if (action.type === 'CREATE_POLICY') {
    return bagOfMoney - action.payload.amount;
  }
  return bagOfMoney;
};


const policies = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
  return listOfPolicies;
}

// all our reducers together
// n.b. in mapStateToProps, 'state' arg will have the following 3 props
const ourDepartments = combineReducers({
  accounting,
  claimHistory,
  policies
});

// this object represents the entire redux application
const store = createStore(ourDepartments);

// store.dispatch() used to send an action (as arg) to reducers

// EXAMPLE for dispatch
const sampleAction1 = createPolicy('Alex', 20);
console.log('sampleAction1:', sampleAction1);
store.dispatch(sampleAction1);
console.log('store state #1', store.getState());

store.dispatch(createPolicy('Jim', 30));
store.dispatch(createPolicy('Bob', 40));
console.log('store state #2', store.getState());
