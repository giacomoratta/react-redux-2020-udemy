import streams from '../apis/streams';
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from './types';

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
  // 1. associate a user id (getState + auth)
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post('/streams', {
      ...formValues,
      userId
    });
    dispatch({
      type: CREATE_STREAM,
      payload: response.data
    });
    history.push('/');
  }
};

export const editStream = (id, formValues) => {
  return async (dispatch) => {
    // PUT = updates all properties
    // PATCH = updates only the properties explicitly changed
    // const response = await streams.put(`/streams/${id}`, formValues);
    const response = await streams.patch(`/streams/${id}`, formValues);
    dispatch({
      type: EDIT_STREAM,
      payload: response.data
    });
    history.push('/');
  }
};

export const fetchStreams = () => {
  return async (dispatch) => {
    const response = await streams.get('/streams');
    dispatch({
      type: FETCH_STREAMS,
      payload: response.data
    })
  }
};

export const fetchStream = (id) => {
  return async (dispatch) => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({
      type: FETCH_STREAM,
      payload: response.data
    })
  }
};

export const deleteStream =(id) => {
  return async (dispatch) => {
    await streams.delete(`/streams/${id}`);
    dispatch({
      type: DELETE_STREAM,
      payload: id
    })
  }
};