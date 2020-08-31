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
    // console.log(response)
    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data
    });
  };
};
