import _ from 'lodash';
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from '../actions/types';

export default (state = {}, action) => {
  if (
    action.type === FETCH_STREAM ||
    action.type === CREATE_STREAM ||
    action.type === EDIT_STREAM
  ) {
    return {
      ...state,
      [action.payload.id]: action.payload
    };
  }
  if (action.type === DELETE_STREAM) {
    // 1. omit return a new state object without the property [action.payload]
    // 2. for DELETE, action.payload = the stream id (not the entire object!)
    return _.omit(state, action.payload);
  }
  if (action.type === FETCH_STREAMS) {
    // mapKeys create an object key-values, where keys are the values inside
    //   'id' attribute of each object inside action.payload array
    return {
      ...state,
      ..._.mapKeys(action.payload, 'id')
    };
  }
  return state;
};