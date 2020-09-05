import streams from '../apis/streams';
import { SIGN_IN, SIGN_OUT } from './types';

// Action creators

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: {
      userId
    }
  }
};

export const signOut = (userId) => {
  return {
    type: SIGN_OUT,
    payload: {
      userId
    }
  }
};

export const createStream = (formValues) => {
  return async (dispatch) => {
    streams.post('/streams', formValues);
  }
};