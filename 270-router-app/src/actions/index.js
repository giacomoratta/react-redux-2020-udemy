import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder'

/*
BAD APPROACH: breaking the rules in redux
Error from react: actions must be plain objects;
-> use custom middleware for async actions.

  export const fetchPosts = async () => {
    const response = await jsonPlaceholder.get('/posts');
    return {
      type: 'FETCH_POSTS',
      payload: response
    };
  };
*/


// return a function instead of plain object
export const fetchPosts = () => {
  return async function(
    dispatch, // the usual dispatch function
    getState  // return all data inside redux store
    // , [optional] 'extraArgument'
  ) {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data
    });
  };
};

/*
    // Old version
    export const fetchUser = (id) => {
      return async function(dispatch, getState) {
        const response = await jsonPlaceholder.get(`/users/${id}`);
        dispatch({
          type: 'FETCH_USER',
          payload: response.data
        });
      };
    };

    // Mistake #1
    export const fetchUser = _.memoize(...)

    // Mistake #2
    export const fetchUser = function(id) { return _.memoize(...) }
*/

// Short solution with memoize (Lecture 264)
export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  });
});


// Alternative longer solution
// - use in PostList.componentDidMount
// - remove componentDidMount in UserHeader (and the action import)
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts()); // dispatch the result of fetchPosts action creator
  const userIds = _.map(getState().posts, 'userId');
  userIds.forEach(id => dispatch(fetchUser(id)));
};

